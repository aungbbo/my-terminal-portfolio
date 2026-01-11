import { useContext, useEffect } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Email: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  useEffect(() => {
    if (rerender && currentCommand[0] === "email") {
      const timer = setTimeout(() => {
        window.open("mailto:aungbobodev@gmail.com", "_blank");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [rerender, currentCommand]);

  return <span>aungbbo48@gmail.com</span>;
};

export default Email;
