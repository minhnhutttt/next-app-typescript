'use client';

import { useEffect, useRef, useCallback } from 'react';
import * as THREE from 'three';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';
import gsap from 'gsap';
import GUI from 'lil-gui';

// Shader sources
const particlesVertexShader = `
uniform vec2 uResolution;
uniform float uSize;
uniform vec3 uHoverPosition;
uniform float uProgress;

attribute vec3 aPositionTarget;
varying float vDistance;

// Simplex 3D Noise
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

// Types
interface Particles {
  index: number;
  positions: THREE.Float32BufferAttribute[];
  maxCount: number;
  currentTween: gsap.core.Tween | null;
  geometry: THREE.BufferGeometry;
  material: THREE.ShaderMaterial;
  points: THREE.Points;
  morph0?: () => void;
  morph1?: () => void;
  morph2?: () => void;
}

interface MouseTrailEntry {
  x: number;
  y: number;
  time: number;
}

interface Props {
  className?: string;
  showGUI?: boolean;
}

const ParticleSystem: React.FC<Props> = ({ className = "", showGUI = false }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();
  const sceneDataRef = useRef<{
    scene?: THREE.Scene;
    camera?: THREE.PerspectiveCamera;
    renderer?: THREE.WebGLRenderer;
    particles?: Particles | null;
    pointsMesh?: THREE.Points | null;
    backgroundMaterial?: THREE.ShaderMaterial | null;
    backgroundPlane?: THREE.Mesh | null;
    gui?: GUI | null;
    clock?: THREE.Clock;
    isLoaded: boolean;
    mouse: THREE.Vector2;
    raycaster: THREE.Raycaster;
    mouseTrail: MouseTrailEntry[];
    uvCoords: THREE.Vector2;
    lastMouseMoveTime: number;
    isMouseMoving: boolean;
    intersectionCheckCounter: number;
    frameCount: number;
    sizes: { width: number; height: number; pixelRatio: number };
  }>({
    isLoaded: false,
    mouse: new THREE.Vector2(),
    raycaster: new THREE.Raycaster(),
    mouseTrail: [],
    uvCoords: new THREE.Vector2(0.5, 0.5),
    lastMouseMoveTime: 0,
    isMouseMoving: false,
    intersectionCheckCounter: 0,
    frameCount: 0,
    sizes: { width: 0, height: 0, pixelRatio: 1 }
  });

  const TRAIL_LENGTH = 20;
  const INTERSECTION_CHECK_FREQUENCY = 2;
  const moveFactor = 0.05;
  const initialPosition = new THREE.Vector3(0, 0, 0);

  // Morphing function
  const morphTo = useCallback((index: number) => {
    const particles = sceneDataRef.current.particles;
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

  // Setup GUI controls
  const setupGUI = useCallback(() => {
    const particles = sceneDataRef.current.particles;
    const gui = sceneDataRef.current.gui;
    if (!particles || !gui) return;
    
    particles.morph0 = () => morphTo(0);
    particles.morph1 = () => morphTo(1);
    particles.morph2 = () => morphTo(2);

    gui.add(particles, 'morph0').name('Morph to Shape 1');
    gui.add(particles, 'morph1').name('Morph to Shape 2');
    gui.add(particles, 'morph2').name('Morph to Shape 3');
  }, [morphTo]);

  // Intersection checking
  const checkIntersections = useCallback(() => {
    const sceneData = sceneDataRef.current;
    const particles = sceneData.particles;
    if (!particles || !sceneData.camera) return;

    sceneData.intersectionCheckCounter++;
    if (sceneData.intersectionCheckCounter % INTERSECTION_CHECK_FREQUENCY !== 0) return;

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
      
      sceneData.raycaster.setFromCamera(sceneData.mouse, sceneData.camera);
      const intersects = sceneData.raycaster.intersectObject(tempPoints);
      
      if (intersects.length > 0) {
        const point = intersects[0].point;
        particles.material.uniforms.uHoverPosition.value = point;
      } else {
        particles.material.uniforms.uHoverPosition.value.set(100, 100, 100);
      }
      
      tempGeometry.dispose();
    } else {
      sceneData.raycaster.setFromCamera(sceneData.mouse, sceneData.camera);
      const intersects = sceneData.raycaster.intersectObject(particles.points);
      if (intersects.length > 0) {
        const point = intersects[0].point;
        particles.material.uniforms.uHoverPosition.value = point;
      } else {
        particles.material.uniforms.uHoverPosition.value.set(100, 100, 100);
      }
    }
  }, []);

  // Mouse move handler
  const onMouseMove = useCallback((event: MouseEvent) => {
    const sceneData = sceneDataRef.current;
    if (!sceneData.renderer || !sceneData.clock) return;

    const rect = sceneData.renderer.domElement.getBoundingClientRect();
    const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    
    sceneData.mouse.x = mouseX;
    sceneData.mouse.y = mouseY;
    
    sceneData.lastMouseMoveTime = sceneData.clock.getElapsedTime();
    sceneData.isMouseMoving = true;
  }, []);

  // Resize handler
  const handleResize = useCallback(() => {
    const sceneData = sceneDataRef.current;
    if (!containerRef.current || !sceneData.camera || !sceneData.renderer) return;
    
    sceneData.sizes.width = containerRef.current.clientWidth;
    sceneData.sizes.height = containerRef.current.clientHeight;
    sceneData.sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

    const particles = sceneData.particles;
    if (particles?.material?.uniforms?.uResolution) {
      particles.material.uniforms.uResolution.value.set(
        sceneData.sizes.width * sceneData.sizes.pixelRatio, 
        sceneData.sizes.height * sceneData.sizes.pixelRatio
      );
    }

    sceneData.camera.aspect = sceneData.sizes.width / sceneData.sizes.height;
    sceneData.camera.updateProjectionMatrix();

    sceneData.renderer.setSize(sceneData.sizes.width, sceneData.sizes.height);
    sceneData.renderer.setPixelRatio(sceneData.sizes.pixelRatio);
    
    const backgroundMaterial = sceneData.backgroundMaterial;
    if (backgroundMaterial?.uniforms?.iResolution) {
      backgroundMaterial.uniforms.iResolution.value.set(sceneData.sizes.width, sceneData.sizes.height);
    }
    
    const backgroundPlane = sceneData.backgroundPlane;
    if (backgroundPlane) {
      backgroundPlane.geometry.dispose();
      backgroundPlane.geometry = new THREE.PlaneGeometry(
        sceneData.sizes.width / 100,
        sceneData.sizes.height / 100
      );
    }
  }, []);

  // Animation loop
  const tick = useCallback(() => {
    const sceneData = sceneDataRef.current;
    if (!sceneData.scene || !sceneData.camera || !sceneData.renderer || !sceneData.clock) return;

    const elapsedTime = sceneData.clock.getElapsedTime();
    sceneData.frameCount++;
    
    checkIntersections();
    
    // Update background material
    const backgroundMaterial = sceneData.backgroundMaterial;
    if (backgroundMaterial) {
      backgroundMaterial.uniforms.iTime.value = elapsedTime;
      
      if (sceneData.isMouseMoving && elapsedTime - sceneData.lastMouseMoveTime > 0.1) {
        sceneData.isMouseMoving = false;
      }
      
      backgroundMaterial.uniforms.iLastMoveTime.value = sceneData.lastMouseMoveTime;
      backgroundMaterial.uniforms.iIsMouseMoving.value = sceneData.isMouseMoving ? 1.0 : 0.0;
      
      const backgroundPlane = sceneData.backgroundPlane;
      if (backgroundPlane) {
        sceneData.raycaster.setFromCamera(sceneData.mouse, sceneData.camera);
        const intersects = sceneData.raycaster.intersectObject(backgroundPlane);
        
        if (intersects.length > 0) {
          const uv = intersects[0].uv!;
          const now = elapsedTime;
          const lastPointTime = sceneData.mouseTrail.length > 0 ? sceneData.mouseTrail[0].time : 0;
          
          const timeSinceLastPoint = now - lastPointTime;
          const minDistance = 0.001;
          
          const lastPos = sceneData.mouseTrail.length > 0 
            ? new THREE.Vector2(sceneData.mouseTrail[0].x, sceneData.mouseTrail[0].y) 
            : new THREE.Vector2(-1, -1);
          
          const distanceMoved = lastPos.distanceTo(new THREE.Vector2(uv.x, uv.y));
          
          if (timeSinceLastPoint > 0.05 && distanceMoved > minDistance || 
              timeSinceLastPoint > 0.2) {
            
            sceneData.uvCoords.set(uv.x, uv.y);
            
            sceneData.mouseTrail.unshift({
              x: uv.x,
              y: uv.y,
              time: now
            });
            
            if (sceneData.mouseTrail.length > TRAIL_LENGTH) {
              sceneData.mouseTrail.pop();
            }
          }
        }
        
        backgroundMaterial.uniforms.iMouse.value.copy(sceneData.uvCoords);
        
        const trailArray = [];
        for (let i = 0; i < TRAIL_LENGTH; i++) {
          if (i < sceneData.mouseTrail.length) {
            const entry = sceneData.mouseTrail[i];
            trailArray.push(new THREE.Vector3(entry.x, entry.y, entry.time));
          } else {
            trailArray.push(new THREE.Vector3(0, 0, -1));
          }
        }
        
        backgroundMaterial.uniforms.iMouseTrail.value = trailArray;
      }
    }
    
    // Update particle position
    const pointsMesh = sceneData.pointsMesh;
    if (pointsMesh && sceneData.frameCount % 2 === 0) {
      const maxOffset = 1;
      
      let offsetX = -sceneData.mouse.x * moveFactor;
      let offsetY = sceneData.mouse.y * moveFactor;
      
      offsetX = Math.max(Math.min(offsetX, maxOffset), -maxOffset);
      offsetY = Math.max(Math.min(offsetY, maxOffset), -maxOffset);
      
      pointsMesh.position.x = initialPosition.x - offsetX;
      pointsMesh.position.y = initialPosition.y - offsetY;
    }

    sceneData.renderer.render(sceneData.scene, sceneData.camera);
    animationFrameRef.current = requestAnimationFrame(tick);
  }, [checkIntersections]);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const canvas = canvasRef.current;
    const container = containerRef.current;
    const sceneData = sceneDataRef.current;

    // Initialize sizes
    sceneData.sizes = {
      width: container.clientWidth,
      height: container.clientHeight,
      pixelRatio: Math.min(window.devicePixelRatio, 2)
    };

    // Scene setup
    const scene = new THREE.Scene();
    sceneData.scene = scene;

    // Camera
    const camera = new THREE.PerspectiveCamera(35, sceneData.sizes.width / sceneData.sizes.height, 0.1, 100);
    camera.position.set(0, 0, 16);
    scene.add(camera);
    sceneData.camera = camera;

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(sceneData.sizes.width, sceneData.sizes.height);
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    sceneData.renderer = renderer;

    // Clock
    const clock = new THREE.Clock();
    sceneData.clock = clock;

    // GUI setup
    if (showGUI) {
      const gui = new GUI({ width: 340 });
      sceneData.gui = gui;
    }

    // Load model
    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('./draco/');
    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load(
      '/models/models02.glb', 
      (gltf) => {
        console.log('GLTF loaded successfully', gltf);
        
        const particles: Particles = {
          index: 1,
          positions: [],
          maxCount: 0,
          currentTween: null,
          geometry: new THREE.BufferGeometry(),
          material: new THREE.ShaderMaterial({}),
          points: new THREE.Points()
        };

        // Extract positions from all children that are meshes
        const meshes = gltf.scene.children.filter((child): child is THREE.Mesh => 
          child instanceof THREE.Mesh && child.geometry !== undefined
        );
        
        if (meshes.length === 0) {
          console.error('No meshes found in GLTF model');
          return;
        }

        const positions = meshes.map(mesh => mesh.geometry.attributes.position);
        console.log('Found positions:', positions.length);

        particles.maxCount = Math.max(...positions.map(pos => pos.count));
        console.log('Max count:', particles.maxCount);

        particles.positions = positions.map(position => {
          const originalArray = position.array;
          const newArray = new Float32Array(particles.maxCount * 3);
          const originalCount = position.count;

          for (let i = 0; i < particles.maxCount; i++) {
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

        particles.geometry = new THREE.BufferGeometry();
        particles.geometry.setAttribute('position', particles.positions[particles.index]);
        particles.geometry.setAttribute('aPositionTarget', particles.positions[3] || particles.positions[0]);

        particles.material = new THREE.ShaderMaterial({
          vertexShader: particlesVertexShader,
          fragmentShader: particlesFragmentShader,
          uniforms: {
            uSize: new THREE.Uniform(0.1),
            uResolution: new THREE.Uniform(
              new THREE.Vector2(
                sceneData.sizes.width * sceneData.sizes.pixelRatio, 
                sceneData.sizes.height * sceneData.sizes.pixelRatio
              )
            ),
            uHoverPosition: { value: new THREE.Vector3(100, 100, 100) },
            uProgress: new THREE.Uniform(0),
          },
          depthWrite: true
        });

        particles.points = new THREE.Points(particles.geometry, particles.material);
        scene.add(particles.points);
        
        sceneData.particles = particles;
        sceneData.pointsMesh = particles.points;
        sceneData.isLoaded = true;

        setupGUI();
        console.log('Particles setup complete');
      },
      (progress) => {
        console.log('Loading progress:', progress);
      },
      (error) => {
        console.error('Error loading GLTF model:', error);
      }
    );

    // Load texture for background
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/textures/pattern.jpg', 
      (loadedTexture) => {
        console.log('Texture loaded successfully');
        
        const originalWidth = loadedTexture.image.width;
        const originalHeight = loadedTexture.image.height;
        
        loadedTexture.generateMipmaps = true;
        loadedTexture.minFilter = THREE.LinearMipmapLinearFilter;
        loadedTexture.magFilter = THREE.LinearFilter;
        loadedTexture.wrapS = THREE.RepeatWrapping;
        loadedTexture.wrapT = THREE.RepeatWrapping;
        
        const geometry = new THREE.PlaneGeometry(
          sceneData.sizes.width / 100,
          sceneData.sizes.height / 100
        );

        const backgroundMaterial = new THREE.ShaderMaterial({
          transparent: true,
          uniforms: {
            iTime: { value: 0 },
            iTexture: { value: loadedTexture },
            iResolution: { 
              value: new THREE.Vector2(sceneData.sizes.width, sceneData.sizes.height) 
            },
            iTextureSize: {
              value: new THREE.Vector2(originalWidth, originalHeight)
            },
            iMouse: { value: new THREE.Vector2(0.5, 0.5) },
            iMouseTrail: { value: Array.from({ length: TRAIL_LENGTH }, () => new THREE.Vector3(0, 0, 0)) },
            iLastMoveTime: { value: 0 },
            iIsMouseMoving: { value: 0 }
          },
          vertexShader: backgroundVertexShader,
          fragmentShader: backgroundFragmentShader
        });

        const backgroundPlane = new THREE.Mesh(geometry, backgroundMaterial);
        backgroundPlane.position.z = 5;
        scene.add(backgroundPlane);

        sceneData.backgroundMaterial = backgroundMaterial;
        sceneData.backgroundPlane = backgroundPlane;
        
        console.log('Background setup complete');
      },
      (progress) => {
        console.log('Texture loading progress:', progress);
      },
      (error) => {
        console.error('Error loading texture:', error);
        // Create fallback background without texture
        const geometry = new THREE.PlaneGeometry(
          sceneData.sizes.width / 100,
          sceneData.sizes.height / 100
        );
        
        const fallbackMaterial = new THREE.MeshBasicMaterial({ 
          color: 0x111111, 
          transparent: true, 
          opacity: 0.5 
        });
        
        const backgroundPlane = new THREE.Mesh(geometry, fallbackMaterial);
        backgroundPlane.position.z = 5;
        scene.add(backgroundPlane);
        
        console.log('Fallback background created');
      }
    );

    // Event listeners
    let resizeTimeout: NodeJS.Timeout;
    const throttledResize = () => {
      if (resizeTimeout) clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 100);
    };

    window.addEventListener('resize', throttledResize);
    renderer.domElement.addEventListener('mousemove', onMouseMove);

    // Start animation loop
    console.log('Starting animation loop');
    tick();

    // Cleanup function
    return () => {
      console.log('Cleaning up ParticleSystem');
      
      // Stop animation loop
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }

      // Remove event listeners
      window.removeEventListener('resize', throttledResize);
      if (sceneData.renderer) {
        sceneData.renderer.domElement.removeEventListener('mousemove', onMouseMove);
      }

      // Clear timeout
      if (resizeTimeout) {
        clearTimeout(resizeTimeout);
      }

      // Dispose GUI
      if (sceneData.gui) {
        sceneData.gui.destroy();
      }

      // Dispose Three.js objects
      if (sceneData.scene) {
        sceneData.scene.traverse((object) => {
          if (object instanceof THREE.Mesh) {
            object.geometry?.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            }
            if (Array.isArray(object.material)) {
              object.material.forEach(material => material.dispose());
            }
          }
          if (object instanceof THREE.Points) {
            object.geometry?.dispose();
            if (object.material instanceof THREE.Material) {
              object.material.dispose();
            }
          }
        });
      }

      // Dispose renderer
      if (sceneData.renderer) {
        sceneData.renderer.dispose();
      }

      // Kill any running tweens
      if (sceneData.particles?.currentTween) {
        sceneData.particles.currentTween.kill();
      }

      // Clear scene data
      sceneData.scene = undefined;
      sceneData.camera = undefined;
      sceneData.renderer = undefined;
      sceneData.particles = undefined;
      sceneData.pointsMesh = undefined;
      sceneData.backgroundMaterial = undefined;
      sceneData.backgroundPlane = undefined;
      sceneData.gui = undefined;
      sceneData.clock = undefined;
    };
  }, [showGUI, setupGUI, handleResize, onMouseMove, tick]);

  return (
    <div ref={containerRef} className={`w-full h-full ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="block"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default ParticleSystem;