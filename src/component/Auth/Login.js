import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();



  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user, loading, error, isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      if(user.role === "SUPER_ADMIN"){
        navigate("/superAdminDashboard");
      }else{
        navigate("/home");
      }
    }
  }, [dispatch, error, isAuthenticated, navigate, user]);

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(loginUser({ email, password }));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-purple-300 via-white to-blue-300">
      <div className="bg-white bg-opacity-80 backdrop-blur-md p-8 rounded-2xl shadow-xl w-full max-w-md border border-gray-300">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-6">Sign In</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-white bg-opacity-50 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 bg-white bg-opacity-50 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-3 rounded-lg hover:bg-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;