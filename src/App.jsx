import React from "react";
import "./App.css";
import { GlobalStyles } from "./Styles/Global.styled";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import BookingPage from "./Pages/BookingPage/BookingPage";
import HomePage from "./Pages/HomePage/HomePage";
import Locations from "./components/Locations/Locations";
import LoginPage from "./Pages/LoginPage/LoginPage";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import ReservationsPage from "./Pages/ReservationsPage/ReservationsPage";
import PostBookingPage from "./Pages/PostBookingPage/PostBookingPage";
import UserListings from "./Pages/UserListings/UserListings";
import UpdateListingPage from "./Pages/UpdateListingPage/UpdateListingPage";

function AppContent() {
  const location = useLocation();
  const hiddenPaths = ["/login", "/register", "/post-booking", "/user-listings"];
  const hideLayout = hiddenPaths.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/"),
  );

  return (
    <div className="app-container">
      <GlobalStyles />
      {!hideLayout && <Header />}
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/locations" element={<Locations />} />
          <Route path="/booking/:propertyId" element={<BookingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/reservations" element={<ReservationsPage />} />
          <Route path="/post-booking" element={<PostBookingPage />} />
          <Route path="/user-listings" element={<UserListings />} />
          <Route path="/user-listings/:id" element={<UpdateListingPage />} />
        </Routes>
      </div>
      {!hideLayout && <Footer />}
    </div>
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
