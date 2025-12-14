import { useState } from "react";
import { loginUser } from "../firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await loginUser(email, password);
      navigate("/"); // redirect to homepage
    } catch (err) {
      setError("Invalid login details. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex justify-center items-center p-4">
      <div className="backdrop-blur-xl bg-white/20 shadow-2xl rounded-2xl p-10 w-full max-w-md border border-white/30">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Welcome Back 🌍
        </h2>

        {error && (
          <p className="text-red-300 text-center mb-3 bg-red-800/40 p-2 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleLogin} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-white/20 border border-white/40 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/20 border border-white/40 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold py-3 rounded-xl transition-all shadow-md"
          >
            Login
          </button>
        </form>

        <p className="text-center text-white/80 mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-yellow-300 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </div>
  );
}
