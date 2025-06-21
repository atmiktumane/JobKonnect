import { Divider } from "@mantine/core";
import { TalentSearchBar } from "../Components/FindTalents/TalentSearchBar";
import { Talents } from "../Components/FindTalents/Talents";

export const FindTalentsPage = () => {
  return (
    <div className="min-h-[100vh] bg-mine-shaft-950 px-6 font-['poppins']">
      {/* Talent - Search Row */}
      <TalentSearchBar />

      <Divider size="xs" />

      {/* Content */}
      <Talents />
    </div>
  );
};
