import { useState } from "react";
import { Chip } from "@mui/material";

import { InterestsProps, OptionsInterface } from "./types";

export const Interests = ({ options }: InterestsProps) => {
  const [selected, setSelected] = useState<OptionsInterface[]>([]);
  const updateSelected = (category: string, id: number) => {
    const isIdInArray = selected.some((item) => item.id === id);

    if (isIdInArray) {
      setSelected((prev) => prev.filter((item) => item.id !== id));
    } else {
      setSelected((prev) => [...prev, { id: id, category: category }]);
    }
  };

  console.log(selected);
  return (
    <div
      style={{
        width: "522px",
        height: "max-content",
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
      }}>
      {options.map(({ category, id }) => (
        <Chip
          key={id}
          label={category}
          onClick={() => updateSelected(category, id)}
          sx={{ padding: "10px 16px", fontSize: "20px" }}
        />
      ))}
    </div>
  );
};
