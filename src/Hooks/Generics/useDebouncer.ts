import { useRef } from "react";
import { Debouncer } from "Tools/Debouncer";

export const useDebouncer = <T extends (...args: any[]) => void>(
  callback: T,
  wait = 200,
) => {
  const debouncer = useRef(new Debouncer(callback, wait));
  return debouncer.current.execute.bind(debouncer.current);
};
