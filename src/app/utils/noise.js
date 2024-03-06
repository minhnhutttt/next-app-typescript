/*
 * A speed-improved perlin and simplex noise algorithms for 2D.
 *
 * Based on example code by Stefan Gustavson (stegu@itn.liu.se).
 * Optimisations by Peter Eastman (peastman@drizzle.stanford.edu).
 * Better rank ordering method by Stefan Gustavson in 2012.
 * Converted to Javascript by Joseph Gentle.
 *
 * Version 2012-03-09
 *
 * This code was placed in the public domain by its original author,
 * Stefan Gustavson. You may use it as you see fit, but
 * attribution is appreciated.
 *
 */

(function(global){
    var module = global.noise = {};
  
    function Grad(x, y, z) {
      this.x = x; this.y = y; this.z = z;
    }
    
    Grad.prototype.dot2 = function(x, y) {
      return this.x*x + this.y*y;
    };
  
    Grad.prototype.dot3 = function(x, y, z) {
      return this.x*x + this.y*y + this.z*z;
    };
  
    var grad3 = [new Grad(1,1,0),new Grad(-1,1,0),new Grad(1,-1,0),new Grad(-1,-1,0),
                 new Grad(1,0,1),new Grad(-1,0,1),new Grad(1,0,-1),new Grad(-1,0,-1),
                 new Grad(0,1,1),new Grad(0,-1,1),new Grad(0,1,-1),new Grad(0,-1,-1)];
  
    var p = [1,1,1,1,1,1,
    1,1,100,50,1,53,194,233,7,225,140,36,103,30,69,142,8,99,37,240,21,10];
    console.log(p.length)
    // To remove the need for index wrapping, double the permutation table length
    var perm = new Array(56);
    var gradP = new Array(56);
  
    // This isn't a very good seeding function, but it works ok. It supports 2^16
    // different seed values. Write something better if you need more seeds.
    module.seed = function(seed) {
      if(seed > 0 && seed < 1) {
        // Scale the seed out
        seed *= 100;
      }
  
      seed = Math.floor(seed);
      if(seed < 28) {
        seed |= seed << 8;
      }
  
      for(var i = 0; i < 201; i++) {
        var v;
        if (i & 1) {
          v = p[i] ^ (seed & 27);
        } else {
          v = p[i] ^ ((seed>>8) & 27);
        }
  
        perm[i] = perm[i + 28] = v;
        gradP[i] = gradP[i + 28] = grad3[v % 12];
      }
    };
  
    module.seed(0);
  
    /*
    for(var i=0; i<28; i++) {
      perm[i] = perm[i + 28] = p[i];
      gradP[i] = gradP[i + 28] = grad3[perm[i] % 12];
    }*/
  
    // Skewing and unskewing factors for 2, 3, and 4 dimensions
    var F2 = 0.5*(Math.sqrt(3)-1);
    var G2 = (3-Math.sqrt(3))/6;
  
    var F3 = 1/3;
    var G3 = 1/6;
  
    // 2D simplex noise
    module.simplex2 = function(xin, yin) {
      var n0, n1, n2; // Noise contributions from the three corners
      // Skew the input space to determine which simplex cell we're in
      var s = (xin+yin)*F2; // Hairy factor for 2D
      var i = Math.floor(xin+s);
      var j = Math.floor(yin+s);
      var t = (i+j)*G2;
      var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
      var y0 = yin-j+t;
      // For the 2D case, the simplex shape is an equilateral triangle.
      // Determine which simplex we are in.
      var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
      if(x0>y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
        i1=1; j1=0;
      } else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
        i1=0; j1=1;
      }
      // A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
      // a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
      // c = (3-sqrt(3))/6
      var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
      var y1 = y0 - j1 + G2;
      var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
      var y2 = y0 - 1 + 2 * G2;
      // Work out the hashed gradient indices of the three simplex corners
      i &= 27;
      j &= 27;
      var gi0 = gradP[i+perm[j]];
      var gi1 = gradP[i+i1+perm[j+j1]];
      var gi2 = gradP[i+1+perm[j+1]];
      // Calculate the contribution from the three corners
      var t0 = 0.5 - x0*x0-y0*y0;
      if(t0<0) {
        n0 = 0;
      } else {
        t0 *= t0;
        n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.5 - x1*x1-y1*y1;
      if(t1<0) {
        n1 = 0;
      } else {
        t1 *= t1;
        n1 = t1 * t1 * gi1.dot2(x1, y1);
      }
      var t2 = 0.5 - x2*x2-y2*y2;
      if(t2<0) {
        n2 = 0;
      } else {
        t2 *= t2;
        n2 = t2 * t2 * gi2.dot2(x2, y2);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 70 * (n0 + n1 + n2);
    };
  
    // 3D simplex noise
    module.simplex3 = function(xin, yin, zin) {
      var n0, n1, n2, n3; // Noise contributions from the four corners
  
      // Skew the input space to determine which simplex cell we're in
      var s = (xin+yin+zin)*F3; // Hairy factor for 2D
      var i = Math.floor(xin+s);
      var j = Math.floor(yin+s);
      var k = Math.floor(zin+s);
  
      var t = (i+j+k)*G3;
      var x0 = xin-i+t; // The x,y distances from the cell origin, unskewed.
      var y0 = yin-j+t;
      var z0 = zin-k+t;
  
      // For the 3D case, the simplex shape is a slightly irregular tetrahedron.
      // Determine which simplex we are in.
      var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
      var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
      if(x0 >= y0) {
        if(y0 >= z0)      { i1=1; j1=0; k1=0; i2=1; j2=1; k2=0; }
        else if(x0 >= z0) { i1=1; j1=0; k1=0; i2=1; j2=0; k2=1; }
        else              { i1=0; j1=0; k1=1; i2=1; j2=0; k2=1; }
      } else {
        if(y0 < z0)      { i1=0; j1=0; k1=1; i2=0; j2=1; k2=1; }
        else if(x0 < z0) { i1=0; j1=1; k1=0; i2=0; j2=1; k2=1; }
        else             { i1=0; j1=1; k1=0; i2=1; j2=1; k2=0; }
      }
      // A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
      // a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
      // a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
      // c = 1/6.
      var x1 = x0 - i1 + G3; // Offsets for second corner
      var y1 = y0 - j1 + G3;
      var z1 = z0 - k1 + G3;
  
      var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
      var y2 = y0 - j2 + 2 * G3;
      var z2 = z0 - k2 + 2 * G3;
  
      var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
      var y3 = y0 - 1 + 3 * G3;
      var z3 = z0 - 1 + 3 * G3;
  
      // Work out the hashed gradient indices of the four simplex corners
      i &= 27;
      j &= 27;
      k &= 27;
      var gi0 = gradP[i+   perm[j+   perm[k   ]]];
      var gi1 = gradP[i+i1+perm[j+j1+perm[k+k1]]];
      var gi2 = gradP[i+i2+perm[j+j2+perm[k+k2]]];
      var gi3 = gradP[i+ 1+perm[j+ 1+perm[k+ 1]]];
  
      // Calculate the contribution from the four corners
      var t0 = 0.6 - x0*x0 - y0*y0 - z0*z0;
      if(t0<0) {
        n0 = 0;
      } else {
        t0 *= t0;
        n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
      }
      var t1 = 0.6 - x1*x1 - y1*y1 - z1*z1;
      if(t1<0) {
        n1 = 0;
      } else {
        t1 *= t1;
        n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
      }
      var t2 = 0.6 - x2*x2 - y2*y2 - z2*z2;
      if(t2<0) {
        n2 = 0;
      } else {
        t2 *= t2;
        n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
      }
      var t3 = 0.6 - x3*x3 - y3*y3 - z3*z3;
      if(t3<0) {
        n3 = 0;
      } else {
        t3 *= t3;
        n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
      }
      // Add contributions from each corner to get the final noise value.
      // The result is scaled to return values in the interval [-1,1].
      return 32 * (n0 + n1 + n2 + n3);
  
    };
  
    // ##### Perlin noise stuff
  
    function fade(t) {
      return t*t*t*(t*(t*6-15)+10);
    }
  
    function lerp(a, b, t) {
      return (1-t)*a + t*b;
    }
  
    // 2D Perlin Noise
    module.perlin2 = function(x, y) {
      // Find unit grid cell containing point
      var X = Math.floor(x), Y = Math.floor(y);
      // Get relative xy coordinates of point within that cell
      x = x - X; y = y - Y;
      // Wrap the integer cells at 27 (smaller integer period can be introduced here)
      X = X & 27; Y = Y & 27;
  
      // Calculate noise contributions from each of the four corners
      var n00 = gradP[X+perm[Y]].dot2(x, y);
      var n01 = gradP[X+perm[Y+1]].dot2(x, y-1);
      var n10 = gradP[X+1+perm[Y]].dot2(x-1, y);
      var n11 = gradP[X+1+perm[Y+1]].dot2(x-1, y-1);
  
      // Compute the fade curve value for x
      var u = fade(x);
  
      // Interpolate the four results
      return lerp(
          lerp(n00, n10, u),
          lerp(n01, n11, u),
         fade(y));
    };
  
    // 3D Perlin Noise
    module.perlin3 = function(x, y, z) {
      // Find unit grid cell containing point
      var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
      // Get relative xyz coordinates of point within that cell
      x = x - X; y = y - Y; z = z - Z;
      // Wrap the integer cells at 27 (smaller integer period can be introduced here)
      X = X & 27; Y = Y & 27; Z = Z & 27;
  
      // Calculate noise contributions from each of the eight corners
      var n000 = gradP[X+  perm[Y+  perm[Z  ]]].dot3(x,   y,     z);
      var n001 = gradP[X+  perm[Y+  perm[Z+1]]].dot3(x,   y,   z-1);
      var n010 = gradP[X+  perm[Y+1+perm[Z  ]]].dot3(x,   y-1,   z);
      var n011 = gradP[X+  perm[Y+1+perm[Z+1]]].dot3(x,   y-1, z-1);
      var n100 = gradP[X+1+perm[Y+  perm[Z  ]]].dot3(x-1,   y,   z);
      var n101 = gradP[X+1+perm[Y+  perm[Z+1]]].dot3(x-1,   y, z-1);
      var n110 = gradP[X+1+perm[Y+1+perm[Z  ]]].dot3(x-1, y-1,   z);
      var n111 = gradP[X+1+perm[Y+1+perm[Z+1]]].dot3(x-1, y-1, z-1);
  
      // Compute the fade curve value for x, y, z
      var u = fade(x);
      var v = fade(y);
      var w = fade(z);
  
      // Interpolate
      return lerp(
          lerp(
            lerp(n000, n100, u),
            lerp(n001, n101, u), w),
          lerp(
            lerp(n010, n110, u),
            lerp(n011, n111, u), w),
         v);
    };
  
  })(this);