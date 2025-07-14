import {
  Button,
  Checkbox,
  Group,
  PasswordInput,
  Radio,
  TextInput,
} from "@mantine/core";
import { useState } from "react";
import { MdLockOutline, MdOutlineAlternateEmail } from "react-icons/md";
import { TbAsset } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export const SignupPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    role: "APPLICANT",
  });

  const navigate = useNavigate();

  // console.log(data);

  // Handle Data function -> save data onChange of input fields
  const handleData = (e: any) => {
    if (typeof e === "string") {
      // For Mantine Radio.Group which returns value directly
      setData((prevData) => ({
        ...prevData,
        role: e,
      }));
    } else {
      const { name, value } = e.target;
      setData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  // Submit Signup Form - Register API call
  const submitSignupForm = async (e: any) => {
    e.preventDefault();

    try {
      // mandatory validation
      if (data.name === "" || data.email === "" || data.password === "") {
        alert("Please fill mandatory fields !");
        return;
      }

      // Signup API Call
      await axios.post(`${apiUrl}/api/v1/users/register`, data);

      // Show Success Popup
      alert("User is successfully registered !");

      // Navigate to Login Page
      navigate("/login");
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
      <div className="w-[100vw] h-[100vh] flex ">
        {/* Left */}
        <div className="w-1/2 h-full flex flex-col items-center justify-center gap-3 bg-mine-shaft-900 rounded-r-[200px]">
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

        {/* Right */}
        <div className="w-1/2 flex flex-col justify-center px-20 gap-3">
          <h6 className="text-lg font-semibold">Create Account</h6>

          {/* Name Input */}
          <TextInput
            withAsterisk
            name="name"
            label="Full Name"
            placeholder="Your name"
            value={data.name}
            onChange={handleData}
          />

          {/* Email Input */}
          <TextInput
            leftSection={<MdOutlineAlternateEmail />}
            withAsterisk
            name="email"
            label="Email"
            placeholder="Your email"
            value={data.email}
            onChange={handleData}
          />

          {/* Password Input */}
          <PasswordInput
            withAsterisk
            name="password"
            leftSection={<MdLockOutline />}
            label="Password"
            placeholder="Password"
            value={data.password}
            onChange={handleData}
          />

          {/* Confirm Password Input */}
          <PasswordInput
            withAsterisk
            leftSection={<MdLockOutline />}
            label="Confirm Password"
            placeholder="Confirm Password"
          />

          {/* Role Radio Buttons */}
          <Radio.Group
            value={data.role}
            onChange={handleData}
            name="favoriteFramework"
            label="You are ?"
          >
            <Group>
              <Radio
                value="APPLICANT"
                label="Applicant"
                autoContrast
                className="px-6 py-3 border border-mine-shaft-800 hover:bg-mine-shaft-500/10 rounded-md has-[:checked]:bg-bright-sun-300/10 has-[:checked]:border-bright-sun-400/40"
              />
              <Radio
                value="EMPLOYER"
                label="Employer"
                autoContrast
                className="px-6 py-3 border border-mine-shaft-800 hover:bg-mine-shaft-500/10 rounded-md has-[:checked]:bg-bright-sun-300/10 has-[:checked]:border-bright-sun-400/40"
              />
            </Group>
          </Radio.Group>

          {/* Agree to Terms & Conditions */}
          <Checkbox
            autoContrast
            defaultChecked={false}
            label={
              <>
                I accept to
                <a href="" className="text-bright-sun-400">
                  {" "}
                  terms & conditions
                </a>
              </>
            }
          />

          {/* Signup Button */}
          <Button onClick={submitSignupForm} autoContrast variant="filled">
            Sign Up
          </Button>

          {/* Login  */}
          <p className="text-center">
            Already have an account ?{" "}
            <a href="/login" className="text-bright-sun-400 hover:underline">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};
