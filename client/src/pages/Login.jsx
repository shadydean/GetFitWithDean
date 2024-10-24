import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const handleSwitch = () =>{
    navigate("/")
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });
      localStorage.setItem("token", response.data.token);
      setIsLoggedIn(true); 
      navigate("/dashboard");
      console.log("Login successful:", response.data);
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("An error occurred. Please try again.");
      }
    }
  };

  return (
    <div className={`relative w-full h-screen bg-gray-800 bg-opacity-60`}>
      <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white w-4/5 h-4/5 rounded-lg shadow-lg flex overflow-hidden relative">
          
          <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/cute-man-lifting-barbell-gym-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated_138676-6223.jpg')` }}></div>

          <div className="w-1/2 bg-gray-900 p-6 text-white flex flex-col justify-center relative">
            <button onClick={handleSwitch} className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded-full">
                Back to website -&gt;
              </button>
            <h2 className="text-3xl font-semibold text-center mt-4 mb-2">Login</h2>
            {errorMessage && <p className="text-red-500 text-center">{errorMessage}</p>}
            <form className="space-y-4" onSubmit={handleLogin}>
              <div>
                <label className="block mb-2 text-sm">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border border-gray-600 rounded-md bg-gray-800"
                />
              </div>
              <div>
                <label className="block mb-2 text-sm">Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border border-gray-600 rounded-md bg-gray-800"
                />
              </div>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md">
                Login
              </button>
            </form>

            {/* Registration Prompt */}
            <div className="mt-4 text-center">
              <p className="text-sm">
                New user?{" "}
                <Link to="/register" className="text-indigo-400 hover:underline">
                  Register here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
