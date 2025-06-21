export const ExperienceCard = (props: any) => {
  return (
    <div className="w-full">
      {/* Row 1 */}
      <div className="flex justify-between">
        {/* Left */}
        <div className="flex items-center gap-2">
          {/* Company Logo */}
          <div className="w-fit p-0.5 bg-mine-shaft-800 rounded-lg">
            <img
              src={`/Companies_Logo/${props.company}.png`}
              alt="Company Logo"
              className="w-10"
            />
          </div>

          {/* Company Details */}
          <div>
            <h6 className="text-mine-shaft-100 font-medium">{props.title}</h6>
            <p className="text-sm">
              {props.company} &bull; {props.location}
            </p>
          </div>
        </div>

        {/* Right */}
        <p className="text-sm">
          {props.startDate} - {props.endDate}
        </p>
      </div>

      {/* Row 2 */}
      <p className="text-sm mt-4">{props.description}</p>
    </div>
  );
};
