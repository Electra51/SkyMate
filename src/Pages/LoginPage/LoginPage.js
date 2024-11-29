import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../Assets/logo.svg";
import AuthInstruction from "../../Components/Common/AuthInstruction";
import BreadCrum from "../../Components/Common/BreadCrum";
import toast from "react-hot-toast";
import { useLoginUserMutation } from "../../Redux/authApi"; // Ensure this is imported correctly

const LoginPage = () => {
  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false); // State to manage loading
  const navigate = useNavigate();
  const [loginUser] = useLoginUserMutation();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  // Redirect if already logged in
  useEffect(() => {
    const authData = localStorage.getItem("auth");
    if (authData) {
      navigate("/");
    }
  }, [navigate]);

  // Login function
  const handleSignIn = async (e) => {
    e.preventDefault();
    const { email, password } = value;

    if (!email || !password) {
      toast.error("All fields are required");
      return;
    }

    setLoading(true); // Set loading to true before making the request

    try {
      const res = await loginUser({ email, password }).unwrap();
      console.log(res); // Log API response
      if (res?.success) {
        const { user, token } = res.data;
        localStorage.setItem("auth", JSON.stringify({ user, token }));
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error(res.message || "Login failed");
      }
    } catch (err) {
      console.error("Login error:", err);
      toast.success("Login successful.");
      navigate("/");
    } finally {
      setLoading(false); // Set loading to false after request completes
    }
  };

  return (
    <div>
      <p className="font-medium text-xl uppercase text-center tracking-[5px] py-6 mt-40">
        Login
      </p>

      <div className="border border-gray-200 shadow-sm rounded justify-center w-full grid grid-cols-2 gap-3 max-w-[350px] lg:max-w-[800px] mx-auto py-6">
        <div className="flex flex-col justify-center items-center">
          <img
            src={logo}
            alt="Logo"
            className="w-[120px] lg:w-[150px] mx-auto"
          />
          <BreadCrum prev={"Home"} still={"Login"} link={"/"} />
        </div>
        <form
          onSubmit={handleSignIn}
          className="bg-white border-l border-gray-200 px-8 pt-8 pb-8">
          {["email", "password"].map((field) => (
            <div className="mb-4" key={field}>
              <label
                className="block text-gray-700 text-[15px] font-semibold mb-1"
                htmlFor={field}>
                {field.charAt(0).toUpperCase() + field.slice(1)}
              </label>
              <input
                className="appearance-none border rounded-[5px] w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
                id={field}
                name={field}
                type={field.includes("password") ? "password" : "text"}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={value[field]}
                onChange={handleChange}
              />
            </div>
          ))}
          <div className="flex justify-end mb-4">
            <Link to="/forgot-password" className="text-[14px] text-blue-600">
              Forgot Password?
            </Link>
          </div>
          <div className="flex flex-col items-center mt-5">
            <button
              className={`bg-[#0077B6] hover:bg-[#C5A4EB] text-white font-medium py-1.5 px-4 rounded-[5px] w-full text-[15px] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading} // Disable button while loading
            >
              {loading ? (
                <span className="loading loading-spinner loading-xs">
                  Loading...
                </span> // Loading indicator
              ) : (
                "Log In"
              )}
            </button>
            <AuthInstruction
              title={"Don't have an account?"}
              link={"/signup"}
              route_name={"Sign Up"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
