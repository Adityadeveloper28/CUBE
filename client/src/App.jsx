import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PublicLayout from "./layout/PublicLayout";
import PrivateLayout from "./layout/PrivateLayout";
import Home from "./components/Home";
import About from "./components/About";
import Demo from "./components/Demo";
import Dashboard from "./components/Dashboard";
import Cube from "./components/Cube";
import CubeManagement from "./components/CubeManagement";
import CubeSettings from "./components/CubeSettings";
import "./index.css";
import Cuboid from "./components/Cuboid";
import Cone from "./components/Cone";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="demo" element={<Demo />} />
          </Route>

          {/* Private Routes */}
          <Route path="/dashboard" element={<PrivateLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="cube" element={<Cube />} />
            <Route path="cube/management" element={<CubeManagement />} />
            <Route path="cuboid" element={<Cuboid />} />
            <Route path="cone" element={<Cone />} />
            <Route path="cube/settings" element={<CubeSettings />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
