import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/Routes"; // Ensure this matches your filename
import Login from "./pages/Login";

function App() {
  const [activeModal, setActiveModal] = useState(null); 
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const openModal = (modalType) => {
    setActiveModal(modalType);
  };

  const closeModal = () => {
    setActiveModal(null);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLoginClick={() => openModal("login")} />
      <div className={activeModal ? "blur" : ""}>
        <AppRoutes setIsLoggedIn={setIsLoggedIn} onLoginClick={() => openModal("login")} />
        <Footer />
      </div>
      {activeModal === "login" && (
        <Login 
          onClose={closeModal} 
          onRegisterClick={() => openModal("register")} 
          setIsLoggedIn={setIsLoggedIn} 
        />
      )}
      {activeModal === "register" && (
        <Register onClose={closeModal} onLoginClick={() => openModal("login")} />
      )}
    </Router>
  );
}

export default App;
