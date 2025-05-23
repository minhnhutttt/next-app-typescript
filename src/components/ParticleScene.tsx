'use client';

import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { DRACOLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';
import { gsap } from 'gsap';

// Define types
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
  morphTo: (index: number) => void;
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

// Configuration interface for different scenes
export interface SceneConfig {
  modelPath: string;
  texturePath: string;
  particleSize: number;
  particleColor: {
    hover: [number, number, number];
    normal: [number, number, number];
  };
  backgroundEffect?: {
    speed: number;
    intensity: number;
  };
  controls?: {
    showUI: boolean;
    morphLabels: string[];
  };
}

// Props interface
interface ParticleSceneProps {
  config: SceneConfig;
  className?: string;
  indexMorph?: number;
  enableKeyboardControls?: boolean;
  isLeft?: boolean;
}

const ParticleScene: React.FC<ParticleSceneProps> = ({ 
  config, 
  className = '',
  indexMorph = 0,
  enableKeyboardControls = true,
  isLeft = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<ParticleSystem | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const prevIndexMorphRef = useRef<number>(indexMorph);
  const isMobileRef = useRef<boolean>(false);
  const hasMouseMovedRef = useRef<boolean>(false); // ✅ ADDED: Track if mouse has moved

  // Helper function to check if mobile
  const checkIsMobile = () => {
    return window.innerWidth < 768;
  };

  // Helper function to get target position based on screen size and isLeft
  const getTargetPosition = () => {
    const isMobile = checkIsMobile();
    if (isMobile) {
      return 0; // Always center on mobile
    }
    return isLeft ? -3 : 0; // Left/Right on desktop
  };

  // Effect to handle isLeft changes and screen size changes
  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    // Get target position based on screen size and isLeft prop
    const targetX = getTargetPosition();
    
    gsap.to(particles.points.position, {
      x: targetX,
      duration: 0.8,
      ease: "power2.out"
    });
  }, [isLeft]);

  // Effect to handle indexMorph changes
  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    // Check if indexMorph has changed and is within valid range
    if (
      indexMorph !== prevIndexMorphRef.current && 
      indexMorph >= 0 && 
      indexMorph < particles.positions.length
    ) {
      console.log(`Morphing to index: ${indexMorph}`);
      particles.morphTo(indexMorph);
      prevIndexMorphRef.current = indexMorph;
    }
  }, [indexMorph]);

  useEffect(() => {
    if (!canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const sizes: Sizes = {
      width: window.innerWidth,
      height: window.innerHeight,
      pixelRatio: Math.min(window.devicePixelRatio, 2),
    };

    const camera = new THREE.PerspectiveCamera(
      35,
      sizes.width / sizes.height,
      0.1,
      100
    );
    camera.position.set(0, 0, 16);
    scene.add(camera);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setClearColor(0x000000, 1);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    rendererRef.current = renderer;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    const moveFactor = 0.1;
    const initialPosition = new THREE.Vector3(getTargetPosition(), 0, 0);

    let intersectionCheckCounter = 0;
    const INTERSECTION_CHECK_FREQUENCY = 2;

    const uvCoords = new THREE.Vector2(0.5, 0.5);
    let lastMouseMoveTime = 0;
    let isMouseMoving = false;
    const mouseTrail: MouseTrailEntry[] = [];
    const TRAIL_LENGTH = 20;

    let backgroundMaterial: THREE.ShaderMaterial | null = null;
    let backgroundPlane: THREE.Mesh | null = null;
    let pointsMesh: THREE.Points | null = null;
    let isLoaded = false;

    const createVertexShader = (particleSize: number) => `
      uniform vec2 uResolution;
      uniform float uSize;
      uniform vec3 uHoverPosition;
      uniform float uProgress;

      attribute vec3 aPositionTarget;

      varying float vDistance;

      vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
      vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

      float simplexNoise3d(vec3 v) {
        const vec2 C = vec2(1.0/6.0, 1.0/3.0);
        const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);

        vec3 i = floor(v + dot(v, C.yyy));
        vec3 x0 = v - i + dot(i, C.xxx);

        vec3 g = step(x0.yzx, x0.xyz);
        vec3 l = 1.0 - g;
        vec3 i1 = min(g.xyz, l.zxy);
        vec3 i2 = max(g.xyz, l.zxy);

        vec3 x1 = x0 - i1 + 1.0 * C.xxx;
        vec3 x2 = x0 - i2 + 2.0 * C.xxx;
        vec3 x3 = x0 - 1. + 3.0 * C.xxx;

        i = mod(i, 289.0);
        vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));

        float n_ = 1.0/7.0;
        vec3 ns = n_ * D.wyz - D.xzx;

        vec4 j = p - 49.0 * floor(p * ns.z * ns.z);

        vec4 x_ = floor(j * ns.z);
        vec4 y_ = floor(j - 7.0 * x_);

        vec4 x = x_ * ns.x + ns.yyyy;
        vec4 y = y_ * ns.x + ns.yyyy;
        vec4 h = 1.0 - abs(x) - abs(y);

        vec4 b0 = vec4(x.xy, y.xy);
        vec4 b1 = vec4(x.zw, y.zw);

        vec4 s0 = floor(b0) * 2.0 + 1.0;
        vec4 s1 = floor(b1) * 2.0 + 1.0;
        vec4 sh = -step(h, vec4(0.0));

        vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
        vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;

        vec3 p0 = vec3(a0.xy, h.x);
        vec3 p1 = vec3(a0.zw, h.y);
        vec3 p2 = vec3(a1.xy, h.z);
        vec3 p3 = vec3(a1.zw, h.w);

        vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
        p0 *= norm.x;
        p1 *= norm.y;
        p2 *= norm.z;
        p3 *= norm.w;

        vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
        m = m * m;
        return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
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

        // ✅ IMPROVED: Create organic hover effect with noise
        float distanceToHover = distance(modelPosition.xyz, uHoverPosition);
        
        // Add organic variation to the hover distance using noise
        float hoverNoise = simplexNoise3d(modelPosition.xyz * 2.0) * 0.15; // ✅ Reduced from 0.3 to 0.15
        float organicDistance = distanceToHover + hoverNoise;
        
        float pushStrength = 0.0;
        
        // Only apply push effect if hover position is reasonable (not the default far position)
        if (length(uHoverPosition) < 50.0) {
          // Use organic distance for more natural falloff - ✅ Reduced range from 2.0 to 1.2
          pushStrength = smoothstep(1.2, 0.0, organicDistance);
          
          // Add some variation to push strength based on position
          float pushNoise = simplexNoise3d(modelPosition.xyz * 1.5) * 0.4 + 0.6;
          pushStrength *= pushNoise;
        }
        
        vec3 normal = normalize(modelPosition.xyz - uHoverPosition);
        modelPosition.xyz += normal * pushStrength * 0.05;

        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        gl_PointSize = uSize * uResolution.y;
        gl_PointSize *= (1.0 / -viewPosition.z);

        // Pass both original and organic distance for color mixing
        vDistance = organicDistance;
      }
    `;

    const createFragmentShader = (hoverColor: [number, number, number], normalColor: [number, number, number]) => `
      varying float vDistance;
      
      void main() {
        vec2 uv = gl_PointCoord;
        float distanceToCenter = length(uv - vec2(0.5));

        if(distanceToCenter > 0.5)
          discard;
          
        // ✅ IMPROVED: More organic color transition with multiple falloff zones (SMALLER ZONES)
        float intensity = 1.0;
        
        // Create multiple zones with different falloff rates for organic feel
        if (vDistance < 0.4) { // ✅ Reduced from 0.8 to 0.4
          // Inner core - strong hover color
          intensity = 0.0;
        } else if (vDistance < 0.8) { // ✅ Reduced from 1.5 to 0.8
          // Transition zone 1 - smooth blend
          float t = (vDistance - 0.4) / (0.8 - 0.4);
          intensity = smoothstep(0.0, 1.0, t) * 0.3;
        } else if (vDistance < 1.3) { // ✅ Reduced from 2.5 to 1.3
          // Transition zone 2 - gradual fade
          float t = (vDistance - 0.8) / (1.3 - 0.8);
          intensity = 0.3 + smoothstep(0.0, 1.0, t) * 0.4;
        } else if (vDistance < 2.0) { // ✅ Reduced from 4.0 to 2.0
          // Outer zone - subtle influence
          float t = (vDistance - 1.3) / (2.0 - 1.3);
          intensity = 0.7 + smoothstep(0.0, 1.0, t) * 0.3;
        } else {
          // No influence - normal color
          intensity = 1.0;
        }
        
        vec4 color = mix(
          vec4(${hoverColor[0]}, ${hoverColor[1]}, ${hoverColor[2]}, 1.0), 
          vec4(${normalColor[0]}, ${normalColor[1]}, ${normalColor[2]}, 1.0), 
          intensity
        );
        gl_FragColor = vec4(color);

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }
    `;

    const createBackgroundFragmentShader = (speed: number, intensity: number) => `
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
               (c - a) * u.y * (1.0 - u.x) + 
               (d - b) * u.x * u.y;
      }
      
      void main() {
        vec2 tiledUv = vUv * iResolution / iTextureSize;
        vec2 movedUv = tiledUv + vec2(
          sin(iTime * ${speed}) * 0.5, 
          cos(iTime * ${speed}) * 0.5
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
          alpha = random(distortedUv + vec2(iTime * 0.1)) * ${intensity} * alphaFactor;
          
          float discretePixelPos = floor(vUv.y / pixelHeight) * pixelHeight;
          
          if (random(vec2(discretePixelPos, float(columnIndex))) > 0.3) {
            alpha *= 1.0;
          } else {
            alpha *= 0.3;
          }
        }
        
        vec4 finalColor = vec4(textureColor.rgb, alpha);
        vec3 cursorColor = vec3(${config.particleColor.hover[0]}, ${config.particleColor.hover[1]}, ${config.particleColor.hover[2]});
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

    // Morph function moved inside useEffect for access to particles
    const morphTo = (index: number) => {
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
    };

    const checkIntersections = () => {
      const particles = particlesRef.current;
      if (!particles) return;

      // ✅ FIXED: Don't run intersection checks until mouse has moved
      if (!hasMouseMovedRef.current) {
        particles.material.uniforms.uHoverPosition.value.set(1000, 1000, 1000);
        return;
      }

      intersectionCheckCounter++;
      if (intersectionCheckCounter % INTERSECTION_CHECK_FREQUENCY !== 0) return;

      raycaster.setFromCamera(mouse, camera);

      if (particles.material.uniforms.uProgress.value > 0.01) {
        // Tạo geometry tạm thời cho morphing animation
        const tempGeometry = new THREE.BufferGeometry();
        const positions = particles.geometry.attributes.position;
        const targetPositions = particles.geometry.attributes.aPositionTarget;
        const progress = particles.material.uniforms.uProgress.value;

        const interpolatedPositions = new Float32Array(positions.count * 3);
        for (let i = 0; i < positions.count; i++) {
          const i3 = i * 3;
          interpolatedPositions[i3] =
            positions.array[i3] * (1 - progress) +
            targetPositions.array[i3] * progress;
          interpolatedPositions[i3 + 1] =
            positions.array[i3 + 1] * (1 - progress) +
            targetPositions.array[i3 + 1] * progress;
          interpolatedPositions[i3 + 2] =
            positions.array[i3 + 2] * (1 - progress) +
            targetPositions.array[i3 + 2] * progress;
        }

        tempGeometry.setAttribute(
          'position',
          new THREE.Float32BufferAttribute(interpolatedPositions, 3)
        );

        const tempPoints = new THREE.Points(
          tempGeometry,
          new THREE.PointsMaterial({ size: 0.1, visible: false })
        );
        
        tempPoints.position.copy(particles.points.position);
        tempPoints.rotation.copy(particles.points.rotation);
        tempPoints.scale.copy(particles.points.scale);
        tempPoints.updateMatrixWorld();

        const intersects = raycaster.intersectObject(tempPoints);

        if (intersects.length > 0) {
          const point = intersects[0].point;
          particles.material.uniforms.uHoverPosition.value.copy(point);
        } else {
          particles.material.uniforms.uHoverPosition.value.set(1000, 1000, 1000);
        }

        tempGeometry.dispose();
      } else {
        particles.points.updateMatrixWorld();
        
        const intersects = raycaster.intersectObject(particles.points);
        if (intersects.length > 0) {
          const point = intersects[0].point;
          particles.material.uniforms.uHoverPosition.value.copy(point);
        } else {
          particles.material.uniforms.uHoverPosition.value.set(1000, 1000, 1000);
        }
      }
    };

    const gltfLoader = new GLTFLoader();
    const dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderPath('/draco/');
    gltfLoader.setDRACOLoader(dracoLoader);

    gltfLoader.load(config.modelPath, (gltf) => {
      const particles: ParticleSystem = {
        index: 0,
        positions: [],
        maxCount: 0,
        currentTween: null,
        geometry: new THREE.BufferGeometry(),
        material: new THREE.ShaderMaterial({}),
        points: new THREE.Points(),
        morph0: () => morphTo(0),
        morph1: () => morphTo(1),
        morph2: () => morphTo(2),
        morphTo: morphTo,
      };

      // Extract positions from scene children
      const originalPositions = gltf.scene.children
        .filter(child => child instanceof THREE.Mesh)
        .map(child => {
          const mesh = child as THREE.Mesh;
          const position = mesh.geometry.attributes.position;
          if (position instanceof THREE.Float32BufferAttribute) {
            return position;
          } else if (position instanceof THREE.BufferAttribute) {
            return new THREE.Float32BufferAttribute(position.array as Float32Array, position.itemSize);
          } else {
            console.warn('Unsupported position attribute type');
            return null;
          }
        })
        .filter(position => position !== null) as THREE.Float32BufferAttribute[];

      if (originalPositions.length === 0) {
        console.warn('No mesh positions found in model');
        return;
      }

      const positions: THREE.Float32BufferAttribute[] = originalPositions;
      particles.maxCount = Math.max(...positions.map((pos) => pos.count));

      if (originalPositions.length === 1) {
        console.log('Single shape detected - morphing disabled');
      } else {
        console.log(`Multiple shapes detected (${originalPositions.length}) - morphing enabled`);
      }

      // Normalize all positions to maxCount
      particles.positions = positions.map((position) => {
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

      // Set initial morph based on indexMorph prop (clamp to available positions)
      const initialIndex = Math.min(indexMorph, particles.positions.length - 1);
      particles.index = initialIndex;

      particles.geometry.setAttribute('position', particles.positions[particles.index]);
      particles.geometry.setAttribute(
        'aPositionTarget',
        particles.positions[particles.index]
      );

      particles.material = new THREE.ShaderMaterial({
        vertexShader: createVertexShader(config.particleSize),
        fragmentShader: createFragmentShader(config.particleColor.hover, config.particleColor.normal),
        uniforms: {
          uSize: new THREE.Uniform(config.particleSize),
          uResolution: new THREE.Uniform(
            new THREE.Vector2(
              sizes.width * sizes.pixelRatio,
              sizes.height * sizes.pixelRatio
            )
          ),
          // ✅ FIXED: Set hover position far away initially
          uHoverPosition: { value: new THREE.Vector3(1000, 1000, 1000) },
          uProgress: new THREE.Uniform(1),
        },
        depthWrite: true,
      });

      particles.points = new THREE.Points(particles.geometry, particles.material);

      particles.points.position.copy(initialPosition);
      particles.points.scale.setScalar(0);
      
      // Khởi tạo userData để tracking offset
      particles.points.userData.lastOffsetX = 0;
      particles.points.userData.lastOffsetY = 0;
      
      scene.add(particles.points);
      pointsMesh = particles.points;

      particlesRef.current = particles;
      isLoaded = true;

      prevIndexMorphRef.current = initialIndex;

      // Entrance animation - scale from 0 to 1
      gsap.to(particles.points.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.2
      });

      console.log(`Particle system initialized with ${particles.positions.length} shapes, starting at index ${initialIndex}`);
    });

    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(config.texturePath, (loadedTexture) => {
      const originalWidth = loadedTexture.image.width;
      const originalHeight = loadedTexture.image.height;

      loadedTexture.generateMipmaps = true;
      loadedTexture.minFilter = THREE.LinearMipmapLinearFilter;
      loadedTexture.magFilter = THREE.LinearFilter;
      loadedTexture.wrapS = THREE.RepeatWrapping;
      loadedTexture.wrapT = THREE.RepeatWrapping;

      const geometry = new THREE.PlaneGeometry(
        window.innerWidth / 75,
        window.innerHeight / 75
      );

      backgroundMaterial = new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
          iTime: { value: 0 },
          iTexture: { value: loadedTexture },
          iResolution: {
            value: new THREE.Vector2(window.innerWidth, window.innerHeight),
          },
          iTextureSize: {
            value: new THREE.Vector2(originalWidth, originalHeight),
          },
          iMouse: { value: new THREE.Vector2(0.5, 0.5) },
          iMouseTrail: {
            value: new Array(TRAIL_LENGTH)
              .fill(null)
              .map(() => new THREE.Vector3(0, 0, 0)),
          },
          iLastMoveTime: { value: 0 },
          iIsMouseMoving: { value: 0 },
        },
        vertexShader: `
          varying vec2 vUv;
          void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `,
        fragmentShader: createBackgroundFragmentShader(
          config.backgroundEffect?.speed || 0.2,
          config.backgroundEffect?.intensity || 0.6
        ),
      });

      backgroundPlane = new THREE.Mesh(geometry, backgroundMaterial);
      backgroundPlane.position.z = -1;
      scene.add(backgroundPlane);
    });

    const onMouseMove = (event: MouseEvent) => {
      // ✅ FIXED: Mark that mouse has moved
      hasMouseMovedRef.current = true;
      
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      mouse.x = mouseX;
      mouse.y = mouseY;

      lastMouseMoveTime = performance.now() * 0.001;
      isMouseMoving = true;
    };

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

      // Check if mobile status changed and update position accordingly
      const wasMobile = isMobileRef.current;
      const isMobile = checkIsMobile();
      isMobileRef.current = isMobile;

      // If mobile status changed, animate to new position
      if (wasMobile !== isMobile) {
        const particles = particlesRef.current;
        if (particles) {
          const targetX = getTargetPosition();
          gsap.to(particles.points.position, {
            x: targetX,
            duration: 0.8,
            ease: "power2.out"
          });
        }
      }

      const particles = particlesRef.current;
      if (particles?.material?.uniforms?.uResolution) {
        particles.material.uniforms.uResolution.value.set(
          sizes.width * sizes.pixelRatio,
          sizes.height * sizes.pixelRatio
        );
      }

      camera.aspect = sizes.width / sizes.height;
      camera.updateProjectionMatrix();

      renderer.setSize(sizes.width, sizes.height);
      renderer.setPixelRatio(sizes.pixelRatio);

      if (backgroundMaterial?.uniforms?.iResolution) {
        backgroundMaterial.uniforms.iResolution.value.set(
          sizes.width,
          sizes.height
        );
      }

      if (backgroundPlane) {
        backgroundPlane.geometry.dispose();
        backgroundPlane.geometry = new THREE.PlaneGeometry(
          sizes.width / 75,
          sizes.height / 75
        );
      }
    };

    const clock = new THREE.Clock();
    let frameCount = 0;

    const tick = () => {
      const elapsedTime = clock.getElapsedTime();
      frameCount++;

      checkIntersections();

      if (backgroundMaterial) {
        backgroundMaterial.uniforms.iTime.value = elapsedTime;

        if (isMouseMoving && elapsedTime - lastMouseMoveTime > 0.05) {
          isMouseMoving = false;
        }

        backgroundMaterial.uniforms.iLastMoveTime.value = lastMouseMoveTime;
        backgroundMaterial.uniforms.iIsMouseMoving.value = isMouseMoving ? 1.0 : 0.0;

        if (backgroundPlane) {
          raycaster.setFromCamera(mouse, camera);
          const intersects = raycaster.intersectObject(backgroundPlane);

          if (intersects.length > 0) {
            const uv = intersects[0].uv;
            const now = elapsedTime;
            const lastPointTime = mouseTrail.length > 0 ? mouseTrail[0].time : 0;
            const timeSinceLastPoint = now - lastPointTime;
            const minDistance = 0.001;

            const lastPos =
              mouseTrail.length > 0
                ? new THREE.Vector2(mouseTrail[0].x, mouseTrail[0].y)
                : new THREE.Vector2(-1, -1);

            const distanceMoved = lastPos.distanceTo(new THREE.Vector2(uv!.x, uv!.y));

            if (
              (timeSinceLastPoint > 0.05 && distanceMoved > minDistance) ||
              timeSinceLastPoint > 0.2
            ) {
              uvCoords.set(uv!.x, uv!.y);

              mouseTrail.unshift({
                x: uv!.x,
                y: uv!.y,
                time: now,
              });

              if (mouseTrail.length > TRAIL_LENGTH) {
                mouseTrail.pop();
              }
            }
          }

          backgroundMaterial.uniforms.iMouse.value.copy(uvCoords);

          const trailArray = [];
          for (let i = 0; i < TRAIL_LENGTH; i++) {
            if (i < mouseTrail.length) {
              const entry = mouseTrail[i];
              trailArray.push(new THREE.Vector3(entry.x, entry.y, entry.time));
            } else {
              trailArray.push(new THREE.Vector3(0, 0, -1));
            }
          }

          backgroundMaterial.uniforms.iMouseTrail.value = trailArray;
        }
      }

      // Calculate mouse movement but keep current base position
      if (pointsMesh && frameCount % 2 === 0) {
        const maxOffset = 1;
        let offsetX = -mouse.x * moveFactor;
        let offsetY = mouse.y * moveFactor;

        offsetX = Math.max(Math.min(offsetX, maxOffset), -maxOffset);
        offsetY = Math.max(Math.min(offsetY, maxOffset), -maxOffset);

        // Use current position as base instead of fixed initialPosition
        const currentBaseX = pointsMesh.position.x - (pointsMesh.userData.lastOffsetX || 0);
        const currentBaseY = pointsMesh.position.y - (pointsMesh.userData.lastOffsetY || 0);

        pointsMesh.position.x = currentBaseX + offsetX;
        pointsMesh.position.y = currentBaseY + offsetY;

        // Save current offset for base position calculation
        pointsMesh.userData.lastOffsetX = offsetX;
        pointsMesh.userData.lastOffsetY = offsetY;
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', handleResize);
    renderer.domElement.addEventListener('mousemove', onMouseMove);

    tick();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry?.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [config]);

  // Keyboard controls - now conditional based on enableKeyboardControls prop
  useEffect(() => {
    if (!enableKeyboardControls) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      const particles = particlesRef.current;
      if (!particles) return;

      // Only allow keyboard controls if there are multiple shapes
      if (particles.positions.length <= 1) {
        console.log('Morphing not available - only one shape loaded');
        return;
      }

      switch (event.key) {
        case '1':
          particles.morph0();
          break;
        case '2':
          particles.morph1();
          break;
        case '3':
          particles.morph2();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [enableKeyboardControls]);

  return (
    <div className={`w-full h-screen overflow-hidden fixed inset-0 ${className}`}>
      <canvas 
        ref={canvasRef} 
        className="block w-full h-full"
        style={{ background: 'transparent' }}
      />
    </div>
  );
};

export default ParticleScene;