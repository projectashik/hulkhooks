import { useCallback, useState } from "react";

export const useToggle = (defaultValue: boolean = false): [boolean, any] => {
  const [state, setState] = useState(defaultValue);

  const toggle = useCallback(() => setState((state: boolean) => !state), []);

  return [state, toggle];
};
