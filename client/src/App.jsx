import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import AppRoutes from "./components/Routes"; 
import Login from "./pages/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <div>
        <AppRoutes setIsLoggedIn={setIsLoggedIn}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
