import React, { useEffect, useState } from "react";

const CustomCursor = () => {
  // Track cursor position (x, y) using state
  const [position, setPosition] = useState({ x: 0, y: 0 });

  // Update cursor position on mouse movement
  useEffect(() => {
    const move = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", move);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    // Outer wrapper positions the cursor div relative to the screen
    <div
      className="fixed top-0 left-0 pointer-events-none z-50"
      style={{
        // Center the cursor effect around the actual mouse point
        transform: `translate(${position.x - 40}px, ${position.y - 40}px)`,
      }}
    >
      {/* Inner glowing circle with gradient color and blur */}
      <div
        className="w-24 h-24 rounded-full transition-transform duration-150 ease-out 
        bg-gradient-to-r from-pink-500 to-blue-700 blur-3xl opacity-80"
      ></div>
    </div>
  );
};

export default CustomCursor;
