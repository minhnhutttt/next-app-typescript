'use client';

import { useEffect, useRef } from 'react';
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

// 新しく追加: Mouse tracking と animation の設定
interface MouseTrackingConfig {
  enabled: boolean;
  intensity: {
    x: number; // 左右の傾き強度 (0-1)
    y: number; // 上下の傾き強度 (0-1)
  };
  smoothness: number; // 動きの滑らかさ (0-1, 小さいほど滑らか)
}

interface AutoRotationConfig {
  enabled: boolean;
  speed: {
    x: number;
    y: number;
    z: number;
  };
}

interface FloatingConfig {
  enabled: boolean;
  amplitude: number; // 浮遊の振幅
  speed: number; // 浮遊の速度
}

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
  rippleEffect?: {
    speed: number;
    frequency: number;
    width: number;
    intensity: number;
  };
  // 新しく追加: アニメーション設定
  mouseTracking?: MouseTrackingConfig;
  autoRotation?: AutoRotationConfig;
  floating?: FloatingConfig;
}

interface ParticleSceneProps {
  config: SceneConfig;
  className?: string;
  indexMorph?: number;
  isLeft?: boolean;
}

const ParticleScene: React.FC<ParticleSceneProps> = ({ 
  config, 
  className = '',
  indexMorph = 0,
  isLeft = false
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const particlesRef = useRef<ParticleSystem | null>(null);
  const animationIdRef = useRef<number | null>(null);
  const prevIndexMorphRef = useRef<number>(indexMorph);
  const isMobileRef = useRef<boolean>(false);
  const hasMouseMovedRef = useRef<boolean>(false);

  // 新しく追加: Mouse tracking と animation の状態
  const mouseTrackingRef = useRef({ x: 0, y: 0 });
  const targetRotationRef = useRef({ x: 0, y: 0, z: 0 });
  const currentRotationRef = useRef({ x: 0, y: 0, z: 0 });
  const originalRotationRef = useRef({ x: 0, y: 0, z: 0 });
  const isMouseOverCanvasRef = useRef(false);
  const isDraggingRef = useRef(false);
  const clockRef = useRef(new THREE.Clock());
  const originalPositionRef = useRef({ x: 0, y: 0, z: 0 });

  // デフォルト設定
  const defaultAnimationConfig = {
    mouseTracking: {
      enabled: true,
      intensity: { x: 0.2, y: 0.15 }, // 微妙な傾き
      smoothness: 0.05, // ゆっくりとした反応
    },
    autoRotation: {
      enabled: true,
      speed: { x: 0, y: 0.2, z: 0 },
    },
    floating: {
      enabled: true,
      amplitude: 0.1,
      speed: 0.8,
    },
  };

  // 設定をマージ
  const animationConfig = {
    mouseTracking: { ...defaultAnimationConfig.mouseTracking, ...config.mouseTracking },
    autoRotation: { ...defaultAnimationConfig.autoRotation, ...config.autoRotation },
    floating: { ...defaultAnimationConfig.floating, ...config.floating },
  };

  const checkIsMobile = () => {
    return window.innerWidth < 768;
  };

  const getTargetPosition = () => {
    const isMobile = checkIsMobile();
    if (isMobile) {
      return 0;
    }
    return isLeft ? -3 : 0;
  };

  // 新しく追加: スムーズな補間関数
  const lerp = (start: number, end: number, factor: number) => {
    return start + (end - start) * factor;
  };

  // 新しく追加: マウス位置を正規化 (-1 to 1)
  const normalizeMousePosition = (clientX: number, clientY: number) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
    
    const rect = canvasRef.current.getBoundingClientRect();
    const x = ((clientX - rect.left) / rect.width) * 2 - 1;
    const y = -((clientY - rect.top) / rect.height) * 2 + 1;
    
    return { x, y };
  };

  // 新しく追加: マウストラッキングの更新
  const updateMouseTracking = () => {
    const particles = particlesRef.current;
    if (!particles || !animationConfig.mouseTracking.enabled || isDraggingRef.current) return;

    const elapsedTime = clockRef.current.getElapsedTime();

    // 自動回転の計算
    let autoRotationX = originalRotationRef.current.x;
    let autoRotationY = originalRotationRef.current.y;
    let autoRotationZ = originalRotationRef.current.z;
    
    if (animationConfig.autoRotation.enabled) {
      autoRotationX += elapsedTime * animationConfig.autoRotation.speed.x;
      autoRotationY += elapsedTime * animationConfig.autoRotation.speed.y;
      autoRotationZ += elapsedTime * animationConfig.autoRotation.speed.z;
    }

    // マウス追跡の計算
    const mouseInfluenceX = mouseTrackingRef.current.x * animationConfig.mouseTracking.intensity.x;
    const mouseInfluenceY = mouseTrackingRef.current.y * animationConfig.mouseTracking.intensity.y;
    
    // 目標回転を設定
    targetRotationRef.current.x = autoRotationX + mouseInfluenceY;
    targetRotationRef.current.y = autoRotationY + mouseInfluenceX;
    targetRotationRef.current.z = autoRotationZ;
    
    // スムーズな補間
    currentRotationRef.current.x = lerp(
      currentRotationRef.current.x, 
      targetRotationRef.current.x, 
      animationConfig.mouseTracking.smoothness
    );
    currentRotationRef.current.y = lerp(
      currentRotationRef.current.y, 
      targetRotationRef.current.y, 
      animationConfig.mouseTracking.smoothness
    );
    currentRotationRef.current.z = lerp(
      currentRotationRef.current.z, 
      targetRotationRef.current.z, 
      animationConfig.mouseTracking.smoothness
    );

    // 浮遊アニメーションの計算
    let floatingY = originalPositionRef.current.y;
    if (animationConfig.floating.enabled) {
      floatingY += Math.sin(elapsedTime * animationConfig.floating.speed) * animationConfig.floating.amplitude;
    }

    // パーティクルシステムに回転を適用
    particles.points.rotation.x = currentRotationRef.current.x;
    particles.points.rotation.y = currentRotationRef.current.y;
    particles.points.rotation.z = currentRotationRef.current.z;
    particles.points.position.y = floatingY;
  };

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    const targetX = getTargetPosition();
    
    gsap.to(particles.points.position, {
      x: targetX,
      duration: 0.8,
      ease: "power2.out"
    });
  }, [isLeft]);

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    if (
      indexMorph !== prevIndexMorphRef.current && 
      indexMorph >= 0 && 
      indexMorph < particles.positions.length
    ) {
      particles.morphTo(indexMorph);
      prevIndexMorphRef.current = indexMorph;
    }
  }, [indexMorph]);

  useEffect(() => {
    if (!canvasRef.current) return;

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
    const moveFactor = 0.3;
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

    // Ripple effect config với default values
    const rippleConfig = {
      speed: config.rippleEffect?.speed || 0.0,
      frequency: config.rippleEffect?.frequency || 0.0,
      width: config.rippleEffect?.width || 0.0,
      intensity: config.rippleEffect?.intensity || 0.0,
    };

    const createVertexShader = (particleSize: number) => `
  uniform vec2 uResolution;
  uniform float uSize;
  uniform vec3 uHoverPosition;
  uniform float uProgress;
  
  // Ripple effect uniforms
  uniform float uTime;
  uniform float uRippleSpeed;
  uniform float uRippleFrequency;
  uniform float uRippleWidth;

  attribute vec3 aPositionTarget;

  varying float vDistance;
  varying float vRippleEffect; // Truyền ripple effect xuống fragment shader

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

    // Tính toán ripple effect
    float distanceFromCenter = length(mixedPosition.xy);
    
    // Tạo nhiều sóng với frequency khác nhau
    float ripple1 = sin((distanceFromCenter - uTime * uRippleSpeed) * uRippleFrequency) * 0.5 + 0.5;
    float ripple2 = sin((distanceFromCenter - uTime * uRippleSpeed * 0.7) * uRippleFrequency * 1.3) * 0.5 + 0.5;
    float ripple3 = sin((distanceFromCenter - uTime * uRippleSpeed * 1.2) * uRippleFrequency * 0.8) * 0.5 + 0.5;
    
    // Kết hợp các sóng
    float combinedRipple = (ripple1 + ripple2 * 0.6 + ripple3 * 0.4) / 2.0;
    
    // Tạo độ rộng sóng
    float rippleWidth = uRippleWidth;
    float rippleFade = 1.0 - smoothstep(0.0, rippleWidth, abs(sin((distanceFromCenter - uTime * uRippleSpeed) * uRippleFrequency)));
    
    // Áp dụng fade-out theo khoảng cách
    float maxDistance = 8.0;
    float distanceFade = 1.0 - smoothstep(0.0, maxDistance, distanceFromCenter);
    
    vRippleEffect = combinedRipple * rippleFade * distanceFade;

    // Hover effect (giữ nguyên)
    float bulgeStrength = 0.0;
    
    if (length(uHoverPosition) < 50.0) {
      vec2 hoverPos2D = uHoverPosition.xy;
      vec2 particlePos2D = modelPosition.xy;
      float distance2D = distance(particlePos2D, hoverPos2D);
      
      float bulgeNoise = simplexNoise3d(modelPosition.xyz * 2.0) * 0.1;
      float organicDistance = distance2D + bulgeNoise;
      
      float maxBulgeDistance = 2.0;
      
      bulgeStrength = smoothstep(maxBulgeDistance, 0.0, organicDistance);
      
      bulgeStrength = pow(bulgeStrength, 0.8);
      
      float strengthNoise = simplexNoise3d(modelPosition.xyz * 1.5) * 0.15 + 0.85;
      bulgeStrength *= strengthNoise;
      
      bulgeStrength = pow(bulgeStrength, 1.2);
    }
    
    float bulgeAmount = 1.2;
    modelPosition.z += bulgeStrength * bulgeAmount;

    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;
    gl_Position = projectedPosition;

    gl_PointSize = uSize * uResolution.y;
    gl_PointSize *= (1.0 / -viewPosition.z);

    vec2 hoverPos2D = uHoverPosition.xy;
    vec2 particlePos2D = (modelMatrix * vec4(mixedPosition, 1.0)).xy;
    float distance2D = distance(particlePos2D, hoverPos2D);
    float bulgeNoise = simplexNoise3d((modelMatrix * vec4(mixedPosition, 1.0)).xyz * 2.0) * 0.1;
    vDistance = distance2D + bulgeNoise;
  }
`;

    const createFragmentShader = (hoverColor: [number, number, number], normalColor: [number, number, number]) => `
      uniform float uRippleIntensity;
      
      varying float vDistance;
      varying float vRippleEffect;
      
      void main() {
        vec2 uv = gl_PointCoord;
        float distanceToCenter = length(uv - vec2(0.5));

        if(distanceToCenter > 0.5)
          discard;
          
        float intensity = 1.0;
        
        if (vDistance < 0.4) {
          intensity = 0.0;
        } else if (vDistance < 0.8) {
          float t = (vDistance - 0.4) / (0.8 - 0.4);
          intensity = smoothstep(0.0, 1.0, t) * 0.3;
        } else if (vDistance < 1.3) { 
          float t = (vDistance - 1.3) / (1.3 - 0.8);
          intensity = 0.3 + smoothstep(0.0, 1.0, t) * 0.4;
        } else if (vDistance < 2.0) { 
          float t = (vDistance - 1.3) / (2.0 - 1.3);
          intensity = 0.7 + smoothstep(0.0, 1.0, t) * 0.3;
        } else {
          intensity = 1.0;
        }
        
        vec4 baseColor = mix(
          vec4(${hoverColor[0]}, ${hoverColor[1]}, ${hoverColor[2]}, 1.0), 
          vec4(${normalColor[0]}, ${normalColor[1]}, ${normalColor[2]}, 1.0), 
          intensity
        );
        
        // Áp dụng ripple effect - trộn với màu trắng
        vec3 whiteColor = vec3(1.0, 1.0, 1.0);
        float rippleStrength = vRippleEffect * uRippleIntensity;
        
        vec3 finalColor = mix(baseColor.rgb, whiteColor, rippleStrength);
        
        gl_FragColor = vec4(finalColor, baseColor.a);

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
        float cursorRadius = 0.02;
        float cursorAlpha = 0.0;
        float timeSinceLastMove = iTime - iLastMoveTime;
        float fadeOutDuration = 1.5;
        float fadeFactor = 1.0;
        
        if (iIsMouseMoving < 0.5) {
          float t = timeSinceLastMove / fadeOutDuration;
  fadeFactor = smoothstep(1.0, 0.0, t);
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
          float fadeTime = 3.5;
          float timeFactor = max(0.0, 1.0 - timeAlive / fadeTime);
          float trailFactor = max(0.1, 1.0 - float(i) / 30.0);
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

      if (!hasMouseMovedRef.current) {
        particles.material.uniforms.uHoverPosition.value.set(1000, 1000, 1000);
        return;
      }

      intersectionCheckCounter++;
      if (intersectionCheckCounter % INTERSECTION_CHECK_FREQUENCY !== 0) return;

      raycaster.setFromCamera(mouse, camera);

      if (particles.material.uniforms.uProgress.value > 0.01) {
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
        morphTo: morphTo,
      };

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
            return null;
          }
        })
        .filter(position => position !== null) as THREE.Float32BufferAttribute[];

      if (originalPositions.length === 0) {
        return;
      }

      const positions: THREE.Float32BufferAttribute[] = originalPositions;
      particles.maxCount = Math.max(...positions.map((pos) => pos.count));

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
          uHoverPosition: { value: new THREE.Vector3(1000, 1000, 1000) },
          uProgress: new THREE.Uniform(1),
          // Ripple uniforms
          uTime: new THREE.Uniform(0),
          uRippleSpeed: new THREE.Uniform(rippleConfig.speed),
          uRippleFrequency: new THREE.Uniform(rippleConfig.frequency),
          uRippleWidth: new THREE.Uniform(rippleConfig.width),
          uRippleIntensity: new THREE.Uniform(rippleConfig.intensity),
        },
        depthWrite: true,
      });

      particles.points = new THREE.Points(particles.geometry, particles.material);

      particles.points.position.copy(initialPosition);
      particles.points.scale.setScalar(0);
      
      particles.points.userData.lastOffsetX = 0;
      particles.points.userData.lastOffsetY = 0;
      
      // 新しく追加: 元の位置と回転を保存
      originalPositionRef.current = {
        x: particles.points.position.x,
        y: particles.points.position.y,
        z: particles.points.position.z,
      };
      
      originalRotationRef.current = {
        x: particles.points.rotation.x,
        y: particles.points.rotation.y,
        z: particles.points.rotation.z,
      };
      
      currentRotationRef.current = { ...originalRotationRef.current };
      targetRotationRef.current = { ...originalRotationRef.current };
      
      scene.add(particles.points);
      pointsMesh = particles.points;

      particlesRef.current = particles;
      isLoaded = true;

      prevIndexMorphRef.current = initialIndex;

      particles.points.lookAt(camera.position)

      gsap.to(particles.points.scale, {
        x: 0.8,
        y: 0.8,
        z: 0.8,
        duration: 1.2,
        ease: "back.out(1.7)",
        delay: 0.2
      });
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

    // 新しく追加: マウスイベントハンドラー
    const onMouseMove = (event: MouseEvent) => {
      hasMouseMovedRef.current = true;
      
      const rect = renderer.domElement.getBoundingClientRect();
      const mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      mouse.x = mouseX;
      mouse.y = mouseY;

      // マウストラッキング用の正規化された座標を更新
      if (animationConfig.mouseTracking.enabled && !isDraggingRef.current) {
        const normalized = normalizeMousePosition(event.clientX, event.clientY);
        mouseTrackingRef.current = normalized;
      }

      lastMouseMoveTime = performance.now() * 0.001;
      isMouseMoving = true;
    };

    const onMouseEnter = () => {
      isMouseOverCanvasRef.current = true;
    };

    const onMouseLeave = () => {
      isMouseOverCanvasRef.current = false;
      // マウスがキャンバスから離れたら元の位置に戻る
      mouseTrackingRef.current = { x: 0, y: 0 };
    };

    const onMouseDown = () => {
      isDraggingRef.current = true;
    };

    const onMouseUp = () => {
      isDraggingRef.current = false;
    };

    const handleResize = () => {
      sizes.width = window.innerWidth;
      sizes.height = window.innerHeight;
      sizes.pixelRatio = Math.min(window.devicePixelRatio, 2);

      const wasMobile = isMobileRef.current;
      const isMobile = checkIsMobile();
      isMobileRef.current = isMobile;

      if (wasMobile !== isMobile) {
        const particles = particlesRef.current;
        if (particles) {
          const targetX = getTargetPosition();
          gsap.to(particles.points.position, {
            x: targetX,
            duration: 0.8,
            ease: "power2.out"
          });
          
          // 元の位置も更新
          originalPositionRef.current.x = targetX;
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

      // Clock refを更新
      clockRef.current = clock;

      checkIntersections();

      // 新しく追加: マウストラッキングとアニメーションを更新
      updateMouseTracking();

      // Update ripple effect time
      const particles = particlesRef.current;
      if (particles?.material?.uniforms?.uTime) {
        particles.material.uniforms.uTime.value = elapsedTime;
      }

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
            const minDistance = 0.0003;

            const lastPos =
              mouseTrail.length > 0
                ? new THREE.Vector2(mouseTrail[0].x, mouseTrail[0].y)
                : new THREE.Vector2(-1, -1);

            const distanceMoved = lastPos.distanceTo(new THREE.Vector2(uv!.x, uv!.y));

            if (
              (timeSinceLastPoint > 0.02 && distanceMoved > minDistance) || 
              timeSinceLastPoint > 0.08 
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

      // 既存のマウスオフセット処理（mouse trackingと区別）
      if (pointsMesh && frameCount % 2 === 0 && !animationConfig.mouseTracking.enabled) {
        const maxOffset = 1;
        let offsetX = -mouse.x * moveFactor;
        let offsetY = mouse.y * moveFactor;

        offsetX = Math.max(Math.min(offsetX, maxOffset), -maxOffset);
        offsetY = Math.max(Math.min(offsetY, maxOffset), -maxOffset);

        const currentBaseX = pointsMesh.position.x - (pointsMesh.userData.lastOffsetX || 0);
        const currentBaseY = pointsMesh.position.y - (pointsMesh.userData.lastOffsetY || 0);

        pointsMesh.position.x = currentBaseX + offsetX;
        pointsMesh.position.y = currentBaseY + offsetY;

        pointsMesh.userData.lastOffsetX = offsetX;
        pointsMesh.userData.lastOffsetY = offsetY;
      }

      renderer.render(scene, camera);
      animationIdRef.current = requestAnimationFrame(tick);
    };

    // イベントリスナーを追加
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('resize', handleResize);
    renderer.domElement.addEventListener('mousemove', onMouseMove);
    renderer.domElement.addEventListener('mouseenter', onMouseEnter);
    renderer.domElement.addEventListener('mouseleave', onMouseLeave);
    renderer.domElement.addEventListener('mousedown', onMouseDown);
    renderer.domElement.addEventListener('mouseup', onMouseUp);
    
    // グローバルマウスアップイベント（ドラッグ操作のため）
    document.addEventListener('mouseup', onMouseUp);

    tick();

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousemove', onMouseMove);
      renderer.domElement.removeEventListener('mouseenter', onMouseEnter);
      renderer.domElement.removeEventListener('mouseleave', onMouseLeave);
      renderer.domElement.removeEventListener('mousedown', onMouseDown);
      renderer.domElement.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseup', onMouseUp);
      
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