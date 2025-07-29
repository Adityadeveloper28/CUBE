import React, { useState } from "react";
import { Copy, Check } from "lucide-react";

function Cuboid() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [copied, setCopied] = useState(false);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const rotateX = deltaX * 0.2;
    const rotateY = deltaY * 0.2;
    setRotation({ x: rotateX, y: rotateY });
  };

  // Manual rotation functions
  const rotateUp = () => {
    setRotation((prev) => ({ ...prev, x: prev.x - 30 }));
  };

  const rotateDown = () => {
    setRotation((prev) => ({ ...prev, x: prev.x + 30 }));
  };

  const rotateLeft = () => {
    setRotation((prev) => ({ ...prev, y: prev.y - 30 }));
  };

  const rotateRight = () => {
    setRotation((prev) => ({ ...prev, y: prev.y + 30 }));
  };

  const resetRotation = () => {
    setRotation({ x: 0, y: 0 });
  };

  const copyToClipboard = async () => {
    const codeText = `import React, { useState } from "react";

function Cuboid() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const rotateX = deltaX * 0.2;
    const rotateY = deltaY * 0.2;
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="relative w-60 h-40"
        style={{
          transformStyle: "preserve-3d",
          transform: \`rotateX(\${rotation.x}deg) rotateY(\${rotation.y}deg)\`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Cuboid faces with mirror-like appearance */}
      </div>
    </div>
  );
}

export default Cuboid;`;

    try {
      await navigator.clipboard.writeText(codeText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
  };

  return (
    <>
      <div
        className="flex items-center relative justify-center h-screen text-2xl font-bold text-white bg-black border-t border-gray-300"
        style={{ perspective: "800px" }}
      >
        <div
          className="relative flex w-full h-[400px] items-center justify-center border border-gray-300"
          onMouseMove={handleMouseMove}
        >
          {/* Cuboid */}
          <div
            className="relative w-60 h-40"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
              transition: "transform 0.1s linear",
            }}
          >
            {/* Front */}
            <div
              className="absolute w-60 h-40 flex items-center justify-center text-white border border-white"
              style={{ 
                transform: "translateZ(80px)",
                background: "linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1d4ed8 100%)",
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.2), 0 0 20px rgba(59,130,246,0.3)"
              }}
            >
              front
            </div>

            {/* Back */}
            <div
              className="absolute w-60 h-40 flex items-center justify-center text-black border border-white"
              style={{ 
                transform: "rotateY(180deg) translateZ(80px)",
                background: "linear-gradient(135deg, #f97316 0%, #ea580c 50%, #dc2626 100%)",
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.2), 0 0 20px rgba(249,115,22,0.3)"
              }}
            >
              back
            </div>

            {/* Top */}
            <div
              className="absolute w-60 h-40 flex items-center justify-center text-black border border-white"
              style={{ 
                transform: "rotateX(90deg) translateZ(80px)",
                background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #0e7490 100%)",
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.2), 0 0 20px rgba(6,182,212,0.3)"
              }}
            >
              top
            </div>

            {/* Bottom */}
            <div
              className="absolute w-60 h-40 flex items-center justify-center text-white border border-white"
              style={{ 
                transform: "rotateX(-90deg) translateZ(80px)",
                background: "linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #b91c1c 100%)",
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.2), 0 0 20px rgba(239,68,68,0.3)"
              }}
            >
              bottom
            </div>

            {/* Left */}
            <div
              className="absolute w-40 h-40 flex items-center justify-center text-black border border-white"
              style={{ 
                transform: "rotateY(-90deg) translateZ(80px)",
                background: "linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)",
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.2), 0 0 20px rgba(251,191,36,0.3)"
              }}
            >
              left
            </div>

            {/* Right */}
            <div
              className="absolute w-40 h-40 flex items-center justify-center text-white border border-white"
              style={{ 
                transform: "rotateY(90deg) translateZ(160px)",
                background: "linear-gradient(135deg, #10b981 0%, #059669 50%, #047857 100%)",
                boxShadow: "inset 0 0 20px rgba(255,255,255,0.2), 0 0 20px rgba(16,185,129,0.3)"
              }}
            >
              right
            </div>
          </div>
        </div>

        {/* Control Buttons */}
        <div className="absolute bottom-50 right-4 bg-gray-950 p-5 rounded-full border-white border">
          <div className="flex flex-col items-center space-y-2">
            {/* Up Button */}
            <button
              onClick={rotateUp}
              className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded border border-white transition-colors duration-200"
              title="Rotate Up"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 15l7-7 7 7"
                />
              </svg>
            </button>

            <div className="flex items-center space-x-2">
              {/* Left Button */}
              <button
                onClick={rotateLeft}
                className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded border border-white transition-colors duration-200"
                title="Rotate Left"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Reset Button */}
              <button
                onClick={resetRotation}
                className="bg-yellow-500 hover:bg-yellow-400 text-black p-3 rounded border border-white transition-colors duration-200"
                title="Reset"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
              </button>

              {/* Right Button */}
              <button
                onClick={rotateRight}
                className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded border border-white transition-colors duration-200"
                title="Rotate Right"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>

            {/* Down Button */}
            <button
              onClick={rotateDown}
              className="bg-blue-600 hover:bg-blue-500 text-white p-3 rounded border border-white transition-colors duration-200"
              title="Rotate Down"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Code display section - macOS style */}
      <div className="max-w-screen mx-auto bg-gray-900 rounded-lg border border-gray-700 shadow-2xl">
        {/* macOS window header */}
        <div className="flex items-center justify-between bg-gray-800 px-4 py-3 rounded-t-lg border-b border-gray-600">
          <div className="flex items-center space-x-2">
            {/* macOS traffic lights */}
            <div className="flex space-x-2">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            </div>
            <span className="ml-4 text-gray-300 text-sm font-medium">Cuboid.jsx</span>
          </div>
          
          <button
            onClick={copyToClipboard}
            className="flex items-center space-x-2 px-3 py-1 bg-blue-600 hover:bg-blue-500 text-white rounded-md transition-colors duration-200 text-sm"
            title="Copy code"
          >
            {copied ? (
              <>
                <Check size={16} />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={16} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>

        {/* Code content */}
        <div className="bg-black rounded-b-lg overflow-hidden">
          <pre className="p-4 overflow-x-auto text-sm">
            <code className="text-green-400 font-mono">
              {`import React, { useState } from "react";

function Cuboid() {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const deltaX = clientX - centerX;
    const deltaY = clientY - centerY;
    const rotateX = deltaX * 0.2;
    const rotateY = deltaY * 0.2;
    setRotation({ x: rotateX, y: rotateY });
  };

  return (
    <div
      className="flex items-center justify-center h-screen"
      style={{ perspective: "800px" }}
      onMouseMove={handleMouseMove}
    >
      <div
        className="relative w-60 h-40"
        style={{
          transformStyle: "preserve-3d",
          transform: \`rotateX(\${rotation.x}deg) rotateY(\${rotation.y}deg)\`,
          transition: "transform 0.1s linear",
        }}
      >
        {/* Cuboid faces with mirror-like appearance */}
      </div>
    </div>
  );
}

export default Cuboid;`}
            </code>
          </pre>
        </div>
      </div>
    </>
  );
}

export default Cuboid;