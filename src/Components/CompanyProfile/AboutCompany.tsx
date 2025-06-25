import { companyData } from "../../Data/CompanyData";

export const AboutCompany = () => {
  const company: { [key: string]: any } = companyData;
  return (
    <div>
      {Object.keys(company).map(
        (key, index) =>
          key !== "Name" && (
            <div key={index} className="flex flex-col gap-2 mb-5">
              {/* Keys */}
              <div className="text-lg font-semibold">{key}</div>

              {/* Values : except website */}
              {key !== "Website" && (
                <div className="text-sm text-mine-shaft-300">
                  {company[key]}
                </div>
              )}

              {/* Values : only website */}
              {key === "Website" && (
                <a
                  href={company[key]}
                  target="_blank"
                  className="text-sm text-bright-sun-400"
                >
                  {company[key]}
                </a>
              )}
            </div>
          )
      )}
    </div>
  );
};
