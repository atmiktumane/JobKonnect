import { Button, PasswordInput, TextInput } from "@mantine/core";
import { MdLockOutline, MdOutlineAlternateEmail } from "react-icons/md";
import { TbAsset } from "react-icons/tb";
import { Link } from "react-router-dom";

export const LoginPage = () => {
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
          />

          {/* Password Input */}
          <PasswordInput
            withAsterisk
            leftSection={<MdLockOutline />}
            label="Password"
            placeholder="Password"
          />

          {/* Login Button */}
          <Button autoContrast variant="filled">
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
