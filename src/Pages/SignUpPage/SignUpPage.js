import React, { useState } from "react";
import BreadCrum from "../../Components/Common/BreadCrum";
import AuthInstruction from "../../Components/Common/AuthInstruction";
import logo from "../../Assets/logo.svg";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useRegisterUserMutation } from "../../Redux/authApi";

const SignUpPage = () => {
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const navigate = useNavigate();
  const [registerUser] = useRegisterUserMutation();

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
    if (e.target.name === "confirmPassword") {
      setConfirmPasswordError("");
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Password confirmation validation
    if (value.password !== value.confirmPassword) {
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      await registerUser(value).unwrap();
      toast.success("Registration successfully done");
      navigate("/login");
    } catch (err) {
      console.error("Failed to register:", err);
      toast.error("Registration failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p className="font-medium text-xl uppercase text-center tracking-[5px] py-6 mt-32">
        Sign Up
      </p>
      <div className="border border-gray-200 shadow-sm rounded w-full max-w-[800px] mx-auto py-6 grid grid-cols-2 gap-3">
        <div className="flex flex-col justify-center items-center">
          <img src={logo} alt="Logo" className="w-[120px] lg:w-[150px]" />
          <BreadCrum prev={"Home"} still={"Sign Up"} link={"/"} />
        </div>
        <form
          onSubmit={handleSignUp}
          className="bg-white border-0 border-l border-gray-200 px-8 pt-8 pb-8 mb-4">
          {["name", "email", "password", "confirmPassword"].map((field) => (
            <div className="mb-4" key={field}>
              <label
                className="block text-gray-700 text-[15px] font-semibold mb-1"
                htmlFor={field}>
                {field.charAt(0).toUpperCase() +
                  field.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <input
                className="appearance-none border rounded-[5px] w-full py-2 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline placeholder:text-[14px]"
                id={field}
                name={field}
                type={
                  field.includes("password")
                    ? "password"
                    : field.includes("confirmPassword")
                    ? "password"
                    : "text"
                }
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                value={value[field]}
                onChange={handleChange}
              />
            </div>
          ))}
          {confirmPasswordError && (
            <p className="text-red-500 text-sm mb-2">{confirmPasswordError}</p>
          )}
          <div className="flex flex-col items-center justify-center mt-5">
            <button
              className={`bg-[#0077B6] hover:bg-[#C5A4EB] text-white font-medium py-1.5 px-4 rounded-[5px] focus:outline-none focus:shadow-outline w-full text-[15px] ${
                loading ? "opacity-50 cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={loading}>
              {loading ? (
                <span className="loading loading-spinner loading-xs">
                  Loading
                </span>
              ) : (
                "Sign Up"
              )}
            </button>
            <AuthInstruction
              title={"Already have an account?"}
              link={"/login"}
              route_name={"Login"}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
