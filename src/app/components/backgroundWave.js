"use client";
import React from 'react';
import SimplexNoise from 'simplex-noise';

const { PI, abs, atan2, ceil, floor, max, min, round, sqrt } = Math;
  
  const ZERO = 0.0;
  const ONE = 1.0;
  const TWO = 2.0;
  
  const HALF = ONE / TWO;
  
  const TAU = PI * TWO;

class Vector {
    constructor(x = 0, y = 0, z = 0) {
      this.x = x;
      this.y = y;
      this.z = z;
    }
    toString() {
      let { x, y, z } = this;
      return `{ x: ${x}, y: ${y}, z: ${z} }`;
    }
  
    static center() {
      return new Vector(width_half, height_half);
    }
  
    static from(v, ...args) {
      if (v === undefined) {
        return new Vector();
      } else
      if (Array.isArray(v)) {
        return new Vector(...v);
      } else
      if (typeof v === 'object') {
        return new Vector(v.x, v.y, v.z);
      } else
      if (typeof v === 'number') {
        return new Vector(v, ...args);
      }
    }
  
    static gl(x, y, z) {
      if (typeof x === 'number' && y === undefined && z === undefined) {
        return new Vector(x, x, x);
      }
      throw new Error('Not implemented for arguments');
    }
  
    static fromAngle(angle, mult = 1) {
      return new Vector(cos(angle) * mult, sin(angle) * mult); // .mult(mult);
    }
    static fa(...args) {
      return Vector.fromAngle(...args);
    }
  
    static random2D(angle = true, mult = 1) {
      let v;
      if (angle === true) {
        v = Vector.fromAngle(random(TAU));
      } else
      {
        v = new Vector(random(-1, 1), random(-1, 1));
      }
      if (typeof angle === 'number') {
        v.mult(angle);
      } else
      if (mult !== 1) {
        v.mult(mult);
      }
      return v;
    }
  
    static lerp(start, stop, amt = 0.5, apply = false) {
      let amtX = amt;
      let amtY = amt;
      let amtZ = amt;
      if (isVectorish(amt)) ({ x: amtX, y: amtY, z: amtZ } = amt);
      const x = start.x === stop.x ? start.x : lerp(start.x, stop.x, amtX);
      const y = start.y === stop.y ? start.y : lerp(start.y, stop.y, amtY);
      const z = start.z === undefined ? stop.z === undefined ? 0 : stop.z : start.z === stop.z ? start.z : lerp(start.z, stop.z, amtZ);
      if (apply) {
        return start.set(x, y, z);
      }
      return new Vector(x, y, z);
    }
    static dampen(start, stop, rate, timeDelta = canvasFrameDelta, apply = false) {
      const x = dampen(start.x, stop.x, rate, timeDelta);
      const y = dampen(start.y, stop.y, rate, timeDelta);
      const z = start.z === undefined ? stop.z === undefined ? 0 : stop.z : dampen(start.z, stop.z, rate, timeDelta);
      if (apply) {
        return start.set(x, y, z);
      }
      return new Vector(x, y, z);
    }
  
    static average(vectors, ...rest) {
      if (rest.length) {
        vectors = [vectors, ...rest];
      }
      return vectors.reduce((p, n) => p.add(n), new Vector()).div(vectors.length);
    }
  
    // Swizzlers
    get nx() {return -this.x;}
    get ny() {return -this.y;}
    get nz() {return -this.z;}
    get xy() {return [this.x, this.y];}
    get yx() {return [this.y, this.x];}
    get xz() {return [this.x, this.z];}
    get zx() {return [this.z, this.x];}
    get yz() {return [this.y, this.z];}
    get zy() {return [this.z, this.y];}
    get np() {
      const self = this;
      return {
        get xy() {return [-self.x, self.y];},
        get yx() {return [-self.y, self.x];},
        get xz() {return [-self.x, self.z];},
        get zx() {return [-self.z, self.x];},
        get yz() {return [-self.y, self.z];},
        get zy() {return [-self.z, self.y];} };
  
    }
    get pn() {
      const self = this;
      return {
        get xy() {return [self.x, -self.y];},
        get yx() {return [self.y, -self.x];},
        get xz() {return [self.x, -self.z];},
        get zx() {return [self.z, -self.x];},
        get yz() {return [self.y, -self.z];},
        get zy() {return [self.z, -self.y];} };
  
    }
    get nn() {
      const self = this;
      return {
        get xy() {return [-self.x, -self.y];},
        get yx() {return [-self.y, -self.x];},
        get xz() {return [-self.x, -self.z];},
        get zx() {return [-self.z, -self.x];},
        get yz() {return [-self.y, -self.z];},
        get zy() {return [-self.z, -self.y];} };
  
    }
    get xyz() {return [this.x, this.y, this.z];}
    get xzy() {return [this.x, this.z, this.y];}
    get yxz() {return [this.y, this.x, this.z];}
    get yzx() {return [this.y, this.z, this.x];}
    get zyx() {return [this.z, this.y, this.x];}
    get zxy() {return [this.z, this.x, this.y];}
  
