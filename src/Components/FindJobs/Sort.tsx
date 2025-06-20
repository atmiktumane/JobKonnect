import { Combobox, useCombobox } from "@mantine/core";
import { useState } from "react";
import { TbAdjustments } from "react-icons/tb";

const data = [
  "Relevance",
  "Most Recent",
  "Salary (Low to High)",
  "Salary (High to Low)",
];

export const Sort = () => {
  const [selectedItem, setSelectedItem] = useState<string | null>("Relevance");
  const combobox = useCombobox({
    onDropdownClose: () => combobox.resetSelectedOption(),
  });

  const options = data.map((item) => (
    <Combobox.Option value={item} key={item} className="">
      {item}
    </Combobox.Option>
  ));

  return (
    <>
      <Combobox
        store={combobox}
        width={170}
        position="bottom-end"
        withArrow
        withinPortal={false}
        onOptionSubmit={(val) => {
          setSelectedItem(val);
          combobox.closeDropdown();
        }}
      >
        <Combobox.Target>
          <div
            className="flex items-center gap-3 text-sm border px-2 py-1 border-bright-sun-400 rounded-lg cursor-pointer"
            onClick={() => combobox.toggleDropdown()}
          >
            {selectedItem}

            <TbAdjustments className="text-bright-sun-400" />
          </div>
        </Combobox.Target>

        <Combobox.Dropdown>
          <Combobox.Options>{options}</Combobox.Options>
        </Combobox.Dropdown>
      </Combobox>
    </>
  );
};
