import { Menu, Avatar, Switch } from "@mantine/core";
import { BiMessageRounded } from "react-icons/bi";
import { HiOutlineDocumentText } from "react-icons/hi";
import { IoLogOutOutline } from "react-icons/io5";
import { FiMoon } from "react-icons/fi";
import ProfilePhoto from "../../assets/profilePhoto.png";
import { FaRegUserCircle } from "react-icons/fa";
import { useState } from "react";
import { LuSunMedium } from "react-icons/lu";
import { Link } from "react-router-dom";

export const ProfileMenu = () => {
  const [openMenuDropdown, setOpenMenuDropdown] = useState(false);
  const [themeChecked, setThemeChecked] = useState(false);

  return (
    <Menu
      shadow="md"
      width={200}
      opened={openMenuDropdown}
      onChange={setOpenMenuDropdown}
    >
      {/* Profile */}
      <Menu.Target>
        <div className="flex items-center gap-2 cursor-pointer">
          <p>Marshal</p>
          <Avatar src={ProfilePhoto} alt="ProfilePhoto" />
        </div>
      </Menu.Target>

      <Menu.Dropdown onChange={() => setOpenMenuDropdown(true)}>
        <Link to="/profile">
          <Menu.Item leftSection={<FaRegUserCircle size={14} />}>
            Profile
          </Menu.Item>
        </Link>
        <Menu.Item leftSection={<BiMessageRounded size={14} />}>
          Messages
        </Menu.Item>
        <Menu.Item leftSection={<HiOutlineDocumentText size={14} />}>
          Resume
        </Menu.Item>
        <Menu.Item
          leftSection={<FiMoon size={14} />}
          rightSection={
            <Switch
              size="md"
              color="dark.4"
              onLabel={<LuSunMedium className="text-blue-400 text-[14px]" />}
              offLabel={<FiMoon className="text-bright-sun-400 text-[14px]" />}
              checked={themeChecked}
              onChange={(event) => setThemeChecked(event.currentTarget.checked)}
            />
          }
        >
          Dark Mode
        </Menu.Item>

        <Menu.Divider />

        <Menu.Item color="red" leftSection={<IoLogOutOutline size={14} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};
