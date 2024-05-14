import { useLocation } from "Tools/Router";

export const useBalanceRoute = () => {
  const path = useLocation();
  return path === "/user-payments";
};
