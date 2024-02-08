"use client"
import React, { Component } from 'react';
const { noise } = require('@/app/utils/noise');
class Circle {
    constructor(options) {
        this.assign(options);

        return this;
    }

    create() {
        this.points = [];
        this.radius = (this.grow) ? 0 : this.radius;

        let angle = 0;
        let step = (Math.PI * 2) / this.segments;

        for (let i = 0; i < this.segments; i++) {
            let x = this.x + (Math.cos(angle) * this.radius);
            let y = this.y + (Math.sin(angle) * this.radius);

            this.points.push({ x, y, angle });

            angle += step;
        }

        return this;
    }

    update(x, y, endX) {
        this.x = x;
        this.y = y;

        if (this.grow) {
            this.radius = Math.max(0, this.maxRadius * (x / endX));
        }
    }

    updatePoint(p, tick, baseX, baseY) {
        p.x = Math.cos(p.angle);
        p.y = Math.sin(p.angle);

        let smoothness = 1;
        let nx = p.x * smoothness;
        let ny = p.y * smoothness;
        let radius = this.radius + this.getNoise(tick + nx, tick + ny);

        p.x *= radius;
        p.y *= radius;

        p.x += baseX;
        p.y += baseY;
    }

    getNoise(a, b) {
        const max = this.radius * 1.5;
        const n = noise.perlin2(a, b);

        // map between -1, 1
        return (n + 1) * (max + max) / 2 - max;
    }

    assign(options) {
        Object.assign(this, options);
        this.maxRadius = this.radius;

        this.reset();
    }

    reset() {
        this.create();
    }

    set color1(c1) {
        let rgb = hexToRgb(c1).join(', ');

        this._color1 = c1;
        this.rgb1 = `rgba(${rgb}, ${this.alpha})`;
    }

    set color2(c2) {
        let rgb = hexToRgb(c2).join(', ');

        this._color2 = c2;
        this.rgb2 = `rgba(${rgb}, ${this.alpha})`;
    }

    get color1() { return this._color1; }

    get color2() { return this._color2; }

    get rgba1() { return this.rgb1; }

    get rgba2() { return this.rgb2; }
}

    function hexToRgb(hex) {
        let shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    
        hex = hex.replace(shorthandRegex, (m, r, g, b) => {
            return r + r + g + g + b + b;
        });
    
        let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    
        return result ? [
            parseInt(result[1], 16),
            parseInt(result[2], 16),
            parseInt(result[3], 16)
        ] : null;
    }
class ServiceBackground extends Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.ctx = null;
        this.winWidth = null;
        this.winHeight = null;
        this.midX = null;
        this.midY = null;
        this.tick = null;
        this.rafId = null;
        this.circle = null;
        this.options = {
            segments: 1000,
            radius: 150,
            x: -100,
            y: null,
            grow: false,
            color1: '#F49BCD',
            color2: '#2F9999',
            alpha: 0.1,
            randomness: 0.005,
            lineWidth: 1.01
        };
        this.gui = null;
        this.noise = noise
    }

    componentDidMount() {
        this.ctx = this.canvasRef.current.getContext('2d');
        this.setupStage();
        this.options.y = this.midY;

        this.circle = new Circle(this.options);
        noise.seed(Math.random());
        this.redraw();
        this.loop();

        window.addEventListener('resize', this.handleResize);

    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize);
        cancelAnimationFrame(this.rafId);
    }

    assignColors = () => {
        this.circle.color1 = this.options.color1;
        this.circle.color2 = this.options.color2;
        this.circle.alpha = this.options.alpha;
    }

    setupStage = () => {
        this.winWidth = window.innerWidth;
        this.winHeight = window.innerHeight;

        this.midX = this.winWidth >> 1;
        this.midY = this.winHeight >> 1;

        this.tick = performance.now();

        this.ctx.clearRect(0, 0, this.winWidth, this.winHeight);

        this.ctx.canvas.width = this.winWidth;
        this.ctx.canvas.height = this.winHeight;
    }

    redraw = () => {
        this.setupStage();
        this.circle.assign(this.options);
    }

    loop = () => {
        this.tick += this.options.randomness;

        this.circle.update(this.circle.x + 1.5, this.midY + ((this.midY / 2) * noise.perlin2(this.tick * 0.75, this.tick)), this.winWidth);

        let currX = this.circle.x;
        let currY = this.circle.y;

        let grad = this.ctx.createLinearGradient(-this.circle.radius, currY, this.circle.radius, currY);
        grad.addColorStop(0, this.circle.rgba1);
        grad.addColorStop(1, this.circle.rgba2);

        this.ctx.strokeStyle = grad;
        this.ctx.lineWidth = this.options.lineWidth;

        this.ctx.save();
        this.ctx.translate(currX, currY);

        this.circle.points.forEach((point, index) => {
            this.ctx.beginPath();

            this.ctx.moveTo(point.x - currX, point.y - currY);

            this.circle.updatePoint(point, this.tick, currX, currY);

            this.ctx.lineTo(point.x - currX, point.y - currY);

            this.ctx.stroke();
            this.ctx.closePath();
        });

        this.ctx.restore();

        this.rafId = requestAnimationFrame(this.loop);
    }

    handleResize = () => {
        this.redraw();
    }

    render() {
        return (
            <canvas ref={this.canvasRef} />
        );
    }
}

export default ServiceBackground;
