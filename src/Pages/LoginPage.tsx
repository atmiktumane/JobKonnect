import {
  Button,
  LoadingOverlay,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import axios from "axios";
import { useState } from "react";
import { MdLockOutline, MdOutlineAlternateEmail } from "react-icons/md";
import { TbAsset } from "react-icons/tb";
import { Link, useNavigate } from "react-router-dom";
import { loginFormValidation } from "../Components/services/FormValidation";
import { FaArrowLeft } from "react-icons/fa";
import { useDisclosure } from "@mantine/hooks";
import { ResetPassword } from "../Components/SignUpLogin/ResetPassword";
import {
  errorNotification,
  successNotification,
} from "../Components/services/NotificationService";
import { useDispatch } from "react-redux";
import { setUser } from "../Slices/UserSlice";

export const LoginPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  // Redux Hook to update State
  const dispatch = useDispatch();

  // Initial value of input fields present in Login Form
  const form = {
    email: "",
    password: "",
  };

  // State to manage : input fields data
  const [loginData, setLoginData] = useState<{ [key: string]: string }>(form);

  // State to manage : validation error in input fields
  const [formError, setFormError] = useState<{ [key: string]: string }>(form);

  // Mantine ResetPassword Modal (Open/Close)
  const [opened, { open, close }] = useDisclosure(false);

  // State : to manage Loader
  const [loader, setLoader] = useState<boolean>(false);

  const navigate = useNavigate();

  // Save Login Data : onChange of input fields
  const onChangeHandleData = (e: any) => {
    // console.log(e.target);
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });

    setFormError({ ...formError, [name]: loginFormValidation(name, value) });
  };

  // Login Form Submit
  const submitLoginForm = async (e: any) => {
    e.preventDefault();

    // Check input validation onSubmit
    let valid = true;
    let newFormError: { [key: string]: string } = {};

    for (let key in loginData) {
      // console.log(key, " -- ", loginData[key]);
      newFormError[key] = loginFormValidation(key, loginData[key]);

      // if any input field is having validation error, then set valid = false
      if (newFormError[key]) valid = false;
    }

    // Set validation input error
    setFormError(newFormError);

    // Validation failed, Don't proceed further
    if (valid === false) return;

    // Show Loader while API Calling
    setLoader(true);

    try {
      // Login API call
      const response = await axios.post(
        `${apiUrl}/api/v1/users/login`,
        loginData
      );

      console.log("Login response : ", response.data);

      // Show Success Notification
      successNotification("Login Successfull", "Navigating to Home Page");

      // Navigate to Home page after 4 seconds
      setTimeout(() => {
        // Hide Loader
        setLoader(false);

        // Save response data in redux
        dispatch(setUser(response.data));

        // Navigate to Home Page
        navigate("/");
      }, 4000);
    } catch (error: any) {
      // Hide Loader
      setLoader(false);
      // console.log(error);
      if (axios.isAxiosError(error) && error.response) {
        // alert(error.response.data);

        // Show Error Notification
        errorNotification("Error", error.response.data);
      } else {
        console.error("An unexpected error occurred:", error);
      }
    }
  };

  return (
    <>
      <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
        <div className="w-[100vw] h-[100vh] flex relative">
          {/* Button : Navigate to Home Page */}
          <Link to="/" className="absolute left-6 top-4 inline-block my-4">
            <Button
              leftSection={<FaArrowLeft />}
              variant="light"
              color="brightSun.4"
            >
              Home
            </Button>
          </Link>

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
              onChange={onChangeHandleData}
              error={formError.email}
            />

            {/* Password Input */}
            <PasswordInput
              withAsterisk
              leftSection={<MdLockOutline />}
              label="Password"
              placeholder="Password"
              name="password"
              value={loginData.password}
              onChange={onChangeHandleData}
              error={formError.password}
            />

            {/* Login Button */}
            <Button onClick={submitLoginForm} autoContrast variant="filled">
              Login
            </Button>

            {/* Signup  */}
            <p className="text-center">
              Don't have an account ?{" "}
              <a href="/signup" className="text-bright-sun-400 hover:underline">
                Signup
              </a>
            </p>

            {/* Reset Password */}
            <button
              onClick={open}
              className="text-bright-sun-400 hover:underline"
            >
              Reset Password ?
            </button>
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

      {/* Open ResetPassword Modal */}
      <ResetPassword opened={opened} close={close} />

      {/* Loader */}
      <LoadingOverlay
        visible={loader}
        zIndex={1000}
        overlayProps={{ radius: "sm", blur: 2 }}
        loaderProps={{ color: "brightSun.4", type: "bars" }}
      />
    </>
  );
};