    get xyObject() {return { x: this.x, y: this.y };}
    get xzObject() {return { x: this.x, z: this.z };}
    get yzObject() {return { y: this.y, z: this.z };}
    get xyzObject() {return { x: this.x, y: this.y, z: this.z };}
  
    copy() {
      return new Vector(this.x, this.y, this.z);
    }
  
    get _() {
      return this.copy();
    }
  
    swap(a, b) {
      [this[a], this[b]] = [this[b], this[a]];
      return this;
    }
    swapXY() {return this.swap('x', 'y');}
    swapYZ() {return this.swap('y', 'z');}
    swapZX() {return this.swap('z', 'x');}
    swapYX() {return this.swapXY();}
    swapZY() {return this.swapYZ();}
    swapXZ() {return this.swapZX();}
  
    // Copy [a] to [b]
    copyWithin(a, b) {
      this[b] = this[a];
      return this;
    }
    copyXY() {return this.copyWithin('x', 'y');}
    copyYX() {return this.copyWithin('y', 'x');}
    copyYZ() {return this.copyWithin('y', 'z');}
    copyZY() {return this.copyWithin('z', 'y');}
    copyZX() {return this.copyWithin('z', 'x');}
    copyXZ() {return this.copyWithin('x', 'z');}
  
    // equals(vec) {
    // 	return this.x === vec.x && this.y === vec.y;
    // }
    equals(vec, tolerance = 0) {
      if (tolerance === 0) {
        return this.x === vec.x && this.y === vec.y;
      }
      return abs(this.x - vec.x) < tolerance && abs(this.y - vec.y) < tolerance;
    }
  
    equals3D(vec = {}) {
      return this.x === vec.x && this.y === vec.y && this.z === vec.z;
    }
  
    draw() {
      point(this.x, this.y);
    }
  
    set(x = this.x, y = this.y, z = this.z) {
      if (x instanceof Vector || typeof x === 'object') {
        this.x = x.x;
        this.y = x.y;
        this.z = x.z;
        return this;
      } else
      if (Array.isArray(x)) {
        [this.x, this.y, this.z] = x;
        return this;
      }
      [this.x, this.y, this.z] = [x, y, z];
      return this;
    }
    setX(x = this.x) {
      if (x instanceof Vector) {
        this.x = x.x;
        return this;
      } else
      if (Array.isArray(x)) {
        [this.x] = x;
        return this;
      }
      this.x = x;
      return this;
    }
    setY(y = this.y) {
      if (y instanceof Vector) {
        this.y = y.y;
        return this;
      } else
      if (Array.isArray(y)) {
        [, this.y] = y;
        return this;
      }
      this.y = y;
      return this;
    }
    setZ(z = this.z) {
      if (z instanceof Vector) {
        this.z = z.z;
        return this;
      } else
      if (Array.isArray(z)) {
        [,, this.z] = z;
        return this;
      }
      this.z = z;
      return this;
    }
    setXY(x = this.x, y = this.y) {
      if (x instanceof Vector) {
        this.x = x.x;
        this.y = x.y;
        return this;
      } else
      if (Array.isArray(x)) {
        [this.x, this.y] = x;
        return this;
      }
      this.x = x;
      this.y = y;
      return this;
    }
    setYX(...args) {
      return this.setXY(...args);
    }
    setYZ(y = this.y, z = this.z) {
      if (y instanceof Vector) {
        this.y = y.y;
        this.z = y.z;
        return this;
      } else
      if (Array.isArray(y) && y.length === 3) {
        [, this.y, this.z] = y;
        return this;
      } else
      if (Array.isArray(y) && y.length === 2) {
        [this.y, this.z] = y;
        return this;
      }
      this.y = y;
      this.z = z;
      return this;
    }
    setZY(...args) {
      return this.setYZ(...args);
    }
    setXZ(x = this.x, z = this.y) {
      if (x instanceof Vector) {
        this.x = x.x;
        this.z = x.z;
        return this;
      } else
      if (Array.isArray(x) && x.length === 3) {
        [this.x,, this.z] = x;
        return this;
      } else
      if (Array.isArray(x) && x.length === 2) {
        [this.x, this.z] = x;
        return this;
      }
      this.x = x;
      this.z = z;
      return this;
    }
    setZX(...args) {
      return this.setXZ(...args);
    }
  
