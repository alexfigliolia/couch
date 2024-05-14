import { useLocation } from "Tools/Router";

export const usePaymentsRoute = () => {
  const path = useLocation();
  return path.startsWith("/user-payments");
};
