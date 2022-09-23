import { useState } from "react";

function useSelection(defaultSelection: string[] = []) {
  const [selection, setSelection] = useState(() =>
    defaultSelection.reduce((acc, key) => {
      acc[key] = true;
      return acc;
    }, {} as Record<string, true>)
  );

  function toggleItem(key: string) {
    setSelection((state) => {
      if (state[key]) {
        const { [key]: _, ...rest } = state;
        return {
          ...rest,
        };
      }
      return {
        ...state,
        [key]: true,
      };
    });
  }

  return [selection, toggleItem] as const;
}

export default useSelection;
