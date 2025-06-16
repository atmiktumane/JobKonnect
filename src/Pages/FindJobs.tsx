import { Divider } from "@mantine/core";
import { SearchBar } from "../Components/FindJobs/SearchBar";

export const FindJobs = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">
      <Divider size="xs" mx="md" />

      <SearchBar />
    </div>
  );
};
