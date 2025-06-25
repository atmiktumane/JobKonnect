export const PostedJobCard = (props: any) => {
  return (
    <div className="p-2 bg-mine-shaft-900 rounded-xl border-l-2 border-l-bright-sun-400">
      <h6 className="text-sm font-semibold">{props.jobTitle}</h6>
      <p className="text-xs text-mine-shaft-300">{props.location}</p>
      <p className="text-xs text-mine-shaft-300">{props.posted}</p>
    </div>
  );
};
