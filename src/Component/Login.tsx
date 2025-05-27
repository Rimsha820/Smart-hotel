import type { FormEvent } from "react";
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

// Image imports
import img1 from "../assets/login1.jpg";
import img2 from "../assets/login2.jpg";
import img3 from "../assets/login3.jpg";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [img1, img2, img3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLogin = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedUser = localStorage.getItem("user");
    if (!storedUser) {
      alert("No user found, please sign up first.");
      return;
    }

    const user = JSON.parse(storedUser);

    if (email === user.email && password === user.password) {
      navigate("/home");
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left: Image Slider */}
      <div className="w-full md:w-1/2">
        <img
          src={images[currentImageIndex]}
          alt="Login visual"
          className="w-full h-[300px] md:h-screen object-cover transition duration-700"
        />
      </div>

      {/* Right: Login Form */}
      <div className="w-full md:w-1/2 flex items-center justify-center p-6 bg-gray-100">
        <form
          onSubmit={handleLogin}
          className="bg-white w-full max-w-md p-6 sm:p-8 md:p-10 rounded-lg shadow-xl"
        >
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-black mb-2">
            Smart Hotel Keys and Guide System
          </h1>

          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center text-blue-700">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Login
          </button>

          <p className="mt-5 text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline font-medium">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
