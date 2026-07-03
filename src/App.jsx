import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import ProjectsPage from "./pages/ProjectsPage";
import GalleryPage from "./pages/GalleryPage";
import ContactsPage from "./pages/ContactsPage";
import SuccessPage from "./pages/SuccessPage";
import NotFoundPage from "./pages/NotFoundPage";
import Footer from "./components/Footer";
import GalleryCategoryPage from "./pages/GalleryCategoryPage";
import ProjectsCategoryPage from "./pages/ProjectsCategoryPage";
import AboutPage from "./pages/AboutPage";
import ProjectDetailPage from "./pages/ProjectDetailPage";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <ScrollToTop />
      <Header lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/projects" element={<ProjectsPage lang={lang} />} />
        <Route path="/gallery" element={<GalleryPage lang={lang} />} />
        <Route path="/contacts" element={<ContactsPage lang={lang} />} />
        <Route path="/success" element={<SuccessPage lang={lang} />} />
        <Route path="*" element={<NotFoundPage lang={lang} />} />
        <Route path="/about" element={<AboutPage lang={lang} />} />
        <Route
          path="/projects/:category/:slug"
          element={<ProjectDetailPage lang={lang} />}
        />
        <Route
          path="/projects/:category"
          element={<ProjectsCategoryPage lang={lang} />}
        />
        <Route
          path="/gallery/:category"
          element={<GalleryCategoryPage lang={lang} />}
        />
      </Routes>
      <Footer lang={lang} />
    </div>
  );
}

export default App;
