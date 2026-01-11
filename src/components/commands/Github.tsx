import { useContext, useEffect } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Github: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  useEffect(() => {
    if (rerender && currentCommand[0] === "github") {
      const timer = setTimeout(() => {
        window.open("https://github.com/aungbbo", "_blank");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [rerender, currentCommand]);

  return (
    <Wrapper>
      <span>Opening GitHub profile...</span>
    </Wrapper>
  );
};

export default Github;
