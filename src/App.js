import { Link, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import OurSevices from "./OurSevices";

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  {/* Navigation links */}
  

  {/* Components */}
  <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
    <Routes>
      <Route  path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/ourservices" element={<OurSevices />} />
    </Routes>
  </div>
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Link style={{ margin: 8 }} to="/home">Home</Link>
    <Link style={{ margin: 8 }} to="/about">About Us</Link>
    <Link style={{ margin: '8px 16px 8px 8px' }} to="/ourservices">Our Services</Link>
    


  </div>
</div>
  );
}

export default App;
