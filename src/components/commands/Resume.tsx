import { useContext, useEffect } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  useEffect(() => {
    if (rerender && currentCommand[0] === "resume") {
      const timer = setTimeout(() => {
        window.open("https://aungbobo.dev/resume.pdf", "_blank");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [rerender, currentCommand]);

  return <span>Opening resume...</span>;
};

export default Resume;
