import { FaInstagram, FaRegPaperPlane } from "react-icons/fa";
import { TbAsset, TbBrandYoutube } from "react-icons/tb";
import { footerLinks } from "../../Data/Data";

export const Footer = () => {
  return (
    <div className="bg-mine-shaft-950 font-['poppins']">
      <div className="px-[50px] lg:px-[80px] py-8 flex flex-col items-center gap-10 border-b-[0.5px] border-mine-shaft-100">
        <div className="w-full flex items-start justify-between gap-5 ">
          {/* Col 1 */}
          <div className="w-1/4 flex flex-col gap-4">
            {/* row 1 */}
            <div className="flex items-center gap-1 text-bright-sun-400">
              {/* Logo */}
              <TbAsset className="text-2xl" />
              {/* ProjectName */}
              <h2 className="text-lg font-semibold">JobKonnect</h2>
            </div>

            <p className="text-xs text-mine-shaft-300">
              Job portal with user profiles, skill updates, certifications, work
              experience and admin job postings.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {/* Instagram */}
              <div className="w-fit bg-mine-shaft-800 rounded-full p-2 text-bright-sun-400 text-lg">
                <FaInstagram />
              </div>

              {/* Mail */}
              <div className="w-fit bg-mine-shaft-800 rounded-full p-2 text-bright-sun-400 text-md">
                <FaRegPaperPlane />
              </div>

              {/* Youtub */}
              <div className="w-fit bg-mine-shaft-800 rounded-full p-2 text-bright-sun-400 text-lg">
                <TbBrandYoutube />
              </div>
            </div>
          </div>

          {footerLinks.map((item, index) => (
            // {/* Dynamic Column */}
            <div key={index} className="w-1/4 flex justify-end">
              <div className="flex flex-col gap-4">
                {/* row 1 */}
                <div className="flex items-center gap-1 text-bright-sun-400">
                  {/* Title */}
                  <h2 className="text-lg font-semibold cursor-pointer">
                    {item.title}
                  </h2>
                </div>

                {item.links.map((link, index1) => (
                  <div
                    key={index1}
                    className="flex flex-col gap-1 text-xs cursor-pointer text-mine-shaft-300 hover:text-bright-sun-300 hover:translate-x-2 transition duration-300 ease-in-out"
                  >
                    <p>{link}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center text-sm font-medium text-mine-shaft-100 p-5">
        Designed & Developed By{" "}
        <span className="text-bright-sun-400">Atmik @2025</span>
      </div>
    </div>
  );
};
