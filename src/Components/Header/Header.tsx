import { Button, Indicator } from "@mantine/core";
import { TbAsset, TbBell, TbSettings } from "react-icons/tb";
import NavLinks from "./NavLinks";
import { Link, useLocation } from "react-router-dom";
import { ProfileMenu } from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const location = useLocation();

  const user = useSelector((state: any) => state.user);
  return location.pathname !== "/signup" && location.pathname !== "/login" ? (
    <div className="font-['poppins'] w-full h-20 flex justify-between items-center px-6 bg-mine-shaft-950 text-white">
      {/* Logo */}
      <Link
        to="/home"
        className="flex items-center gap-1 text-bright-sun-400 cursor-pointer"
      >
        <TbAsset className="h-8 w-8" />
        <p className="text-2xl font-bold">JobKonnect</p>
      </Link>

      {/* Nav Menus */}
      <NavLinks />

      {/* Profile, Notification & Setting */}
      <div className="flex items-center gap-3">
        {user ? (
          <ProfileMenu />
        ) : (
          <Link to="/login">
            <Button variant="subtle" color="brightSun.4">
              Login
            </Button>
          </Link>
        )}

        {/* Settings */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <TbSettings className="text-2xl" />
        </div>

        {/* Notification */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          {/* Mantine Theme Color - "brightSun.4" */}
          <Indicator color="brightSun.4" size={8} offset={6} processing>
            <TbBell className="text-2xl" />
          </Indicator>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Header;
