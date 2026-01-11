import { useContext, useEffect } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Linkedin: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  useEffect(() => {
    if (rerender && currentCommand[0] === "linkedin") {
      const timer = setTimeout(() => {
        window.open("https://www.linkedin.com/in/aungbbo/", "_blank");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [rerender, currentCommand]);

  return (
    <Wrapper>
      <span>Opening LinkedIn profile...</span>
    </Wrapper>
  );
};

export default Linkedin;
