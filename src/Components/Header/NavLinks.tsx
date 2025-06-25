import { Link, useLocation } from "react-router-dom";

const NavLinks = () => {
  const links = [
    { name: "Find Job", url: "/find-job" },
    { name: "Find Talent", url: "/find-talent" },
    { name: "Post Job", url: "/post-job" },
    { name: "Posted Job", url: "/posted-job" },
  ];

  const location = useLocation();

  //   console.log("Location : ", location);

  const renderNavLinks = links.map((link) => (
    <div
      key={link.url}
      className={`h-full flex items-center ${
        location.pathname === link.url
          ? "border-t-[3px] border-bright-sun-300 text-bright-sun-300"
          : ""
      }`}
    >
      <Link to={link.url}>{link.name}</Link>
    </div>
  ));

  return (
    <div className="flex h-full items-center gap-5 text-mine-shaft-100">
      {renderNavLinks}
    </div>
  );
};

export default NavLinks;
