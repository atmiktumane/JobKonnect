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
import { signupFormValidation } from "../Components/services/FormValidation";
import { notifications } from "@mantine/notifications";

export const SignupPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // Initial values of Signup form inputs
  const form = {
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "APPLICANT",
  };

  // State to manage : data in input fields
  const [data, setData] = useState<{ [key: string]: string }>(form);

  // State to manage : validation errors in input fields
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);

  // Navigation variable
  const navigate = useNavigate();

  // console.log(formError);

  // Handle Data function -> save data onChange of input fields
  const onChangeHandleData = (e: any) => {
    // Role input field
    if (typeof e === "string") {
      // For Mantine Radio.Group which returns value directly
      setData({ ...data, role: e });
      return;
    }

    // Remaining Input fields
    // const { name, value } = e.target;
    let name = e.target.name;
    let value = e.target.value;

    setData({ ...data, [name]: value });

    // Validation Error checks
    setFormError({ ...formError, [name]: signupFormValidation(name, value) });

    console.log(name);

    // ConfirmPassword input field validation
    if (name === "confirmPassword") {
      if (data.password !== value) {
        setFormError({
          ...formError,
          [name]: "Passwords does not match.",
        });
      } else {
        setFormError({
          ...formError,
          [name]: "",
        });
      }
    }

    // Password input field validation
    if (name === "password" && data.confirmPassword !== "") {
      let err = "";
      if (data.confirmPassword !== value) err = "Passwords does not match.";
      else err = "";

      setFormError({
        ...formError,
        [name]: signupFormValidation(name, value),
        confirmPassword: err,
      });
    }
  };

  // Submit Signup Form - Register API call
  const submitSignupForm = async (e: any) => {
    e.preventDefault();

    // Check input validation onSubmit
    let valid = true;

    let newFormError: { [key: string]: string } = {};

    for (let key in data) {
      if (key === "role") continue;

      if (key !== "confirmPassword")
        newFormError[key] = signupFormValidation(key, data[key]);
      else if (data[key] !== data["password"])
        newFormError[key] = "Passwords does not match.";

      // if any input field is having validation error, then set valid = false
      if (newFormError[key]) valid = false;
    }

    // Set validation input error
    setFormError(newFormError);

    // Validation failed, Don't proceed further
    if (valid === false) return;

    try {
      // Signup API Call
      await axios.post(`${apiUrl}/api/v1/users/register`, data);

      // Show Success Notification
      notifications.show({
        title: "User is successfully registered",
        message: "Navigating to Login Page",
      });

      // Navigate to Login page after 4 seconds
      setTimeout(() => {
        navigate("/login");
      }, 4000);
    } catch (error: any) {
      if (axios.isAxiosError(error) && error.response) {
        // alert(error.response.data);

        // Show Error Notification
        notifications.show({
          color: "red.9",
          title: "Error",
          message: error.response.data,
        });
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
            onChange={onChangeHandleData}
            error={formError.name}
          />

          {/* Email Input */}
          <TextInput
            leftSection={<MdOutlineAlternateEmail />}
            withAsterisk
            name="email"
            label="Email"
            placeholder="Your email"
            value={data.email}
            onChange={onChangeHandleData}
            error={formError.email}
          />

          {/* Password Input */}
          <PasswordInput
            withAsterisk
            name="password"
            leftSection={<MdLockOutline />}
            label="Password"
            placeholder="Password"
            value={data.password}
            onChange={onChangeHandleData}
            error={formError.password}
          />

          {/* Confirm Password Input */}
          <PasswordInput
            withAsterisk
            name="confirmPassword"
            leftSection={<MdLockOutline />}
            label="Confirm Password"
            placeholder="Confirm Password"
            value={data.confirmPassword}
            onChange={onChangeHandleData}
            error={formError.confirmPassword}
          />

          {/* Role Radio Buttons */}
          <Radio.Group
            value={data.role}
            onChange={onChangeHandleData}
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
