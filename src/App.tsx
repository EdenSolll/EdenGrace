import { Route, Routes } from "react-router-dom";
import DocsPage from "@/pages/docs";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import HomePage from "@/pages/home";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<DocsPage />} path="/docs" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<AboutPage />} path="/about" />
    </Routes>
  );
}

export default App;
