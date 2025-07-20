import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import About from "../pages/About";

import NotFound from "../pages/NotFound";

function PageTransitionWrapper() {
  const location = useLocation();
  
  return (
    <>
      <Navbar />
          <div className="page">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/topics/phy" element={<div>Physics Topics</div>} />
              <Route path="/topics/chem" element={<div>Chemistry Topics</div>} />
              <Route path="/topics/math" element={<div>Mathematics Topics</div>} />
              <Route path="/topics/bio" element={<div>Biology Topics</div>} />
              <Route path="/topics/cs" element={<div>Computer Science Topics</div>} />
              <Route path="/contact" element={<div>Contact Page</div>} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
      <Footer />
    </>
  );
}

function AppRouter() {
  return (
    <HashRouter>
      <PageTransitionWrapper />
    </HashRouter>
  );
}

export default AppRouter;