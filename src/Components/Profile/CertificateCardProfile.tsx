import { formatDate } from "../services/Utilities";

export const CertificateCardProfile = (props: any) => {
  return (
    <div className="flex justify-between">
      {/* Left */}
      <div className="flex items-center gap-2">
        {/* Company Logo */}
        <div className="w-fit p-0.5 bg-mine-shaft-800 rounded-lg">
          <img
            src={`/Companies_Logo/${props.issuer}.png`}
            alt="Company Logo"
            className="w-10"
          />
        </div>

        {/* Company Details */}
        <div>
          <h6 className="text-mine-shaft-100 font-medium">{props.name}</h6>
          <p className="text-sm">{props.issuer}</p>
        </div>
      </div>

      {/* Right */}
      <div className="text-sm text-end">
        <p>Issued: {formatDate(props.issueDate)}</p>
        <p>ID: {props.certificateId}</p>
      </div>
    </div>
  );
};
