import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import SuccessStories from "./Pages/SuccessStories";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="*" element={<ErrorPage />} /> {/* Catch-all for 404 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