    add(x = 0, y = undefined, z = undefined) {
      if (y === undefined) {
        y = x;
        z = x;
      } else
      if (z === undefined) {
        z = 0;
      }
      if (x instanceof Vector) {
        this.x += x.x;
        this.y += x.y;
        this.z += x.z;
        return this;
      }
      this.x += x;
      this.y += y;
      this.z += z;
      return this;
    }
    addX(n = 0) {
      if (n instanceof Vector) {
        this.x += n.x;
        return this;
      }
      this.x += n;
      return this;
    }
    addY(n = 0) {
      if (n instanceof Vector) {
        this.y += n.y;
        return this;
      }
      this.y += n;
      return this;
    }
    addZ(n = 0) {
      if (n instanceof Vector) {
        this.z += n.z;
        return this;
      }
      this.z += n;
      return this;
    }
    addXY(x, y = x) {
      return this.addX(x).addY(y);
    }
    addYX(y, x = y) {
      return this.addXY(x, y);
    }
    addYZ(y, z = y) {
      return this.addY(y).addZ(z);
    }
    addZY(z, y = z) {
      return this.addYZ(y, z);
    }
    addZX(z, x = z) {
      return this.addZ(z).addX(x);
    }
    addXZ(x, z = x) {
      return this.addZX(x, z);
    }
    addXYZ(...args) {
      return this.add(...args);
    }
    sub(x = 0, y = undefined, z = undefined) {
      if (y === undefined) {
        y = x;
        z = x;
      } else
      if (z === undefined) {
        z = 0;
      }
      if (x instanceof Vector) {
        this.x -= x.x;
        this.y -= x.y;
        this.z -= x.z;
        return this;
      }
      this.x -= x;
      this.y -= y;
      this.z -= z;
      return this;
    }
    subX(n = 0) {
      if (n instanceof Vector) {
        this.x -= n.x;
        return this;
      }
      this.x -= n;
      return this;
    }
    subY(n = 0) {
      if (n instanceof Vector) {
        this.y -= n.y;
        return this;
      }
      this.y -= n;
      return this;
    }
    subZ(n = 0) {
      if (n instanceof Vector) {
        this.z -= n.z;
        return this;
      }
      this.z -= n;
      return this;
    }
    subXY(x, y = x) {
      return this.subX(x).subY(y);
    }
    subYX(y, x = y) {
      return this.subXY(x, y);
    }
    subYZ(y, z = y) {
      return this.subY(y).subZ(z);
    }
    subZY(z, y = z) {
      return this.subYZ(y, z);
    }
    subZX(z, x = z) {
      return this.subZ(z).subX(x);
    }
    subXZ(x, z = x) {
      return this.subZX(x, z);
    }
    subXYZ(x, y = x, z = y) {
      return this.sub(x, y, z);
    }
    mult(x = 1, y = x, z = x) {
      if (x instanceof Vector) {
        this.x *= x.x;
        this.y *= x.y;
        this.z *= x.z;
        return this;
      }
      this.x *= x;
      this.y *= y;
      this.z *= z;
      return this;
    }
    multX(n = 1) {
      if (n instanceof Vector) {
        this.x *= n.x;
        return this;
      }
      this.x *= n;
      return this;
    }
    multY(n = 1) {
      if (n instanceof Vector) {
        this.y *= n.y;
        return this;
      }
      this.y *= n;
      return this;
    }
    multZ(n = 1) {
      if (n instanceof Vector) {
        this.z *= n.z;
        return this;
      }
      this.z *= n;
      return this;
    }
    multXY(x, y = x) {
      return this.multX(x).multY(y);
    }
    multYX(y, x = y) {
      return this.multXY(x, y);
    }
    multYZ(y, z = y) {
      return this.multY(y).multZ(z);
    }
    multZY(z, y = z) {
      return this.multYZ(y, z);
    }
    multZX(z, x = z) {
      return this.multZ(z).multX(x);
    }
    multXZ(x, z = x) {
      return this.multZX(x, z);
    }
    multXYZ(...args) {
      return this.mult(...args);
    }
    div(x = 1, y = x, z = x) {
      if (x instanceof Vector) {
        this.x /= x.x;
        this.y /= x.y;
        this.z /= x.z;
        return this;
      }
      this.x /= x;
      this.y /= y;
      this.z /= z;
      return this;
    }
    divX(n = 1) {
      if (n instanceof Vector) {
        this.x /= n.x;
        return this;
      }
      this.x /= n;
      return this;
    }
    divY(n = 1) {
      if (n instanceof Vector) {
        this.y /= n.y;
        return this;
      }
      this.y /= n;
      return this;
    }
    divZ(n = 1) {
      if (n instanceof Vector) {
        this.z /= n.z;
        return this;
      }
      this.z /= n;
      return this;
    }
    divXY(x, y = x) {
      return this.divX(x).divY(y);
    }
    divYX(y, x = y) {
      return this.divXY(x, y);
    }
    divYZ(y, z = y) {
      return this.divY(y).divZ(z);
    }
    divZY(z, y = z) {
      return this.divYZ(y, z);
    }
    divZX(z, x = z) {
      return this.divZ(z).divX(x);
    }
    divXZ(x, z = x) {
      return this.divZX(x, z);
    }
    divXYZ(...args) {
      return this.div(...args);
    }
  
