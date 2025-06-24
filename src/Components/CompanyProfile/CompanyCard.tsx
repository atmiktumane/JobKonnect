import { TbExternalLink } from "react-icons/tb";

export const CompanyCard = (props: any) => {
  return (
    <div className="flex items-center justify-between bg-mine-shaft-900 rounded-lg p-2">
      {/* Data - Logo + Content */}
      <div className="flex items-center gap-2">
        {/* logo */}
        <div className="w-fit bg-mine-shaft-800 p-1 rounded-lg">
          <img
            src={`/Companies_Logo/${props.name}.png`}
            alt="companyLogo"
            className="w-8"
          />
        </div>

        {/* Content */}
        <div>
          <h6 className="font-semibold">{props.name}</h6>
          <p className="text-xs text-mine-shaft-300">
            {props.employees} Employees
          </p>
        </div>
      </div>

      {/* Icon */}
      <TbExternalLink className="text-2xl text-bright-sun-400" />
    </div>
  );
};
