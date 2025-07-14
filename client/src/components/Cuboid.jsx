import React, { useState } from "react";

function Cuboid() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = e.clientX - centerX;
    const deltaY = e.clientY - centerY;

    setRotation({
      x: -deltaY * 0.2,
      y: deltaX * 0.2,
    });
  };
  return (
    <>
      <div
        className='className="flex items-center justify-center h-screen text-2xl font-bold text-white"
      style={{ perspective: "800px" }}

'
        onMouseMove={handleMouseMove}
      >
        <div
          className="relative w-60 h-40 border"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
            transition: "transform 0.1s linear",
          }}
        >
          <div
            className="absolute w-60 h-40 flex items-center justify-center bg-gray-300"
            style={{ transform: "translateZ(80px)" }}
          >
            front
          </div>
          <div
            className="absolute w-60 h-40 flex items-center justify-center bg-amber-300"
            style={{ transform: "rotateY(180deg) translateZ(80px)" }}
          >
            back
          </div>
          <div
            className="absolute w-60 h-40 flex items-center justify-center bg-blue-500"
            style={{ transform: "rotateX(90deg) translateZ(80px) " }}
          >
            top
          </div>
          <div
            className="absolute w-60 h-40 flex items-center justify-center bg-blue-500"
            style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
          >
            bottom
          </div>
          <div
            className="absolute w-40 h-40 flex items-center justify-center bg-blue-500"
            style={{ transform: "rotateY(-90deg)  translateZ(80px)" }}
          >
            left
          </div>
          <div
            className="absolute w-40 h-40 flex items-center justify-center bg-red-500"
            style={{ transform: "rotateY(90deg) translateZ(160px)" }}
          >
            right
          </div>
        </div>
      </div>
    </>
  );
}

export default Cuboid;
