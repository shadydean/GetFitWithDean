import React, { useState } from "react";

const Register = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={`relative w-full h-screen ${isModalOpen ? "bg-gray-800 bg-opacity-60" : ""}`}>
      {isModalOpen && (
        <div className="fixed inset-0 flex justify-center items-center">
        <div className="bg-white w-4/5 h-4/5 rounded-lg shadow-lg flex overflow-hidden relative">
          <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: `url('https://img.freepik.com/free-vector/cute-man-lifting-barbell-gym-cartoon-vector-icon-illustration-people-sport-icon-concept-isolated_138676-6223.jpg')` }}></div>
      
          <div className="w-1/2 bg-gray-900 p-6 text-white flex flex-col justify-center relative">
            <button onClick={closeModal} className="absolute top-4 right-4 bg-gray-700 text-white p-2 rounded-full">
              Back to website -&gt;   
            </button>
            <h2 className="text-3xl font-semibold text-center mt-4 mb-2">Create an Account</h2>
            <p className="text-sm mb-4 text-center">
              Already have an account? <a href="#" className="text-blue-500 hover:text-blue-700">Sign in</a>
            </p>
            <form className="space-y-4">
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label className="block mb-2 text-sm">First Name</label>
                  <input type="text" placeholder="First name" className="w-full p-2 border border-gray-600 rounded-md bg-gray-800" />
                </div>
                <div className="w-1/2">
                  <label className="block mb-2 text-sm">Last Name</label>
                  <input type="text" placeholder="Last name" className="w-full p-2 border border-gray-600 rounded-md bg-gray-800" />
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm">Email</label>
                <input type="email" placeholder="Email" className="w-full p-2 border border-gray-600 rounded-md bg-gray-800" />
              </div>
              <div>
                <label className="block mb-2 text-sm">Password</label>
                <input type="password" placeholder="Enter your password" className="w-full p-2 border border-gray-600 rounded-md bg-gray-800" />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="form-checkbox h-4 w-4 text-indigo-600" />
                <label htmlFor="terms" className="text-sm">I agree to the Terms & Conditions</label>
              </div>
              <button type="submit" className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 rounded-md">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </div>
      
      )}
    </div>
  );
};

export default Register;
