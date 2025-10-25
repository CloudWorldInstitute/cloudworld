import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./Layouts/MainLayout";
import Home from "./Pages/Home";
import AboutPage from "./Pages/About";
import ErrorPage from "./Pages/ErrorPage";
import SuccessStories from "./Pages/SuccessStories";
import CourseDetails from "./components/CourseDetails";
import Contact from "./Pages/Contact";
import BlogSection from "./Pages/Blog";
import Login from "./admin/AdminLogin";
import UpcomingBatches from "./components/UpcomingBatches";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <Router>
<ScrollToTop/>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="AboutUs" element={<AboutPage />} />
          <Route path="/success-stories" element={<SuccessStories />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<BlogSection />} />
          <Route path="/admin" element={<Login />} />
          <Route path="/upcoming-batches" element={<UpcomingBatches />} />


          <Route path="*" element={<ErrorPage />} /> {/* Catch-all for 404 */}
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