    mod(x, y, z) {
      if (x === undefined) return this;else
      if (x instanceof Vector) {
        this.x %= x.x;
        this.y %= x.y;
        this.z %= x.z;
        return this;
      }
      this.x %= x;
      this.y %= y === undefined ? x : y;
      this.z %= z === undefined ? x : y;
      return this;
    }
    // TODO: modX, modY, modZ
  
    min(mX = this.x, mY = this.y, mZ = this.z) {
      if (mX instanceof Vector) {
        this.x = min(this.x, mX.x);
        this.y = min(this.y, mX.y);
        this.z = min(this.z, mX.z);
        return this;
      }
      this.x = min(this.x, mX);
      this.y = min(this.y, mY);
      this.z = min(this.z, mZ);
      return this;
    }
    max(mX = this.x, mY = this.y, mZ = this.z) {
      if (mX instanceof Vector) {
        this.x = max(this.x, mX.x);
        this.y = max(this.y, mX.y);
        this.z = max(this.z, mX.z);
        return this;
      }
      this.x = max(this.x, mX);
      this.y = max(this.y, mY);
      this.z = max(this.z, mZ);
      return this;
    }
    minX(n) {
      this.x = min(this.x, n instanceof Vector ? n.x : n);
      return this;
    }
    minY(n) {
      this.y = min(this.y, n instanceof Vector ? n.y : n);
      return this;
    }
    minZ(n) {
      this.z = min(this.z, n instanceof Vector ? n.z : n);
      return this;
    }
    maxX(n) {
      this.x = max(this.x, n instanceof Vector ? n.x : n);
      return this;
    }
    maxY(n) {
      this.y = max(this.y, n instanceof Vector ? n.y : n);
      return this;
    }
    maxZ(n) {
      this.z = max(this.z, n instanceof Vector ? n.z : n);
      return this;
    }
  
    sum(...components) {
      if (!components.length) return 0;
      if (components.length && Array.isArray(components[0])) return this.sum(...components[0]);
      return components.reduce((p, n) => p + this[n], 0);
    }
    sumXY() {
      return this.x + this.y;
    }
    sumXZ() {
      return this.x + this.z;
    }
    sumYX() {
      return this.y + this.x;
    }
    sumYZ() {
      return this.y + this.z;
    }
    sumZX() {
      return this.z + this.x;
    }
    sumZY() {
      return this.z + this.y;
    }
    sumXYZ() {
      return this.x + this.y + this.z;
    }
    sumXZY() {
      return this.x + this.z + this.y;
    }
    sumYXZ() {
      return this.y + this.x + this.z;
    }
    sumYZX() {
      return this.y + this.z + this.x;
    }
    sumZXY() {
      return this.z + this.x + this.y;
    }
    sumZYX() {
      return this.z + this.y + this.x;
    }
  
