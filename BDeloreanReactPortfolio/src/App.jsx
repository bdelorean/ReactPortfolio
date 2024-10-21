import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Pages/Home";
import Projects from "./Pages/Projects";
import Navigation from "./Pages/Navigation";
import Layout from "./components/Layout";
import ScrollToSection from "./components/ScrollToSection";
import "./App.css";
import Footer from "./components/Footer";
import DetailPage from "./Pages/DetailPage";

function App() {
  return (
    <div className="bg-custom-bg bg-cover bg-center bg-repeat-y  w-full flex flex-col">
      <BrowserRouter>
        <ScrollToSection />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/home" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/projects" element={<Projects />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            <Route
              path="/projectsdata/:projectsdataId"
              element={<DetailPage />}
            />
          </Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
