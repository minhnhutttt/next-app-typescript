uniform vec2 uResolution;
    uniform float uSize;
    uniform vec3 uHoverPosition; // Vị trí chuột

    varying float vDistance;

    void main() {
        vec4 modelPosition = modelMatrix * vec4(position, 1.0);

        // Tính khoảng cách từ điểm đến uHoverPosition
        float distanceToHover = distance(modelPosition.xyz, uHoverPosition);

        // Hiệu ứng bung nhẹ: đẩy điểm ra xa nếu gần chuột
        float pushStrength = smoothstep(1.5, 0.0, distanceToHover); // Cường độ hiệu ứng
        vec3 normal = normalize(modelPosition.xyz - uHoverPosition); // Hướng pháp tuyến
        modelPosition.xyz += normal * pushStrength * 0.05; // Đẩy điểm ra xa

        // Chuyển đổi vị trí điểm sang không gian view và projection
        vec4 viewPosition = viewMatrix * modelPosition;
        vec4 projectedPosition = projectionMatrix * viewPosition;
        gl_Position = projectedPosition;

        // Point size
        gl_PointSize = uSize * uResolution.y;
        gl_PointSize *= (1.0 / -viewPosition.z);

        // Truyền khoảng cách đến fragment shader
        vDistance = distanceToHover;
    }