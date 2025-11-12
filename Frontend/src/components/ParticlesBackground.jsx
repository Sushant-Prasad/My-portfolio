import React, { useEffect, useRef } from "react";

function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");

    let particles = [];
    const particleCount = 80;
    const colors = [
      "rgba(255,255,255,0.8)",
      "rgba(173,216,230,0.6)",
      "rgba(0,219,222,0.5)"
    ];

    // Particle class represents each moving dot on the canvas
    class Particle {
      constructor() {
        // Random initial position and size
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.radius = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        // Random velocity in both X and Y directions
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
      }

      // Draws a single particle on the canvas
      draw() {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        context.shadowBlur = 10;
        context.shadowColor = this.color;
        context.fillStyle = this.color;
        context.fill();
        context.closePath();
      }

      // Updates the particle's position and redraws it
      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around the edges of the screen for continuous motion
        if (this.x < 0) this.x = canvas.width;
        if (this.x > canvas.width) this.x = 0;
        if (this.y < 0) this.y = canvas.height;
        if (this.y > canvas.height) this.y = 0;

        this.draw();
      }
    }

    // Creates the initial set of particles
    function createParticles() {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    }

    // Adjusts the canvas size when the window is resized
    function handleCanvasSize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      createParticles();
    }

    // Set up initial canvas size and particles
    handleCanvasSize();
    window.addEventListener("resize", handleCanvasSize);

    // Animation loop that updates and redraws all particles
    let animationId;
    function animate() {
      context.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      animationId = requestAnimationFrame(animate);
    }
    animate();

    // Cleanup when the component unmounts
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleCanvasSize);
    };
  }, []);

  // The canvas element is fixed behind all other content
  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-0"
    ></canvas>
  );
}

export default ParticlesBackground;
