import Marquee from "react-fast-marquee";
import { companies } from "../../Data/Data";

const Companies = () => {
  return (
    <div className=" flex flex-col items-center gap-8 text-white">
      <h3 className="text-3xl font-semibold">
        Trusted By <span className="text-bright-sun-400">1000+</span> Companies
      </h3>

      {/* Marquee - Slider */}
      <Marquee>
        {companies.map((company, index) => (
          <div key={index} className="mx-8">
            <img src={`/Companies/${company}.png`} alt="" className="h-14" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Companies;
