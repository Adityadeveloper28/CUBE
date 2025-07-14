const Demo = () => {
  return (
    <div className="demo-page py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Live Demo</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">Experience our platform in action with interactive demonstrations.</p>
        </section>
        
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Interactive Components</h3>
              <div className="space-y-4 mb-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors">Primary Button</button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded transition-colors ml-2">Secondary Button</button>
                <input type="text" placeholder="Sample Input" className="w-full mt-2 px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <p className="text-gray-600">See how our components work together seamlessly.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Responsive Design</h3>
              <div className="mb-4">
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-lg text-center">
                  <div className="text-sm font-medium">Responsive Layout</div>
                </div>
              </div>
              <p className="text-gray-600">Our layouts adapt perfectly to any screen size.</p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Animation Effects</h3>
              <div className="mb-4">
                <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white p-4 rounded-lg text-center cursor-pointer transform hover:scale-105 transition-transform duration-200">
                  Hover me!
                </div>
              </div>
              <p className="text-gray-600">Smooth animations enhance user experience.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Demo;
