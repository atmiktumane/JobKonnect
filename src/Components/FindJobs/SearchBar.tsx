import { Divider, RangeSlider } from "@mantine/core";
import { dropdownData } from "../../Data/JobsData";
import { MultiInput } from "./MultiInput";
import { useState } from "react";

export const SearchBar = () => {
  // State : for Salary Range Slider
  const [value, setValue] = useState<[number, number]>([3, 90]);

  return (
    <div className="flex gap-3 py-10">
      {dropdownData.map((item, index) => (
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
