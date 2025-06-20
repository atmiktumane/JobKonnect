import { Sort } from "./Sort";

export const Jobs = () => {
  return (
    <div>
      {/* Heading Row */}
      <div className="flex items-center justify-between">
        <h4>Recommended Jobs</h4>

        {/* Sort w.r.t Salary (Low to High, etc) */}
        <Sort />
      </div>
    </div>
  );
};
