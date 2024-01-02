import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

function valuetext(value: number) {
  return `${value}`;
}

export default function RangeSlider({ filterAge }: any) {
  const [value, setValue] = useState<number[]>([30, 60]);

  const handleChange = (event: Event, newValue: number | number[]) => {
    setValue(newValue as number[]);
    filterAge(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Slider
        getAriaLabel={() => "Age range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
}
