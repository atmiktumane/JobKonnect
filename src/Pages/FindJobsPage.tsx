import { Divider } from "@mantine/core";
import { SearchBar } from "../Components/FindJobs/SearchBar";
import { Jobs } from "../Components/FindJobs/Jobs";

export const FindJobsPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 px-6 font-['poppins']">
      <SearchBar />

      <Divider size="xs" />

      <Jobs />
    </div>
  );
};
