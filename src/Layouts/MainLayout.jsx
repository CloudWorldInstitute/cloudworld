import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <div >
      {/* Navbar stays at the top */}
      <Navbar />

      {/* Main content fills available space and scrolls if needed */}
      <main >
        <Outlet /> {/* Page content will render here */}
      </main>

      {/* Footer stays at bottom */}
      <Footer />
    </div>
  );
};

export default MainLayout;
