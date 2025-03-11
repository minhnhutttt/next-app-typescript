varying float vDistance;
    void main() {
    vec2 uv = gl_PointCoord;
    float distanceToCenter = length(uv - vec2(0.5));

    if(distanceToCenter > 0.5)
        discard;
        float intensity = smoothstep(0.0, 2.0, vDistance); // Mượt hiệu ứng
        vec4 color = mix(vec4(1.0, 0.7, 0.0, 1.0), vec4(0.1,0.1,0.1,1.0), intensity); // Trộn màu vàng
        gl_FragColor = vec4(color);

        #include <tonemapping_fragment>
        #include <colorspace_fragment>
    }