import { useState } from "react";
import { MultiInput } from "../FindJobs/MultiInput";
import { Divider, Input, RangeSlider } from "@mantine/core";
import { searchFields } from "../../Data/TalentsData";
import { CgProfile } from "react-icons/cg";

export const TalentSearchBar = () => {
  // State : for Salary Range Slider
  const [value, setValue] = useState<[number, number]>([1, 100]);

  return (
    <div className="flex gap-3 py-10">
      {/* Input - To Search Talent Name */}
      <div className="bg-mine-shaft-900 rounded-lg">
        <Input
          placeholder="Search Talents"
          variant="unstyled"
          className="[&_input]:!placeholder-mine-shaft-200"
          leftSection={<CgProfile className="text-bright-sun-400" />}
        />
      </div>

      <Divider size="xs" orientation="vertical" />

      {searchFields.map((item, index) => (
        <>
          <div key={index} className="w-1/5 bg-mine-shaft-900 rounded-lg">
            <MultiInput {...item} />
          </div>
          <Divider size="xs" orientation="vertical" />
        </>
      ))}

      {/* Salary Range Selector + Advance Tailwind CSS [&_.class_name] -> class selector */}
      <div className="w-1/5 text-sm [&_.mantine-Slider-label]:!translate-y-10">
        {/* Row 1 - Heading */}
        <div className="flex items-center justify-between">
          <h5>Salary</h5>
          <p>
            &#8377;{value[0]} LPA - &#8377;{value[1]} LPA
          </p>
        </div>

        {/* Row 2 - Range Selector */}
        <RangeSlider
          color="brightSun.4"
          size="xs"
          value={value}
          onChange={setValue}
        />
      </div>
    </div>
  );
};
