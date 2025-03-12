'use client';

import React, { useContext, useEffect, useRef } from 'react';
// @ts-ignore
import * as THREE from 'three';
import { SceneContext } from './ModularScene';

interface TextureModuleProps {
  texturePath: string;
}

interface MouseTrailEntry {
  x: number;
  y: number;
  time: number;
}

// Shader code remains the same (including the full fragment shader)
const textureVertexShader = `
  varying vec2 vUv;
  
  void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const textureFragmentShader = `
  uniform float iTime;
  uniform sampler2D iTexture;
  uniform vec2 iResolution;
  uniform vec2 iTextureSize;
  uniform vec2 iMouse;
  uniform vec3 iMouseTrail[20]; // x, y, thời gian
  uniform float iLastMoveTime; // Thời gian cuối cùng chuột di chuyển
  uniform float iIsMouseMoving; // Trạng thái chuột (1 = đang di chuyển, 0 = đã dừng)
  varying vec2 vUv;
  
  // Hàm tạo số ngẫu nhiên dựa trên tọa độ
  float random(vec2 st) {
      return fract(sin(dot(st.xy, vec2(12.9898, 78.233))) * 43758.5453123);
  }
  
  // Hàm noise 2D đơn giản
  float noise(vec2 st) {
      vec2 i = floor(st);
      vec2 f = fract(st);
      
      // Four corners in 2D of a tile
      float a = random(i);
      float b = random(i + vec2(1.0, 0.0));
      float c = random(i + vec2(0.0, 1.0));
      float d = random(i + vec2(1.0, 1.0));
      
      // Smooth Interpolation
      vec2 u = f * f * (3.0 - 2.0 * f);
      
      return mix(a, b, u.x) + 
             (c - a)* u.y * (1.0 - u.x) + 
             (d - b) * u.x * u.y;
  }
  
  void main() {
      // Tính toán số lần lặp lại texture
      vec2 tiledUv = vUv * iResolution / iTextureSize;
      
      // Tạo hiệu ứng di chuyển texture
      vec2 movedUv = tiledUv + vec2(
          sin(iTime * 0.2) * 0.5, 
          cos(iTime * 0.2) * 0.5
      );
      
      // Lặp lại texture
      movedUv = fract(movedUv);
      
      // Lấy màu từ texture
      vec4 textureColor = texture2D(iTexture, movedUv);
      
      // Chia màn hình thành lưới các cột dọc (tùy chỉnh kích thước)
      float columnWidth = 0.01; // Kích thước cột khi chảy xuống
      int numColumns = 10; // Số lượng cột
      
      // Xác định cột hiện tại
      int columnIndex = int(vUv.x / columnWidth);
      
      // Tạo seed ngẫu nhiên cho mỗi cột dựa vào vị trí cột
      float columnSeed = random(vec2(float(columnIndex), 0.0));
      
      // Tạo tốc độ chảy khác nhau cho từng cột
      float dropSpeed = 0.06 + columnSeed * 0.1; // Tốc độ từ 0.1 đến 0.4
      
      // Tạo độ dài đuôi kéo khác nhau cho từng cột
      float tailLength = 0.1 + columnSeed * 0.5; // Độ dài từ 0.1 đến 0.5
      
      // Tạo thời gian bắt đầu khác nhau cho từng cột
      float timeOffset = columnSeed * 5.0;
      
      // Tính toán vị trí Y cho hiệu ứng chảy của mỗi cột (từ trên xuống)
      float flowY = 1.0 - mod((iTime + timeOffset) * dropSpeed, 1.5);
      
      // Tính toán hiệu ứng "chảy" cho toạ độ UV
      vec2 distortedUv = vUv;
      
      // Xác định phần pixel sẽ chảy xuống
      float pixelHeight = 0.005; // Chiều cao của mỗi pixel trong hiệu ứng chảy
      
      // Xác định vị trí bắt đầu của dòng chảy (từ trên xuống)
      float streamTop = flowY;
      float streamBottom = flowY + tailLength;
      
      // Thêm nhiễu vào vị trí bắt đầu để tạo hiệu ứng không đều
      streamTop += noise(vec2(float(columnIndex), iTime)) * 0.1;
      
      // Loại bỏ hiệu ứng lượn sóng theo chiều ngang (chảy thẳng xuống)
      float xOffset = 0.0;
      
      // Chỉ áp dụng hiệu ứng chảy nếu pixel nằm trong vùng đang chảy (từ trên xuống)
      if (vUv.y > streamTop && vUv.y < streamBottom) {
          // Tính độ biến dạng dựa vào vị trí trong đuôi
          float distortStrength = 1.0 - (vUv.y - streamTop) / (streamBottom - streamTop);
          distortStrength = pow(distortStrength, 0.5); // Làm cho hiệu ứng mạnh hơn ở phía trên
          
          // Xác định xem điểm hiện tại có nằm trong "pixel" của hiệu ứng hay không
          float discretePixelPos = floor(vUv.y / pixelHeight) * pixelHeight;
          float nextPixelPos = discretePixelPos + pixelHeight;
          
          // Chỉ áp dụng hiệu ứng cho ~40% số cột (dựa vào noise)
          if (noise(vec2(float(columnIndex) * 0.1, floor(iTime))) > 0.6) {
              distortedUv.x += xOffset;
              
              // Tạo hiệu ứng kéo dài các pixel theo chiều dọc
              distortedUv.y = mix(discretePixelPos, nextPixelPos, fract(vUv.y / pixelHeight));
          }
      }
      
      // Tính alpha cho hiệu ứng chảy
      float alpha = 0.0;
      
      // Nếu pixel nằm trong vùng chảy, đặt alpha ngẫu nhiên từ 0.0-0.6
      if (vUv.y > streamTop && vUv.y < streamBottom) {
          // Tính toán alpha dựa vào vị trí trong đuôi (mờ dần về phía đuôi)
          float alphaFactor = 1.0 - (vUv.y - streamTop) / (streamBottom - streamTop);
          alphaFactor = pow(alphaFactor, 0.5); // Tăng cường độ ở phía đầu
          
          // Thêm nhiễu vào alpha để tạo hiệu ứng không đều
          alpha = random(distortedUv + vec2(iTime * 0.1)) * 0.6 * alphaFactor;
          
          // Tính vị trí pixel cho tính toán độ rời rạc
          float discretePixelPos = floor(vUv.y / pixelHeight) * pixelHeight;
          
          // Chỉ hiện một số pixel trong vùng chảy để tạo hiệu ứng rời rạc
          if (random(vec2(discretePixelPos, float(columnIndex))) > 0.3) {
              alpha *= 1.0;
          } else {
              alpha *= 0.3;
          }
      }
      
      // Kết quả từ hiệu ứng pixel chảy
      vec4 finalColor = vec4(textureColor.rgb, alpha);
      
      // Thêm hiệu ứng chuột và đuôi
      vec3 cursorColor = vec3(1.0, 0.7, 0.0); // Màu vàng
      float cursorRadius = 0.04; // Bán kính vùng ảnh hưởng của chuột (tăng lên từ 0.03)
      float cursorAlpha = 0.0;
      
      // Tính thời gian kể từ lần di chuyển cuối (để làm mờ dần)
      float timeSinceLastMove = iTime - iLastMoveTime;
      
      // Thời gian để hiệu ứng biến mất hoàn toàn (1.5 giây)
      float fadeOutDuration = 1.5;
      
      // Hệ số mờ dần dựa vào thời gian kể từ lần di chuyển cuối
      float fadeFactor = 1.0;
      
      // Chỉ áp dụng hiệu ứng mờ dần khi chuột đã dừng (iIsMouseMoving = 0)
      if (iIsMouseMoving < 0.5) {
          fadeFactor = max(0.0, 1.0 - (timeSinceLastMove / fadeOutDuration));
      }
      
      // Xử lý vị trí chuột hiện tại
      float cursorDist = distance(vUv, iMouse);
      
      // Vị trí chuột hiện tại có ảnh hưởng mạnh nhất
      if(cursorDist < cursorRadius) {
          float mainCursorAlpha = (1.0 - cursorDist / cursorRadius) * 0.8 * fadeFactor;
          cursorAlpha = max(cursorAlpha, mainCursorAlpha);
      }
      
      // Xử lý đuôi chuột
      for(int i = 0; i < 20; i++) {
          if(iMouseTrail[i].z < 0.0) continue; // Bỏ qua nếu không có dữ liệu
          
          vec2 trailPos = iMouseTrail[i].xy;
          float trailTime = iMouseTrail[i].z;
          float trailDist = distance(vUv, trailPos);
          
          // Thời gian tồn tại của đuôi - kéo dài hơn nhiều
          float timeAlive = iTime - trailTime;
          float fadeTime = 2.0; // Thời gian để mờ dần hoàn toàn (2 giây)
          float timeFactor = max(0.0, 1.0 - timeAlive / fadeTime);
          
          // Giảm dần ảnh hưởng dựa vào vị trí trong đuôi (càng xa càng mờ)
          float trailFactor = max(0.3, 1.0 - float(i) / 20.0);
          
          // Kích thước đuôi giảm chậm hơn
          float trailRadius = cursorRadius * (0.5 + trailFactor * 0.5);
          
          // Tính alpha cho từng điểm trong đuôi
          if(trailDist < trailRadius) {
              float currentTrailAlpha = (1.0 - trailDist / trailRadius) * trailFactor * timeFactor * 0.7 * fadeFactor;
              cursorAlpha = max(cursorAlpha, currentTrailAlpha);
          }
      }
      
      // Trộn màu gốc với màu chuột
      finalColor.rgb = mix(finalColor.rgb, cursorColor, cursorAlpha);
      finalColor.a = max(finalColor.a, cursorAlpha); // Đảm bảo vùng chuột luôn hiển thị (tăng độ đục)
      
      gl_FragColor = finalColor;
  }