    heading() {
      return atan2(this.y, this.x);
    }
    rotate(a = 0) {
      // if(a === 0) {
      // 	return this;
      // }
      // let newHeading = this.heading() + a;
      // let mag = this.mag();
      // return this.set(cos(newHeading), sin(newHeading)).mult(mag);
      if (!a) {
        return this;
      }
      const c = cos(a);
      const s = sin(a);
      const { x, y } = this;
      this.x = x * c - y * s;
      this.y = x * s + y * c;
      return this;
    }
    rotateXY(a) {
      let v = new Vector(this.x, this.y).rotate(a);
      this.x = v.x;
      this.y = v.y;
      return this;
    }
    rotateYZ(a) {
      let v = new Vector(this.y, this.z).rotate(a);
      this.y = v.x;
      this.z = v.y;
      return this;
    }
    rotateZX(a) {
      let v = new Vector(this.z, this.x).rotate(a);
      this.z = v.x;
      this.x = v.y;
      return this;
    }
    rotateYX(a) {return this.rotateXY(a);}
    rotateZY(a) {return this.rotateYZ(a);}
    rotateXZ(a) {return this.rotateZX(a);}
    rotateZ(a) {
      return this.rotateXY(a);
    }
    rotateY(a) {
      return this.rotateXZ(a);
    }
    rotateX(a) {
      return this.rotateYZ(a);
    }
    rotateAbout(angle, point) {
      return this.sub(point).rotate(angle).add(point);
    }
    magSq() {
      return this.x * this.x + this.y * this.y;
    }
    magSq3D() {
      return this.x * this.x + this.y * this.y + this.z * this.z;
    }
    mag() {
      return Math.sqrt(this.magSq());
      // return hypot(this.x, this.y);
    }
    mag3D() {
      return Math.sqrt(this.magSq3D());
      // return hypot(this.x, this.y);
    }
    normalize(mag = this.mag()) {
      return mag === 0 ? this : this.div(mag);
    }
    normalize3D(mag = this.mag3D()) {
      return mag === 0 ? this : this.div(mag);
    }
    norm(mag) {
      return this.normalize(mag);
    }
    norm3D(mag) {
      return this.normalize3D(mag);
    }
    setMag(mag, knownMag) {
      return this.normalize(knownMag).mult(mag);
    }
    setMag3D(mag, knownMag) {
      return this.normalize3D(knownMag).mult(mag);
    }
    limit(max) {
      const magSq = this.magSq();
      if (magSq > max * max) {
        // this.div(sqrt(magSq) * max);
        this.normalize(sqrt(magSq)).mult(max);
      }
      return this;
    }
    limit3D(max) {
      const magSq = this.magSq3D();
      if (magSq > max * max) {
        // this.div(sqrt(magSq) * max);
        this.normalize3D(sqrt(magSq)).mult(max);
      }
      return this;
    }
    dot(x = 0, y = 0) {
      if (x instanceof Vector) {
        return this.dot(x.x, x.y);
      }
      return this.x * x + this.y * y;
    }
    dot3D(x = 0, y = 0, z = 0) {
      if (x instanceof Vector) {
        return this.x * x.x + this.y * x.y + this.z * x.z;
      }
      return this.x * x + this.y * y + this.z * z;
    }
    cross(v) {
      return new Vector(
      this.y * v.z - this.z * v.y,
      this.z * v.x - this.x * v.z,
      this.x * v.y - this.y * v.x);
  
    }
    reflect(normal) {
      return this.sub(normal._.mult(this.dot(normal) * 2));
    }
    reflect3D(normal) {
      return this.sub(normal._.mult(this.dot3D(normal) * 2));
    }
    refract(normal, eta) {
      const dot = normal.dot(this);
      const k = 1 - eta * eta * (1 - dot * dot);
      if (k < 0) {
        return this.set(0, 0, 0);
      } else
      {
        return this.mult(eta).sub(normal._.mult(eta * dot + sqrt(k)));
      }
    }
    refract3D(normal, eta) {
      const dot = normal.dot3D(this);
      const k = 1 - eta * eta * (1 - dot * dot);
      if (k < 0) {
        return this.set(0, 0, 0);
      } else
      {
        return this.mult(eta).sub(normal._.mult(eta * dot + sqrt(k)));
      }
    }
    dist(x, y) {
      if (x instanceof Vector) {
        return x._.sub(this).mag();
      } else
      if (typeof x === 'object' && 'x' in x) {
        ({ x, y } = x);
      }
      return dist(this.x, this.y, x, y);
    }
    dist3D(v) {
      return v._.sub(this).mag3D();
    }
    lerp(stop, amt) {
      return Vector.lerp(this, stop, amt, true);
    }
    _lerpPart(stop, amt, part) {
      stop = isVectorish(stop) ? stop[part] : stop;
      amt = isVectorish(amt) ? amt[part] : amt;
      this[part] = lerp(this[part], stop, amt);
      return this;
    }
    lerpX(stop, amt) {
      return this._lerpPart(stop, amt, 'x');
    }
    lerpY(stop, amt) {
      return this._lerpPart(stop, amt, 'y');
    }
    lerpZ(stop, amt) {
      return this._lerpPart(stop, amt, 'z');
    }
    lerpXY(stop, amt) {
      return this.lerpX(stop, amt).lerpY(stop, amt);
    }
    lerpYX(stop, amt) {
      return this.lerpXY(stop, amt);
    }
    lerpYZ(stop, amt) {
      return this.lerpY(stop, amt).lerpZ(stop, amt);
    }
    lerpZY(stop, amt) {
      return this.lerpYZ(stop, amt);
    }
    lerpZX(stop, amt) {
      return this.lerpZ(stop, amt).lerpX(stop, amt);
    }
    lerpXZ(stop, amt) {
      return this.lerpZX(stop, amt);
    }
    dampen(stop, amt, timeDelta) {
      return Vector.dampen(this, stop, amt, timeDelta, true);
    }
    _dampenPart(stop, amt, timeDelta, part) {
      stop = isVectorish(stop) ? stop[part] : stop;
      amt = isVectorish(amt) ? amt[part] : amt;
      this[part] = dampen(this[part], stop, amt, timeDelta);
      return this;
    }
    dampenX(stop, amt, timeDelta) {
      return this._dampenPart(stop, amt, timeDelta, 'x');
    }
    dampenY(stop, amt, timeDelta) {
      return this._dampenPart(stop, amt, timeDelta, 'y');
    }
    dampenZ(stop, amt, timeDelta) {
      return this._dampenPart(stop, amt, timeDelta, 'z');
    }
    dampenXY(stop, amt, timeDelta) {
      return this.dampenX(stop, amt, timeDelta).dampenY(stop, amt, timeDelta);
    }
    dampenYX(stop, amt, timeDelta) {
      return this.dampenXY(stop, amt, timeDelta);
    }
    dampenYZ(stop, amt, timeDelta) {
      return this.dampenY(stop, amt, timeDelta).dampenZ(stop, amt, timeDelta);
    }
    dampenZY(stop, amt, timeDelta) {
      return this.dampenYZ(stop, amt, timeDelta);
    }
    dampenZX(stop, amt, timeDelta) {
      return this.dampenZ(stop, amt, timeDelta).dampenX(stop, amt, timeDelta);
    }
    dampenXZ(stop, amt, timeDelta) {
      return this.dampenZX(stop, amt, timeDelta);
    }
    round() {
      this.x = round(this.x);
      this.y = round(this.y);
      this.z = round(this.z);
      return this;
    }
    floor() {
      this.x = floor(this.x);
      this.y = floor(this.y);
      this.z = floor(this.z);
      return this;
    }
    fastFloor() {
      this.x = ~~this.x;
      this.y = ~~this.y;
      this.z = ~~this.z;
      return this;
    }
    fastFloor2() {
      this.x = this.x | 0;
      this.y = this.y | 0;
      this.z = this.z | 0;
      return this;
    }
    ceil() {
      this.x = ceil(this.x);
      this.y = ceil(this.y);
      this.z = ceil(this.z);
      return this;
    }
  }
  

