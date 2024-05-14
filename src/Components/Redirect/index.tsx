import { memo, useEffect } from "react";
import { useNavigate } from "Tools/Router";

export const Redirect = memo(
  function Redirect({ to }: Props) {
    const navigate = useNavigate();

    useEffect(() => {
      navigate(to);
    }, [navigate, to]);

    return null;
  },
  () => true,
);

interface Props {
  to: string;
}
