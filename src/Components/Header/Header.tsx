import { Avatar } from "@mantine/core";
import { TbAsset, TbBell, TbSettings } from "react-icons/tb";

const Header = () => {
  return (
    <div className="w-full h-20 flex justify-between items-center p-6 bg-slate-900 text-white">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <TbAsset className="h-8 w-8" />
        <p className="text-2xl font-bold">JobKonnect</p>
      </div>

      {/* Nav Menus */}
      <div className="flex items-center gap-5">
        <a href="">Find Job</a>
        <a href="">Find Talent</a>
        <a href="">Upload Job</a>
        <a href="">About Us</a>
      </div>

      {/* Profile, Notification & Setting */}
      <div className="flex items-center gap-3">
        {/* Profile */}
        <div className="flex items-center gap-1">
          <Avatar src="avatar.png" alt="it's me" />
          <p>Username</p>
        </div>

        {/* Settings */}
        <TbSettings className="text-2xl" />

        {/* Notification */}
        <TbBell className="text-2xl" />
      </div>
    </div>
  );
};

export default Header;
