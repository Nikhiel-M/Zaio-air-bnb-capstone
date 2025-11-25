import "./App.css";
import { GlobalStyles } from "./Styles/Global.styled";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import BookingPage from "./components/BookingPage/BookingPage";
import HomePage from "./components/HomePage/HomePage";
import Locations from "./components/Locations/Locations";
import LoginPage from "./components/Login/LoginPage";

function AppContent() {
  const location = useLocation();
  const hiddenPaths = ["/login"];
  const hideLayout = hiddenPaths.some((p) => location.pathname === p || location.pathname.startsWith(p + "/"));

  return (
    <>
      <GlobalStyles />
      {!hideLayout && <Header />}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/booking/:propertyId" element={<BookingPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
