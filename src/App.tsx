import { Route, Routes } from "react-router-dom";
import ProjectPage from "@/pages/projects";
import BlogPage from "@/pages/blog";
import Resumepage from "@/pages/resume";
import HomePage from "@/pages/home";

function App() {
  return (
    <Routes>
      <Route element={<HomePage />} path="/" />
      <Route element={<ProjectPage />} path="/projects" />
      <Route element={<BlogPage />} path="/blog" />
      <Route element={<Resumepage />} path="/resume" />
    </Routes>
  );
}

export default App;
