'use client';

import React, { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';
import { gsap } from 'gsap';

interface ParticleSystem {
  index: number;
  positions: THREE.Float32BufferAttribute[];
  maxCount: number;
  currentTween: gsap.core.Tween | null;
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  points: THREE.Points;
  morph0: () => void;
  morph1: () => void;
  morph2: () => void;
}

interface MouseTrailEntry {
  x: number;
  y: number;
  time: number;
}

interface Sizes {
  width: number;
  height: number;
  pixelRatio: number;
}

interface ParticleViewerProps {
  enableDebugControls?: boolean;
}

const ParticleViewer: React.FC<ParticleViewerProps> = ({ enableDebugControls = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const particlesRef = useRef<ParticleSystem | null>(null);
  const animationFrameRef = useRef<number>(0);
  const clockRef = useRef<THREE.Clock>(new THREE.Clock());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const sizesRef = useRef<Sizes>({
    width: 0,
    height: 0,
    pixelRatio: 1
  });

  // Background effect refs
  const backgroundMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const backgroundPlaneRef = useRef<THREE.Mesh | null>(null);
  const uvCoordsRef = useRef<THREE.Vector2>(new THREE.Vector2(0.5, 0.5));
  const lastMouseMoveTimeRef = useRef<number>(0);
  const isMouseMovingRef = useRef<boolean>(false);
  const mouseTrailRef = useRef<MouseTrailEntry[]>([]);
  const frameCountRef = useRef<number>(0);
  const intersectionCheckCounterRef = useRef<number>(0);

  const TRAIL_LENGTH = 20;
  const INTERSECTION_CHECK_FREQUENCY = 2;

  // Shader sources
  const particlesVertexShader = `
    uniform vec2 uResolution;
    uniform float uSize;
    uniform vec3 uHoverPosition;
    uniform float uProgress;
    
    attribute vec3 aPositionTarget;
    varying float vDistance;
    
    //	Simplex 3D Noise 
    //	by Ian McEwan, Ashima Arts
    vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
    vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

    float simplexNoise3d(vec3 v) {
        const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
        const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i  = floor(v + dot(v, C.yyy) );
        vec3 x0 =   v - i + dot(i, C.xxx) ;

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min( g.xyz, l.zxy );
        vec3 i2 = max( g.xyz, l.zxy );

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1. + 3.0 * C.xxx;

        i = mod(i, 289.0 ); 
        vec4 p = permute( permute( permute( i.z + vec4(0.0, i1.z, i2.z, 1.0 )) + i.y + vec4(0.0, i1.y, i2.y, 1.0 ))  + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

        float n_ = 1.0/7.0;
        vec3  ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z *ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_ );

        vec4 x = x_ *ns.x + ns.yyyy;
        vec4 y = y_ *ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4( x.xy, y.xy );
        vec4 b1 = vec4( x.zw, y.zw );

        vec4 s0 = floor(b0)*2.0 + 1.0;
        vec4 s1 = floor(b1)*2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
        vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

        vec3 p0 = vec3(a0.xy,h.x);
        vec3 p1 = vec3(a0.zw,h.y);
        vec3 p2 = vec3(a1.xy,h.z);
        vec3 p3 = vec3(a1.zw,h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
        m = m * m;
        return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3) ) );
    }
    
    void main() {
        float noiseOrigin = simplexNoise3d(position * 0.2);
        float noiseTarget = simplexNoise3d(aPositionTarget * 0.2);
        float noise = mix(noiseOrigin, noiseTarget, uProgress);
        noise = smoothstep(-1.0, 1.0, noise);
        
        float duration = 0.4;
        float delay = (1.0 - duration) * noise;
        float end = delay + duration;
        float progress = smoothstep(delay, end, uProgress);
        vec3 mixedPosition = mix(position, aPositionTarget, progress);

        vec4 modelPosition = modelMatrix * vec4(mixedPosition, 1.0);

        float distanceToHover = distance(modelPosition.xyz, uHoverPosition);
        float pushStrength = smoothstep(1.5, 0.0, distanceToHover);
        vec3 normal = normalize(modelPosition.xyz - uHoverPosition);
        modelPosition.xyz += normal * pushStrength * 0.05;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        gl_PointSize = uSize * uResolution.y;
        gl_PointSize *= (1.0 / -viewPosition.z);

        vDistance = distanceToHover;
    }
  `;

  const particlesFragmentShader = `
    varying float vDistance;
    
    void main() {
        vec2 uv = gl_PointCoord;
        float distanceToCenter = length(uv - vec2(0.5));

        if(distanceToCenter > 0.5)
            discard;
            
        float intensity = smoothstep(0.0, 2.0, vDistance);
        vec4 color = mix(vec4(1.0, 0.7, 0.0, 1.0), vec4(0.1,0.1,0.1,1.0), intensity);
        gl_FragColor = vec4(color);
    }
  `;

  const backgroundVertexShader = `
    varying vec2 vUv;
    
    void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `;

  const backgroundFragmentShader = `
    uniform float iTime;
    uniform sampler2D iTexture;
    uniform vec2 iResolution;
    uniform vec2 iTextureSize;
    uniform vec2 iMouse;
    uniform vec3 iMouseTrail[20];
    uniform float iLastMoveTime;
    uniform float iIsMouseMoving;
    varying vec2 vUv;
    
    float random(vec2 st) {
        return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
    }
    
    float noise(vec2 st) {
        vec2 i = floor(st);
        vec2 f = fract(st);
        
        float a = random(i);
        float b = random(i + vec2(1.0, 0.0));
        float c = random(i + vec2(0.0, 1.0));
        float d = random(i + vec2(1.0, 1.0));
        
        vec2 u = f * f * (3.0 - 2.0 * f);
        
        return mix(a, b, u.x) + 
               (c - a)* u.y * (1.0 - u.x) + 
               (d - b) * u.x * u.y;
    }
    
    void main() {
        vec2 tiledUv = vUv * iResolution / iTextureSize;
        
        vec2 movedUv = tiledUv + vec2(
            sin(iTime * 0.2) * 0.5, 
            cos(iTime * 0.2) * 0.5
        );
        
        movedUv = fract(movedUv);
        
        vec4 textureColor = texture2D(iTexture, movedUv);
        
        float columnWidth = 0.01;
        int numColumns = 10;
        
        int columnIndex = int(vUv.x / columnWidth);
        
        float columnSeed = random(vec2(float(columnIndex), 0.0));
        
        float dropSpeed = 0.06 + columnSeed * 0.1;
        float tailLength = 0.1 + columnSeed * 0.5;
        float timeOffset = columnSeed * 5.0;
        
        float flowY = 1.0 - mod((iTime + timeOffset) * dropSpeed, 1.5);
        
        vec2 distortedUv = vUv;
        
        float pixelHeight = 0.005;
        
        float streamTop = flowY;
        float streamBottom = flowY + tailLength;
        
        streamTop += noise(vec2(float(columnIndex), iTime)) * 0.1;
        
        float xOffset = 0.0;
        
        if (vUv.y > streamTop && vUv.y < streamBottom) {
            float distortStrength = 1.0 - (vUv.y - streamTop) / (streamBottom - streamTop);
            distortStrength = pow(distortStrength, 0.5);
            
            float discretePixelPos = floor(vUv.y / pixelHeight) * pixelHeight;
            float nextPixelPos = discretePixelPos + pixelHeight;
            
            if (noise(vec2(float(columnIndex) * 0.1, floor(iTime))) > 0.6) {
                distortedUv.x += xOffset;
                distortedUv.y = mix(discretePixelPos, nextPixelPos, fract(vUv.y / pixelHeight));
            }
        }
        
        float alpha = 0.0;
        
        if (vUv.y > streamTop && vUv.y < streamBottom) {
            float alphaFactor = 1.0 - (vUv.y - streamTop) / (streamBottom - streamTop);
            alphaFactor = pow(alphaFactor, 0.5);
            
            alpha = random(distortedUv + vec2(iTime * 0.1)) * 0.6 * alphaFactor;
            
            float discretePixelPos = floor(vUv.y / pixelHeight) * pixelHeight;
            
            if (random(vec2(discretePixelPos, float(columnIndex))) > 0.3) {
                alpha *= 1.0;
            } else {
                alpha *= 0.3;
            }
        }
        
        vec4 finalColor = vec4(textureColor.rgb, alpha);
        
        vec3 cursorColor = vec3(1.0, 0.7, 0.0);
        float cursorRadius = 0.04;
        float cursorAlpha = 0.0;
        
        float timeSinceLastMove = iTime - iLastMoveTime;
        float fadeOutDuration = 1.5;
        float fadeFactor = 1.0;
        
        if (iIsMouseMoving < 0.5) {
            fadeFactor = max(0.0, 1.0 - (timeSinceLastMove / fadeOutDuration));
        }
        
        float cursorDist = distance(vUv, iMouse);
        
        if(cursorDist < cursorRadius) {
            float mainCursorAlpha = (1.0 - cursorDist / cursorRadius) * 0.8 * fadeFactor;
            cursorAlpha = max(cursorAlpha, mainCursorAlpha);
        }
        
        for(int i = 0; i < 20; i++) {
            if(iMouseTrail[i].z < 0.0) continue;
            
            vec2 trailPos = iMouseTrail[i].xy;
            float trailTime = iMouseTrail[i].z;
            float trailDist = distance(vUv, trailPos);
            
            float timeAlive = iTime - trailTime;
            float fadeTime = 2.0;
            float timeFactor = max(0.0, 1.0 - timeAlive / fadeTime);
            
            float trailFactor = max(0.3, 1.0 - float(i) / 20.0);
            float trailRadius = cursorRadius * (0.5 + trailFactor * 0.5);
            
            if(trailDist < trailRadius) {
                float currentTrailAlpha = (1.0 - trailDist / trailRadius) * trailFactor * timeFactor * 0.7 * fadeFactor;
                cursorAlpha = max(cursorAlpha, currentTrailAlpha);
            }
        }
        
        finalColor.rgb = mix(finalColor.rgb, cursorColor, cursorAlpha);
        finalColor.a = max(finalColor.a, cursorAlpha);
        
        gl_FragColor = finalColor;
    }
  `;

  const updateSizes = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    sizesRef.current = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: Math.min(window.devicePixelRatio, 2)
    };
  }, []);

  const handleResize = useCallback(() => {
    updateSizes();
    
    const sizes = sizesRef.current;
    const camera = cameraRef.current;
    const renderer = rendererRef.current;
    const particles = particlesRef.current;
    const backgroundMaterial = backgroundMaterialRef.current;
    const backgroundPlane = backgroundPlaneRef.current;

    if (particles?.material?.uniforms?.uResolution) {
      particles.material.uniforms.uResolution.value.set(
        sizes.width * sizes.pixelRatio,
        sizes.height * sizes.pixelRatio
      );
    }

    if (camera) {
      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();
    }

    if (renderer) {
      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(sizes.pixelRatio);
    }

    if (backgroundMaterial?.uniforms?.iResolution) {
      backgroundMaterial.uniforms.iResolution.value.set(sizes.width, sizes.height);
    }

    if (backgroundPlane) {
      backgroundPlane.geometry.dispose();
      backgroundPlane.geometry = new THREE.PlaneGeometry(
        sizes.width / 100,
        sizes.height / 100
      );
    }
  }, [updateSizes]);

  const morphTo = useCallback((index: number) => {
    const particles = particlesRef.current;
    if (!particles || index >= particles.positions.length) return;

    particles.geometry.attributes.position = particles.positions[particles.index];
    particles.geometry.attributes.aPositionTarget = particles.positions[index];
    particles.geometry.attributes.position.needsUpdate = true;
    particles.geometry.attributes.aPositionTarget.needsUpdate = true;

    if (particles.currentTween) {
      particles.currentTween.kill();
    }

    particles.currentTween = gsap.fromTo(
      particles.material.uniforms.uProgress,
      { value: 0 },
      { value: 1, duration: 0.75, ease: 'linear' }
    );

    particles.index = index;
  }, []);

  const checkIntersections = useCallback(() => {
    const particles = particlesRef.current;
    const mouse = mouseRef.current;
    const camera = cameraRef.current;
    const raycaster = raycasterRef.current;

    if (!particles || !camera) return;

    intersectionCheckCounterRef.current++;
    if (intersectionCheckCounterRef.current % INTERSECTION_CHECK_FREQUENCY !== 0) return;

    if (particles.material.uniforms.uProgress.value > 0.01) {
      const tempGeometry = new THREE.BufferGeometry();
      const positions = particles.geometry.attributes.position;
      const targetPositions = particles.geometry.attributes.aPositionTarget;
      const progress = particles.material.uniforms.uProgress.value;

      const interpolatedPositions = new Float32Array(positions.count * 3);
      for (let i = 0; i < positions.count; i++) {
        const i3 = i * 3;
        interpolatedPositions[i3] = positions.array[i3] * (1 - progress) + targetPositions.array[i3] * progress;
        interpolatedPositions[i3 + 1] = positions.array[i3 + 1] * (1 - progress) + targetPositions.array[i3 + 1] * progress;
        interpolatedPositions[i3 + 2] = positions.array[i3 + 2] * (1 - progress) + targetPositions.array[i3 + 2] * progress;
      }

      tempGeometry.setAttribute('position', new THREE.Float32BufferAttribute(interpolatedPositions, 3));

      const tempPoints = new THREE.Points(tempGeometry, new THREE.PointsMaterial({ size: 0.1, visible: false }));
      tempPoints.position.copy(particles.points.position);
      tempPoints.rotation.copy(particles.points.rotation);
      tempPoints.scale.copy(particles.points.scale);

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(tempPoints);

      if (intersects.length > 0) {
        const point = intersects[0].point;
        particles.material.uniforms.uHoverPosition.value = point;
      } else {
        particles.material.uniforms.uHoverPosition.value.set(100, 100, 100);
      }

      tempGeometry.dispose();
    } else {
      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(particles.points);
      if (intersects.length > 0) {
        const point = intersects[0].point;
        particles.material.uniforms.uHoverPosition.value = point;
      } else {
        particles.material.uniforms.uHoverPosition.value.set(100, 100, 100);
      }
    }
  }, []);

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const canvas = canvasRef.current;
    const renderer = rendererRef.current;
    const camera = cameraRef.current;
    const raycaster = raycasterRef.current;
    const backgroundMaterial = backgroundMaterialRef.current;
    const backgroundPlane = backgroundPlaneRef.current;

    if (!canvas || !renderer || !camera) return;

    const rect = canvas.getBoundingClientRect();
    const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    mouseRef.current.x = mouseX;
    mouseRef.current.y = mouseY;

    lastMouseMoveTimeRef.current = performance.now() * 0.001;
    isMouseMovingRef.current = true;

    if (backgroundMaterial && backgroundPlane) {
      raycaster.setFromCamera(mouseRef.current, camera);
      const intersects = raycaster.intersectObject(backgroundPlane);

      if (intersects.length > 0) {
        const uv = intersects[0].uv!;
        const now = clockRef.current.getElapsedTime();
        const lastPointTime = mouseTrailRef.current.length > 0 ? mouseTrailRef.current[0].time : 0;

        const timeSinceLastPoint = now - lastPointTime;
        const minDistance = 0.001;

        const lastPos = mouseTrailRef.current.length > 0
          ? new THREE.Vector2(mouseTrailRef.current[0].x, mouseTrailRef.current[0].y)
          : new THREE.Vector2(-1, -1);

        const distanceMoved = lastPos.distanceTo(new THREE.Vector2(uv.x, uv.y));

        if ((timeSinceLastPoint > 0.05 && distanceMoved > minDistance) || timeSinceLastPoint > 0.2) {
          uvCoordsRef.current.set(uv.x, uv.y);

          mouseTrailRef.current.unshift({
            x: uv.x,
            y: uv.y,
            time: now
          });

          if (mouseTrailRef.current.length > TRAIL_LENGTH) {
            mouseTrailRef.current.pop();
          }
        }
      }
    }
  }, []);

  const loadModel = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    gltfLoader.setDRACOLoader(dracoLoader);

    // For demo purposes, we'll create some mock geometry since the model file isn't available
    // In a real implementation, you would load your actual .glb file
    const createMockGeometry = (scale: number, offset: THREE.Vector3) => {
      const geometry = new THREE.SphereGeometry(1, 32, 32);
      const positions = geometry.attributes.position.array;
      const newPositions = new Float32Array(positions.length);
      
      for (let i = 0; i < positions.length; i += 3) {
        newPositions[i] = positions[i] * scale + offset.x;
        newPositions[i + 1] = positions[i + 1] * scale + offset.y;
        newPositions[i + 2] = positions[i + 2] * scale + offset.z;
      }
      
      return new THREE.Float32BufferAttribute(newPositions, 3);
    };

    // Create mock positions for different morphing states
    const mockPositions = [
      createMockGeometry(1, new THREE.Vector3(0, 0, 0)),
      createMockGeometry(1.5, new THREE.Vector3(2, 0, 0)),
      createMockGeometry(0.8, new THREE.Vector3(-1, 2, 0)),
      createMockGeometry(1.2, new THREE.Vector3(0, -1, 1))
    ];

    const maxCount = Math.max(...mockPositions.map(pos => pos.count));

    const processedPositions = mockPositions.map(position => {
      const originalArray = position.array;
      const newArray = new Float32Array(maxCount * 3);
      const originalCount = position.count;

      for (let i = 0; i < maxCount; i++) {
        const i3 = i * 3;

        if (i < originalCount) {
          newArray[i3] = originalArray[i3];
          newArray[i3 + 1] = originalArray[i3 + 1];
          newArray[i3 + 2] = originalArray[i3 + 2];
        } else {
          const randomIndex = Math.floor(originalCount * Math.random()) * 3;
          newArray[i3] = originalArray[randomIndex];
          newArray[i3 + 1] = originalArray[randomIndex + 1];
          newArray[i3 + 2] = originalArray[randomIndex + 2];
        }
      }

      return new THREE.Float32BufferAttribute(newArray, 3);
    });

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', processedPositions[1]);
    geometry.setAttribute('aPositionTarget', processedPositions[0]);

    const sizes = sizesRef.current;
    const material = new THREE.ShaderMaterial({
      vertexShader: particlesVertexShader,
      fragmentShader: particlesFragmentShader,
      uniforms: {
        uSize: new THREE.Uniform(0.1),
        uResolution: new THREE.Uniform(
          new THREE.Vector2(
            sizes.width * sizes.pixelRatio,
            sizes.height * sizes.pixelRatio
          )
        ),
        uHoverPosition: { value: new THREE.Vector3(100, 100, 100) },
        uProgress: new THREE.Uniform(0),
      },
      depthWrite: true
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    particlesRef.current = {
      index: 1,
      positions: processedPositions,
      maxCount,
      currentTween: null,
      geometry,
      material,
      points,
      morph0: () => morphTo(0),
      morph1: () => morphTo(1),
      morph2: () => morphTo(2)
    };
  }, [morphTo]);

  const loadBackgroundTexture = useCallback(() => {
    const scene = sceneRef.current;
    if (!scene) return;

    const textureLoader = new THREE.TextureLoader();
    
    // Create a simple procedural texture since the pattern.jpg isn't available
    const canvas = document.createElement('canvas');
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext('2d')!;
    
    // Create a simple pattern
    ctx.fillStyle = '#111111';
    ctx.fillRect(0, 0, 256, 256);
    
    for (let i = 0; i < 100; i++) {
      ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.1})`;
      ctx.fillRect(
        Math.random() * 256,
        Math.random() * 256,
        Math.random() * 10,
        Math.random() * 10
      );
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.generateMipmaps = true;
    texture.minFilter = THREE.LinearMipmapLinearFilter;
    texture.magFilter = THREE.LinearFilter;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;

    const sizes = sizesRef.current;
    const geometry = new THREE.PlaneGeometry(
      sizes.width / 100,
      sizes.height / 100
    );

    const material = new THREE.ShaderMaterial({
      transparent: true,
      uniforms: {
        iTime: { value: 0 },
        iTexture: { value: texture },
        iResolution: { value: new THREE.Vector2(sizes.width, sizes.height) },
        iTextureSize: { value: new THREE.Vector2(256, 256) },
        iMouse: { value: new THREE.Vector2(0.5, 0.5) },
        iMouseTrail: { value: Array.from({ length: TRAIL_LENGTH }, () => new THREE.Vector3(0, 0, 0)) },
        iLastMoveTime: { value: 0 },
        iIsMouseMoving: { value: 0 }
      },
      vertexShader: backgroundVertexShader,
      fragmentShader: backgroundFragmentShader
    });

    const plane = new THREE.Mesh(geometry, material);
    plane.position.z = 5;
    scene.add(plane);

    backgroundMaterialRef.current = material;
    backgroundPlaneRef.current = plane;
  }, []);

  const animate = useCallback(() => {
    const clock = clockRef.current;
    const renderer = rendererRef.current;
    const scene = sceneRef.current;
    const camera = cameraRef.current;
    const particles = particlesRef.current;
    const backgroundMaterial = backgroundMaterialRef.current;
    const backgroundPlane = backgroundPlaneRef.current;

    if (!renderer || !scene || !camera) return;

    const elapsedTime = clock.getElapsedTime();
    frameCountRef.current++;

    // Check intersections
    checkIntersections();

    // Update background material
    if (backgroundMaterial) {
      backgroundMaterial.uniforms.iTime.value = elapsedTime;

      if (isMouseMovingRef.current && elapsedTime - lastMouseMoveTimeRef.current > 0.1) {
        isMouseMovingRef.current = false;
      }

      backgroundMaterial.uniforms.iLastMoveTime.value = lastMouseMoveTimeRef.current;
      backgroundMaterial.uniforms.iIsMouseMoving.value = isMouseMovingRef.current ? 1.0 : 0.0;

      if (backgroundPlane) {
        backgroundMaterial.uniforms.iMouse.value.copy(uvCoordsRef.current);

        const trailArray = [];
        for (let i = 0; i < TRAIL_LENGTH; i++) {
          if (i < mouseTrailRef.current.length) {
            const entry = mouseTrailRef.current[i];
            trailArray.push(new THREE.Vector3(entry.x, entry.y, entry.time));
          } else {
            trailArray.push(new THREE.Vector3(0, 0, -1));
          }
        }
        backgroundMaterial.uniforms.iMouseTrail.value = trailArray;
      }
    }

    // Update particle position with mouse movement
    if (particles && frameCountRef.current % 2 === 0) {
      const maxOffset = 1;
      const moveFactor = 0.05;
      const mouse = mouseRef.current;

      let offsetX = -mouse.x * moveFactor;
      let offsetY = mouse.y * moveFactor;

      offsetX = Math.max(Math.min(offsetX, maxOffset), -maxOffset);
      offsetY = Math.max(Math.min(offsetY, maxOffset), -maxOffset);

      particles.points.position.x = -offsetX;
      particles.points.position.y = -offsetY;
    }

    renderer.render(scene, camera);
    animationFrameRef.current = requestAnimationFrame(animate);
  }, [checkIntersections]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    // Initialize sizes
    updateSizes();
    const sizes = sizesRef.current;

    // Create scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 100);
    camera.position.set(0, 0, 16);
    scene.add(camera);
    cameraRef.current = camera;

    // Create renderer
    const renderer = new THREE.WebGLRenderer({
      canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    // Load model and background
    loadModel();
    loadBackgroundTexture();

    // Setup debug controls if enabled
    if (enableDebugControls && typeof window !== 'undefined') {
      import('lil-gui').then(({ GUI }) => {
        const gui = new GUI({ width: 340 });
        
        // Wait for particles to load before adding controls
        const checkParticles = () => {
          if (particlesRef.current) {
            const particles = particlesRef.current;
            gui.add({ morph0: () => morphTo(0) }, 'morph0');
            gui.add({ morph1: () => morphTo(1) }, 'morph1');
            gui.add({ morph2: () => morphTo(2) }, 'morph2');
          } else {
            setTimeout(checkParticles, 100);
          }
        };
        checkParticles();

        // Cleanup function will include GUI disposal
        return () => gui.destroy();
      });
    }

    // Add event listeners
    window.addEventListener('resize', handleResize);
    canvas.addEventListener('mousemove', handleMouseMove);

    // Start animation
    animate();

    return () => {
      // Cleanup
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Dispose of Three.js objects
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        particlesRef.current.material.dispose();
        scene.remove(particlesRef.current.points);
      }

      if (backgroundMaterialRef.current && backgroundPlaneRef.current) {
        backgroundPlaneRef.current.geometry.dispose();
        backgroundMaterialRef.current.dispose();
        scene.remove(backgroundPlaneRef.current);
      }

      renderer.dispose();
    };
  }, [updateSizes, handleResize, handleMouseMove, loadModel, loadBackgroundTexture, animate, enableDebugControls, morphTo]);

  return (
    <canvas 
      ref={canvasRef}
      className="block"
      style={{ width: '100vw', height: '100vh' }}
    />
  );
};

export default ParticleViewer;