import { useEffect, useRef } from 'react';

const BubbleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let bubbles = [];

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Bubble class
        class Bubble {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.radius = Math.random() * 6 + 2;
                this.speed = Math.random() * 1.5 + 0.5;
                this.opacity = Math.random() * 0.4 + 0.2;
                this.wobble = Math.random() * 2;
                this.wobbleSpeed = Math.random() * 0.05;
                // Random colors: blue, purple, cyan
                const colors = [
                    'rgba(59, 130, 246, ',    // blue-500
                    'rgba(147, 51, 234, ',    // purple-600
                    'rgba(6, 182, 212, ',     // cyan-500
                    'rgba(139, 92, 246, ',    // violet-500
                ];
                this.color = colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.y -= this.speed;
                this.wobble += this.wobbleSpeed;
                this.x += Math.sin(this.wobble) * 0.5;

                // Reset bubble when it goes off screen
                if (this.y + this.radius < 0) {
                    this.y = canvas.height + this.radius;
                    this.x = Math.random() * canvas.width;
                }
            }

            draw() {
                // Outer glow
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius + 3, 0, Math.PI * 2);
                ctx.fillStyle = `${this.color}${this.opacity * 0.3})`;
                ctx.fill();
                ctx.closePath();

                // Main bubble
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `${this.color}${this.opacity})`;
                ctx.fill();
                ctx.closePath();

                // Inner highlight
                ctx.beginPath();
                ctx.arc(this.x - this.radius * 0.3, this.y - this.radius * 0.3, this.radius * 0.4, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.6})`;
                ctx.fill();
                ctx.closePath();
            }
        }

        // Create bubbles
        const createBubbles = () => {
            const bubbleCount = Math.floor((canvas.width * canvas.height) / 15000);
            for (let i = 0; i < bubbleCount; i++) {
                bubbles.push(new Bubble());
            }
        };
        createBubbles();

        // Animation loop
        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            bubbles.forEach(bubble => {
                bubble.update();
                bubble.draw();
            });

            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        // Cleanup
        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.3 }}
        />
    );
};

export default BubbleBackground;
