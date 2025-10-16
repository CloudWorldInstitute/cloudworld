import React from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import SuccessStories from "./Pages/SuccessStories";
import CourseDetails from "./components/CourseDetails";

const App = () => {
  return (

    <React.StrictMode>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />

            <Route path="*" element={<ErrorPage />} /> {/* Catch-all for 404 */}
          </Route>
        </Routes>

      </BrowserRouter>
    </React.StrictMode>

  );
};

export default App;