class BackgroundWave extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.noise = new SimplexNoise();
        this._defaulCanvasOptions = {
            autoClear: true,
            autoCompensate: false,
            autoPushPop: true,
            canvas: true,
            centered: true,
            desynchronized: false,
            width: null,
            height: null,
            drawAndStop: false
        };
        this._canvasOptions = {};
        this.canvas = null;
        this.ctx = null;
        this._anim = this._lastCanvasTime = this.canvasFrameDelta = this.canvasFrameRate = this.frameCount = this.width = this.height = this.width_half = this.height_half = this.width_quarter =this.height_quarter = this.canvasSize = 0;
        this._canvasCurrentlyCentered = false;
    }

    componentDidMount() {
        // this.animate();
        this.canvas = document.getElementById('canvas');
        this.ctx = canvas.getContext('2d', {
            desynchronized: window.canvasOptions && window.canvasOptions.desynchronized !== undefined ?
            window.canvasOptions.desynchronized : this._defaulCanvasOptions.desynchronized
        });
        window.canvasOptions = {
            autoClear: true,
            autoCompensate: false,
            autoPushPop: true,
            canvas: true,
            centered: true,
        };
        window.addEventListener('resize', this._resizeCanvas);
        this._originalCtx = this.ctx;
        this.canvasSize = new Vector();
        this.canvasSize.half = new Vector();
        this.canvasSize.quarter = new Vector();
        this.mousePos = new Vector();
        this.mousePosPrev = new Vector();
        this.mouseUpPos = new Vector();
        this.mouseDownPos = new Vector();
        this.mouseEnterPos = new Vector();
        this.mouseExitPos = new Vector();
        Object.assign(
            this._canvasOptions,
            this._defaulCanvasOptions,
        'canvasOptions' in window ? window.canvasOptions : {});
        
        if (this._canvasOptions.canvas === false) {
            document.body.removeChild(canvas);
        }
        this._resizeCanvas();
        if ('setup' in window) {
            window.setup();
        }
        this.frameCount = 0;
        this._anim = requestAnimationFrame(this._draw);
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.requestID);
    }

    _draw = (timestamp) => {var _lastCanvasTime2, _canvasFrameDelta;
        this.frameCount++;
        this.canvasFrameDelta = timestamp - ((_lastCanvasTime2 = this._lastCanvasTime) !== null && _lastCanvasTime2 !== void 0 ? _lastCanvasTime2 : timestamp);
        this.canvasFrameRate = 1000 / ((_canvasFrameDelta = this.canvasFrameDelta) !== null && _canvasFrameDelta !== void 0 ? _canvasFrameDelta : 1000);
        if (!this._lastCanvasTime) {
            this._lastCanvasTime = timestamp;
        }
        // _lastCanvasTime = timestamp;
        this.ctx = this._originalCtx;
        this._canvasOptions.autoClear && this.clear(null);
        if (this._canvasOptions.autoPushPop) {
            this.push();
          this._canvasOptions.centered && (this._canvasCurrentlyCentered = true) && this.translateCenter();
          this._canvasOptions.autoCompensate && compensateCanvas();
        }
        this.draw(timestamp);
        this._canvasOptions.autoPushPop && this.pop();
        this._canvasCurrentlyCentered = false;
        this._lastCanvasTime = timestamp;
        if (this._canvasOptions.drawAndStop) {
          return;
        }
        this._anim = requestAnimationFrame(this._draw);
    }

    _resizeCanvas = (specificCanvas) => {
        this.width = this.canvasSize.x = this.canvas.width = this._canvasOptions.width !== null ? this._canvasOptions.width : window.innerWidth;
        this.height = this.canvasSize.y = this.canvas.height = this._canvasOptions.height !== null ? this._canvasOptions.height : window.innerHeight;
        this.width_quarter = this.canvasSize.quarter.x = (this.canvasSize.half.x = this.width_half = this.width * HALF) * HALF;
        this.height_quarter = this.canvasSize.quarter.y = (this.canvasSize.half.y = this.height_half = this.height * HALF) * HALF;
      
        this.ctx.fillStyle = 'hsl(0, 0%, 100%)';
        this.ctx.strokeStyle = 'hsl(0, 0%, 100%)';
        if ('onResize' in window) {
          window.onResize();
        }
      }

      clear = (x, y, w, h) => {
        if (x !== undefined && typeof x === 'number') {
          this.ctx.clearRect(x, y, w, h);
        } else
        if (this._canvasOptions.centered && this._canvasCurrentlyCentered /*  && x !== null */) {
            this.ctx.clearRect(-this.width_half, -this.height_half, this.width, this.height);
          } else
        {
            this.ctx.clearRect(0, 0, this.width, this.height);
        }
      }

      hsl = (hue, sat, light, alpha = 1) => {
        if (typeof hue !== 'number') {
          if (Array.isArray(hue)) {
            [hue, sat, light, alpha = alpha] = hue;
          } else
          if ('h' in hue) {
            ({ h: hue, s: sat, l: light, a: alpha = alpha } = hue);
          }
        }
        hue = hue % 360;
        if (hue < 0) {
          hue += 360;
        }
        return `hsl(${hue} ${sat}% ${light}% / ${alpha})`;
      }

      push = () => {
        this.ctx.save();
      }
      pop = () => {
        this.ctx.restore();
      }
      
      translateCenter = (x = 0, y = 0) => {
        this.ctx.translate(this.width_half + x, this.height_half + y);
      }

      
    background = (a) => {
    this.push();
    if (typeof a !== 'number') {
        this.fillStyle(a);
    }
    if (this._canvasOptions.centered && this._canvasCurrentlyCentered) {
        this.ctx.fillRect(-this.width_half, -this.height_half, this.width, this.height);
    } else
    {
        this.ctx.fillRect(0, 0, this.width, this.height);
    }
    this.pop();
  }
  
  
  fillStyle = (...args) => {
    if (args.length === 1) {
      let a = args[0];
      if (typeof a === 'string' || a instanceof CanvasGradient || a instanceof CanvasPattern) {
        this.ctx.fillStyle = a;
      }
    }
    return this.ctx.fillStyle;
  }
  
    lineWidth = (w) => {
    if (typeof w === 'number') {
        this.ctx.lineWidth = w;
    }
    return this.ctx.lineWidth;
  }
  
  strokeStyle = (...args) => {
    if (args.length === 1) {
      let [a] = args;
      if (typeof a === 'string' || a instanceof CanvasGradient) {
        this.ctx.strokeStyle = a;
      } else
      if (typeof a === 'number') {
        this.lineWidth(a);
      }
    } else
    if (args.length === 2) {
        this.strokeStyle(args[0]);
        this.lineWidth(args[1]);
    }
    return this.ctx.strokeStyle;
  }
  
  
  stroke = (...args) => {
    let path;
    if (args.length) {
      if (args[0] instanceof Path2D) {
        path = args.shift();
      }
      this.strokeStyle(...args);
    }
    // Must branch the fill/stroke call as it
    // recognizes the undefined argument
    path ? this.ctx.stroke(path) : this.ctx.stroke();
  }

  
