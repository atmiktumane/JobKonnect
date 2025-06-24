import { similarCompanies } from "../../Data/CompanyData";
import { CompanyCard } from "./CompanyCard";

export const SimilarCompanies = () => {
  return (
    <div className="w-1/4">
      {/* Heading */}
      <h5 className="text-lg font-semibold">Similar Companies</h5>

      {/* Cards */}
      <div className="mt-5 flex flex-col gap-5">
        {similarCompanies.map((item, index) => (
          <CompanyCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
};
