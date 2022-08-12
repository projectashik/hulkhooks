import { useState } from "react";

export const useToggle = (defaultValue: any) => {
  const [value, setValue] = useState(defaultValue);

  function toggleValue(value?: any) {
    setValue((currentValue: any) =>
      typeof value === "boolean" ? value : !currentValue
    );
  }

  return [value, toggleValue];
};