filter = (filterFuncs = 'none') => {
    this.ctx.filter = filterFuncs || 'none';
  }
  
 beginPath = () => {
    this.ctx.beginPath();
  }
  
  moveTo = (x, y) => {
    if (typeof x === 'number') {
        this.ctx.moveTo(x, y);
    } else
    if (isVectorish(x)) {
        this.ctx.moveTo(x.x, x.y);
    }
  }
  
  lineTo = (x, y) => {
    if (typeof x === 'number') {
        this.ctx.lineTo(x, y);
    } else
    if (isVectorish(x)) {
        this.ctx.lineTo(x.x, x.y);
    }
  }
  
  map = (n, a, b, c, d) => {
    return (n - a) * (d - c) / (b - a) + c;
  }
  
  
  cos = (input, mult = 1, add = 0) => {
    return Math.cos(input % TAU) * mult;
  }
  
  sin = (input, mult = 1, add = 0) => {
    return Math.sin(input % TAU) * mult + add;
  }
  
  draw = (e) => {

    if (!this.ctx) return;

    let width = canvas.width;
    let height = canvas.height;
    let width_half = width / 2;
    let height_half = height / 2;
    let THIRD = 1 / 3;
    let TWO_THIRDS = 2 / 3;
    let ONE = 1;

    let xCount = 35;
    let yCount = 80;
    let iXCount = 1 / (xCount - 1);
    let iYCount = 1 / (yCount - 1);
    let time = e * 0.000008;
    let timeStep = 0.01;

    this.ctx.clearRect(0, 0, width, height);

    let grad = this.ctx.createLinearGradient(-width, 0, width, height);
    let gradBg = this.ctx.createLinearGradient(-width, 0, width, height);
    let t = time % 1;
    let tSide = Math.floor(time % 2) === 0;
    let colorA = `hsla(9, 66%, 47%, 1)`;
    let colorB = `hsla(240, 60%, 36%, 1)`;
    let colorC = `hsla(287, 47%, 19%,  1)`;
    

    grad.addColorStop(this.map(t, 0, 1, THIRD, ZERO), colorA);
    grad.addColorStop(this.map(t, 0, 1, TWO_THIRDS, THIRD), colorB);
    grad.addColorStop(this.map(t, 0, 1, ONE, TWO_THIRDS), colorC);
    gradBg.addColorStop(this.map(t, 0, 1, THIRD, ZERO), `hsla(9, 66%, 47%, 0.3)`);
    gradBg.addColorStop(this.map(t, 0, 1, TWO_THIRDS, THIRD), `hsla(240, 60%, 36%, 0.3)`);
    gradBg.addColorStop(this.map(t, 0, 1, ONE, TWO_THIRDS), `hsla(287, 47%, 19%, 0.3)`);
    this.background(gradBg);
    this.ctx.globalAlpha = this.map(this.cos(time) < 0 ? 0.15 : 0.3);
    this.ctx.fillStyle = `hsla(0, 0%, 0%, 1)`;
    this.ctx.globalAlpha = 1;

    this.ctx.beginPath();
    for (let j = 0; j < yCount; j++) {
        let tj = j * iYCount;
        let c = Math.cos(tj * TAU + time) * 0.1;
        for (let i = 0; i < xCount; i++) {
            let t = i * iXCount;
            let n = this.noise.noise3D(t, time, c);
            let y = n * height_half;
            let x = t * (width + 20) - width_half - 10;
            if (i === 0) {
                this.ctx.moveTo(x, y);
            } else {
                this.ctx.lineTo(x, y);
            }
        }
        time += timeStep;
    }
    this.ctx.globalCompositeOperation = 'lighter';
    this.ctx.filter = 'blur(1px)';
    this.ctx.strokeStyle = grad;
    this.ctx.lineWidth = 2;
    this.ctx.stroke();
    this.ctx.filter = 'blur(2px)';
    this.ctx.strokeStyle = `hsl(0, 0%, 100%, 1)`;
    this.ctx.lineWidth = 1;
};

    render() {
        return <canvas id="canvas" />;
    }
}

export default BackgroundWave;
