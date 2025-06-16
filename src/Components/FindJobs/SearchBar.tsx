import { Divider } from "@mantine/core";
import { dropdownData } from "../../Data/JobsData";
import { MultiInput } from "./MultiInput";

export const SearchBar = () => {
  return (
    <div className="flex gap-3 px-5 py-10">
      {dropdownData.map((item, index) => (
        <>
          <div key={index} className="w-1/5 bg-mine-shaft-900 rounded-lg">
            <MultiInput {...item} />
          </div>
          <Divider size="xs" orientation="vertical" />
        </>
      ))}
    </div>
  );
};