`;

const TextureModule: React.FC<TextureModuleProps> = ({ texturePath }) => {
  const { scene, camera, renderer, raycaster, mouse, clock, loadingManager } = useContext(SceneContext);
  
  const texturePlaneRef = useRef<THREE.Mesh | null>(null);
  const textureMaterialRef = useRef<THREE.ShaderMaterial | null>(null);
  const uvCoordsRef = useRef<THREE.Vector2>(new THREE.Vector2(0.5, 0.5));
  const mouseTrailRef = useRef<MouseTrailEntry[]>([]);
  const lastMouseMoveTimeRef = useRef<number>(0);
  const isMouseMovingRef = useRef<boolean>(false);
  
  // Các hằng số
  const TRAIL_LENGTH = 20;

  useEffect(() => {
    if (!scene.current) return;

    // Load texture với LoadingManager
    const textureLoader = loadingManager?.current 
      ? new THREE.TextureLoader(loadingManager.current)
      : new THREE.TextureLoader();
      
    textureLoader.load(texturePath, (loadedTexture: any) => {
      const originalWidth = loadedTexture.image.width;
      const originalHeight = loadedTexture.image.height;
      
      // Tạo plane với kích thước màn hình
      const planeGeometry = new THREE.PlaneGeometry(
        window.innerWidth / 100,
        window.innerHeight / 100
      );

      // Tạo shader material cho texture effect
      const textureMaterial = new THREE.ShaderMaterial({
        transparent: true,
        uniforms: {
          iTime: { value: 0 },
          iTexture: { value: loadedTexture },
          iResolution: { 
            value: new THREE.Vector2(window.innerWidth, window.innerHeight) 
          },
          iTextureSize: {
            value: new THREE.Vector2(originalWidth, originalHeight)
          },
          iMouse: { value: new THREE.Vector2(0.5, 0.5) },
          iMouseTrail: { value: new Array(TRAIL_LENGTH).fill(new THREE.Vector3(0, 0, 0)) },
          iLastMoveTime: { value: 0 },
          iIsMouseMoving: { value: 0 }
        },
        vertexShader: textureVertexShader,
        fragmentShader: textureFragmentShader
      });
      textureMaterialRef.current = textureMaterial;

      // Tạo mesh plane và thêm vào scene
      const plane = new THREE.Mesh(planeGeometry, textureMaterial);
      plane.position.set(0, 0, 0); // Đặt phía sau camera
      scene.current.add(plane);
      texturePlaneRef.current = plane;
    });

    // Handle mouse move event từ scene
    const handleMouseMove = (event: MouseEvent) => {
      lastMouseMoveTimeRef.current = performance.now() * 0.001; // Chuyển sang giây
      isMouseMovingRef.current = true;
    };

    // Handle resize event
    const handleResize = (e: Event) => {
      const customEvent = e as CustomEvent;
      const { width, height } = customEvent.detail;
      
      if (textureMaterialRef.current) {
        textureMaterialRef.current.uniforms.iResolution.value.set(width, height);
      }
      
      if (texturePlaneRef.current) {
        const newGeometry = new THREE.PlaneGeometry(
          width / 100,
          height / 100
        );
        texturePlaneRef.current.geometry.dispose();
        texturePlaneRef.current.geometry = newGeometry;
      }
    };

    // Handle before render event
    const handleBeforeRender = (e: Event) => {
      if (!raycaster.current || !camera.current || !texturePlaneRef.current || 
          !textureMaterialRef.current || !clock.current) return;

      const customEvent = e as CustomEvent;
      const { time, mouse: mousePos } = customEvent.detail;
      
      // Cập nhật uniforms
      textureMaterialRef.current.uniforms.iTime.value = time;
      
      // Kiểm tra trạng thái chuột di chuyển
      if (isMouseMovingRef.current && time - lastMouseMoveTimeRef.current > 0.1) {
        isMouseMovingRef.current = false;
      }
      
      // Cập nhật thời gian và trạng thái chuột
      textureMaterialRef.current.uniforms.iLastMoveTime.value = lastMouseMoveTimeRef.current;
      textureMaterialRef.current.uniforms.iIsMouseMoving.value = isMouseMovingRef.current ? 1.0 : 0.0;
      
      // Xử lý raycasting với texture plane
      if (mousePos) {
        raycaster.current.setFromCamera(mousePos, camera.current);
        const intersects = raycaster.current.intersectObject(texturePlaneRef.current);
        
        if (intersects.length > 0 && intersects[0].uv) {
          const uv = intersects[0].uv;
          
          // Thêm vị trí vào đuôi chuột
          const now = time;
          const lastPointTime = mouseTrailRef.current.length > 0 ? mouseTrailRef.current[0].time : 0;
          
          const timeSinceLastPoint = now - lastPointTime;
          const minDistance = 0.001;
          
          const lastPos = mouseTrailRef.current.length > 0 
              ? new THREE.Vector2(mouseTrailRef.current[0].x, mouseTrailRef.current[0].y) 
              : new THREE.Vector2(-1, -1);
          
          const distanceMoved = lastPos.distanceTo(new THREE.Vector2(uv.x, uv.y));
          
          if ((timeSinceLastPoint > 0.05 && distanceMoved > minDistance) || 
              timeSinceLastPoint > 0.2) {
            
            uvCoordsRef.current.set(uv.x, uv.y);
            
            // Thêm vị trí hiện tại vào đầu mảng trail
            mouseTrailRef.current.unshift({
              x: uv.x,
              y: uv.y,
              time: now
            });
            
            // Giới hạn kích thước mảng trail
            if (mouseTrailRef.current.length > TRAIL_LENGTH) {
              mouseTrailRef.current.pop();
            }
          }
        }
      }
      
      // Cập nhật vị trí chuột cho shader
      textureMaterialRef.current.uniforms.iMouse.value.copy(uvCoordsRef.current);
      
      // Cập nhật đuôi chuột cho shader
      const trailArray: THREE.Vector3[] = [];
      for (let i = 0; i < TRAIL_LENGTH; i++) {
        if (i < mouseTrailRef.current.length) {
          const entry = mouseTrailRef.current[i];
          trailArray.push(new THREE.Vector3(
            entry.x,
            entry.y,
            entry.time
          ));
        } else {
          trailArray.push(new THREE.Vector3(0, 0, -1));
        }
      }
      textureMaterialRef.current.uniforms.iMouseTrail.value = trailArray;
    };

    // Đăng ký event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scene-resize', handleResize);
    window.addEventListener('before-render', handleBeforeRender);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scene-resize', handleResize);
      window.removeEventListener('before-render', handleBeforeRender);

      if (texturePlaneRef.current && scene.current) {
        scene.current.remove(texturePlaneRef.current);
        texturePlaneRef.current.geometry.dispose();
        if (texturePlaneRef.current.material instanceof THREE.Material) {
          texturePlaneRef.current.material.dispose();
        }
      }
    };
  }, [texturePath, scene, camera, renderer, raycaster, mouse, clock, loadingManager]);

  return null; // Component này không render gì, chỉ thêm objects vào scene
};

export default TextureModule;