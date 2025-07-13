// import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
// import { TransitionGroup, CSSTransition } from "react-transition-group";
// // import Navbar from "../components/Nav";
// // import Footer from "../components/Footer";
// // import Home from "../components/Home";
// import NotFound from "../components/NotFound";

// function PageTransitionWrapper() {
//   const location = useLocation();
  
//   return (
//     <>
//       {/* <Navbar />
//       <TransitionGroup>
//         <CSSTransition
//           key={location.key}
//           timeout={300}
//           classNames="page"
//           unmountOnExit
//         >
//           <div className="page">
//             <Routes location={location}>
//               <Route path="/" element={<Home />} />
//               <Route path="*" element={<NotFound />} />
//             </Routes>
//           </div>
//         </CSSTransition>
//       </TransitionGroup>
//       <Footer /> */}
//     </>
//   );
// }

// function AppRouter() {
//   return (
//     <HashRouter>
//       <PageTransitionWrapper />
//     </HashRouter>
//   );
// }

// export default AppRouter;