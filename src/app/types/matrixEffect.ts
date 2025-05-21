import * as THREE from 'three';

export interface MouseTrailPoint {
  x: number;
  y: number;
  time: number;
}

export interface MatrixEffectOptions {
  texturePath: string;
  columnWidth: number;
  tailLength: number;
  flowSpeed: number;
  cursorColor: THREE.Color | string;
  cursorRadius: number;
}