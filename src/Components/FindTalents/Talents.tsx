import { talents } from "../../Data/TalentsData";
import { Sort } from "../FindJobs/Sort";
import { TalentCard } from "./TalentCard";

export const Talents = () => {
  return (
    <div className="py-8 flex flex-col gap-8">
      {/* Heading Row */}
      <div className="flex items-center justify-between">
        <h4 className="text-xl font-medium">Talents</h4>

        {/* Sort w.r.t Salary (Low to High, etc) */}
        <Sort />
      </div>

      {/* Talent Cards */}
      <div className="grid grid-cols-3 gap-5">
        {talents.map((talent, index) => (
          // {/* Card */}
          <TalentCard key={index} {...talent} />
        ))}
      </div>
    </div>
  );
};
