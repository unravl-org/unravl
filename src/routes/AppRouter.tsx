import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../components/Nav";
import Footer from "../components/Footer";
import Home from "../components/Home";
import About from "../components/About";
import Courses from "../components/Courses";
import Contact from "../components/Contact";
import NotFound from "../components/NotFound";

function PageTransitionWrapper() {
  const location = useLocation();
  
  return (
    <>
      <Navbar />
          <div className="page flex-1">
            <Routes location={location}>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/contact" element={<Contact />} />
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