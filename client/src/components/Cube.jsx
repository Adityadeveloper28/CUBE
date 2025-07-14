import React, { useState } from "react";

function Cube() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e; // Get mouse position
    // Calculate rotation based on mouse position
    const centerX = window.innerWidth / 2; // Center of the screen
    const centerY = window.innerHeight / 2; // Center of the screen
    // Calculate the difference from the center
    const deltaX = clientX - centerX; // Difference in X
    // Calculate the difference in Y
    const deltaY = clientY - centerY;
    const rotateX = deltaX * 0.2; // Adjust sensitivity as needed ? //
    const rotateY = deltaY * 0.2;
    setRotate({ x: rotateX, y: rotateY }); // Update rotation state
  };

  return (
    <>
      <div
        className="flex items-center justify-center h-screen text-2xl font-bold text-white border border-gray-300 bg-gradient-to-r from-gray-800 via-15%   to-gray-900"
        style={{ perspective: "800px" }}
        onMouseMove={handleMouseMove}
      >
        <div
          className="relative w-40 h-40"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg)`,
            transition: "transform 0.1s linear",
          }}
        >
          {/* Front */}
          <div
            className="absolute w-40 h-40 flex items-center justify-center bg-gray-300"
            style={{ transform: "translateZ(80px)" }}
          >
            front
          </div>

          {/* Back */}
          <div
            className="absolute w-40 h-40 flex items-center justify-center bg-amber-300"
            style={{ transform: "rotateY(180deg) translateZ(80px)" }}
          >
            back
          </div>

          {/* Top */}
          <div
            className="absolute w-40 h-40 flex items-center justify-center bg-blue-500"
            style={{ transform: "rotateX(90deg) translateZ(80px)" }}
          >
            top
          </div>

          {/* Bottom */}
          <div
            className="absolute w-40 h-40 flex items-center justify-center bg-red-800"
            style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
          >
            bottom
          </div>

          {/* Left */}
          <div
            className="absolute w-40 h-40 flex items-center justify-center bg-yellow-400"
            style={{ transform: "rotateY(-90deg) translateZ(80px)" }}
          >
            left
          </div>

          {/* Right */}
          <div
            className="absolute w-40 h-40 flex items-center justify-center bg-slate-600"
            style={{ transform: "rotateY(90deg) translateZ(80px)" }}
          >
            right
          </div>
        </div>
      </div>

      {/* Code display section */}
      <div className="max-w-4xl mx-auto p-6 bg-gray-900 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold text-white mb-4">
          Cube Component Code
        </h2>
        <pre className="bg-black text-green-400 p-4 rounded overflow-x-auto text-sm">
          <code>{`import React, { useState } from "react";

function Cube() {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const rotateX = deltaX * 0.2;
    const rotateY = deltaY * 0.2;
    setRotate({ x: rotateX, y: rotateY });
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="relative w-40 h-40"
        style={{
          transformStyle: "preserve-3d",
          transform: \`rotateX(\${rotate.x}deg) rotateY(\${rotate.y}deg)\`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Front */}
        <div
          className="absolute w-40 h-40 flex items-center justify-center bg-gray-300"
          style={{ transform: "translateZ(80px)" }}
        >
          front
        </div>
        {/* Back */}
        <div
          className="absolute w-40 h-40 flex items-center justify-center bg-amber-300"
          style={{ transform: "rotateY(180deg) translateZ(80px)" }}
        >
          back
        </div>
        {/* Top */}
        <div
          className="absolute w-40 h-40 flex items-center justify-center bg-blue-500"
          style={{ transform: "rotateX(90deg) translateZ(80px)" }}
        >
            top
            </div>
        {/* Bottom */}
        <div
            className="absolute w-40 h-40 flex items-center justify-center bg-red-800"
            style={{ transform: "rotateX(-90deg) translateZ(80px)" }}
        >
            bottom
            </div>
        {/* Left */}
        <div

            className="absolute w-40 h-40 flex items-center justify-center bg-yellow-400"
            style={{ transform: "rotateY(-90deg) translateZ(80px)" }}
        >
            left
          </div>
        {/* Right */}
        <div
          className="absolute w-40 h-40 flex items-center justify-center bg-slate-600"
          style={{ transform: "rotateY(90deg) translateZ(80px)" }}
        >
          right
          </div>
      </div>
    </div>
  );
}

export default Cube;`}</code>
        </pre>
      </div>
    </>
  );
}

export default Cube;
