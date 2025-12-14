import { useState } from "react";
import { signupUser } from "../firebase/auth";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }
    try {
      await signupUser(email, password);
      navigate("/");
    } catch (err) {
      setError("Error creating account. Try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 to-cyan-600 flex justify-center items-center p-4">
      <div className="backdrop-blur-xl bg-white/10 shadow-xl rounded-2xl p-10 w-full max-w-md border border-white/20">
        
        <h2 className="text-3xl font-bold text-white mb-6 text-center">
          Create Your Journey ✈️
        </h2>

        {error && (
          <p className="text-red-300 text-center mb-3 bg-red-800/40 p-2 rounded-lg">
            {error}
          </p>
        )}

        <form onSubmit={handleSignup} className="space-y-5">
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-3 rounded-xl bg-white/20 border border-white/40 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-white/20 border border-white/40 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Confirm Password"
            className="w-full p-3 rounded-xl bg-white/20 border border-white/40 text-white placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-300"
            value={confirm}
            onChange={(e) => setConfirm(e.target.value)}
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-400 hover:bg-blue-500 text-gray-900 font-semibold py-3 rounded-xl transition-all shadow-md"
          >
            Create Account
          </button>
        </form>

        <p className="text-center text-white/80 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-300 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}
