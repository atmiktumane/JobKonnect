import { talents } from "../../Data/TalentsData";
import { TalentCard } from "../FindTalents/TalentCard";

export const CompanyEmployees = () => {
  return (
    <div>
      {/* Talent Cards */}
      <div className="grid grid-cols-2 gap-5">
        {talents.map((talent, index) => (
          // {/* Card */}
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};
