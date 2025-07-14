import { Button, PasswordInput, TextInput } from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { MdLockOutline, MdOutlineAlternateEmail } from "react-icons/md";
import { TbAsset } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Save Login Data : onChange of input fields
  const handleChange = (e: any) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  // Login API
  const handleLoginSubmit = async (e: any) => {
    e.preventDefault();

    try {
      if (loginData.email === "" || loginData.password === "") {
        alert("All fields are mandatory");
        return;
      }

      // Login API call
      await axios.post(`${apiUrl}/api/v1/users/login`, loginData);

      // console.log(response);

      // Success Modal
      alert("User login is successfull !");

      // Navigate to Home page
      navigate("/");
    } catch (error: any) {
      // console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
      <div className="w-[100vw] h-[100vh] flex ">
        {/* Left */}
        <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
          <h6 className="text-lg font-semibold">Login to Account</h6>

          {/* Email Input */}
          <TextInput
            leftSection={<MdOutlineAlternateEmail />}
            withAsterisk
            label="Email"
            placeholder="Your email"
            name="email"
            value={loginData.email}
            onChange={handleChange}
          />

          {/* Password Input */}
          <PasswordInput
            withAsterisk
            leftSection={<MdLockOutline />}
            label="Password"
            placeholder="Password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
          />

          {/* Login Button */}
          <Button onClick={handleLoginSubmit} autoContrast variant="filled">
            Login
          </Button>

          {/* Signup  */}
          <p className="text-center">
            Don't have an account ?{" "}
            <a href="/signup" className="text-bright-sun-400 hover:underline">
              Signup
            </a>
          </p>
        </div>

        {/* Right */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-3 bg-mine-shaft-900 rounded-l-[200px]">
          {/* Logo */}
          <Link
            to="/home"
            className="flex items-center gap-1 text-bright-sun-400 cursor-pointer"
          >
            <TbAsset className="h-14 w-14" />
            <p className="text-5xl font-bold">JobKonnect</p>
          </Link>

          {/* Description */}
          <p className="text-lg font-semibold">Find the Job, Made for You</p>
        </div>
      </div>
    </div>
  );
};
