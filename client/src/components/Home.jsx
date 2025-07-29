import React, { useState, useEffect } from "react";

const Home = () => {
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  // Auto-rotate left to right
  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => ({ ...prev, y: prev.y + 1 }));
    }, 50); // Adjust speed by changing interval

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home-page bg-black min-h-screen text-white">
      <section className="bg-black text-white py-20 border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6 text-white">Welcome to Our Platform</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">Build amazing applications with modern React and cutting-edge technologies.</p>
          
          {/* 3D Cone Display */}
          <div className="flex justify-center mb-8" style={{ perspective: "800px" }}>
            <div
              className="relative w-40 h-40"
              style={{
                transformStyle: "preserve-3d",
                transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                transition: "transform 0.1s linear",
              }}
            >
              {/* Cone Body - Using multiple sections to create cone shape */}
              {Array.from({ length: 8 }, (_, i) => {
                const angle = (360 / 8) * i;
                const scale = 1 - i * 0.1;
                return (
                  <div
                    key={i}
                    className="absolute border border-white "
                    style={{
                      width: `${160 * scale}px`,
                      height: "20px",
                      left: "50%",
                      top: `${i * 20}px`,
                      transform: `translateX(-50%) rotateY(${angle}deg) translateZ(${
                        80 * scale
                      }px)`,
                      background: `linear-gradient(135deg, hsl(${
                        220 + i * 10
                      }, 70%, ${60 - i * 5}%) 0%, hsl(${220 + i * 10}, 70%, ${
                        40 - i * 3
                      }%) 100%)`,
                      boxShadow:
                        "inset 0 0 10px rgba(255,255,255,0.2), 0 0 10px rgba(59,130,246,0.3)",
                    }}
                  />
                );
              })}

              <div
                className="absolute border border-white"
                style={{
                  width: "50px",
                  height: "50px",
                  left: "50%",
                  top: "50%",
                  transform: "translateX(-50%) translateY(-50%) translateZ(25px)",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #1e40af 50%, #1d4ed8 100%)",
                  boxShadow: "inset 0 0 15px rgba(255,255,255,0.2)",
                }}
              />

              {/* Back face */}
              <div
                className="absolute border border-white"
                style={{
                  width: "50px",
                  height: "50px",
                  left: "50%",
                  top: "50%",
                  transform:
                    "translateX(-50%) translateY(-50%) translateZ(-25px) rotateY(180deg)",
                  background:
                    "linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e3a8a 100%)",
                  boxShadow: "inset 0 0 15px rgba(255,255,255,0.2)",
                }}
              />

              {/* Right face */}
              <div
                className="absolute border border-white"
                style={{
                  width: "50px",
                  height: "50px",
                  left: "50%",
                  top: "50%",
                  transform:
                    "translateX(-50%) translateY(-50%) rotateY(90deg) translateZ(25px)",
                  background:
                    "linear-gradient(135deg, #1d4ed8 0%, #1e3a8a 50%, #312e81 100%)",
                  boxShadow: "inset 0 0 15px rgba(255,255,255,0.2)",
                }}
              />

              {/* Left face */}
              <div
                className="absolute border border-white"
                style={{
                  width: "50px",
                  height: "50px",
                  left: "50%",
                  top: "50%",
                  transform:
                    "translateX(-50%) translateY(-50%) rotateY(-90deg) translateZ(25px)",
                  background:
                    "linear-gradient(135deg, #1e3a8a 0%, #312e81 50%, #1e1b4b 100%)",
                  boxShadow: "inset 0 0 15px rgba(255,255,255,0.2)",
                }}
              />

              {/* Top face */}
              <div
                className="absolute border border-white"
                style={{
                  width: "50px",
                  height: "50px",
                  left: "50%",
                  top: "50%",
                  transform:
                    "translateX(-50%) translateY(-50%) rotateX(90deg) translateZ(25px)",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #2563eb 50%, #1d4ed8 100%)",
                  boxShadow: "inset 0 0 15px rgba(255,255,255,0.2)",
                }}
              />

              {/* Bottom face */}
              <div
                className="absolute border border-white"
                style={{
                  width: "50px",
                  height: "50px",
                  left: "50%",
                  top: "50%",
                  transform:
                    "translateX(-50%) translateY(-50%) rotateX(-90deg) translateZ(60px)",
                  background:
                    "linear-gradient(135deg, #312e81 0%, #1e1b4b 50%, #0f0f23 100%)",
                  boxShadow: "inset 0 0 15px rgba(255,255,255,0.2)",
                }}
              />
            </div>
          </div>

          <div className="space-x-4">
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold border border-white transition-colors">Learn More</button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-colors">Watch Demo</button>
          </div>
        </div>
      </section>
      
      <section className="py-16 bg-black border-t border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-950 p-6 rounded-lg shadow-lg border border-white hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">Fast Development</h3>
              <p className="text-gray-300">Build applications quickly with our modern toolchain and components.</p>
            </div>
            <div className="bg-gray-950 p-6 rounded-lg shadow-lg border border-white hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">Responsive Design</h3>
              <p className="text-gray-300">Create beautiful interfaces that work perfectly on all devices.</p>
            </div>
            <div className="bg-gray-950 p-6 rounded-lg shadow-lg border border-white hover:border-blue-500 transition-all duration-300 hover:shadow-xl">
              <h3 className="text-xl font-semibold mb-4 text-blue-500">Best Practices</h3>
              <p className="text-gray-300">Follow industry standards and best practices for maintainable code.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;