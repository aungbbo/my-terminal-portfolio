import { useContext, useEffect } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Gui: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  const currentCommand = _.split(history[0], " ");

  useEffect(() => {
    if (rerender && currentCommand[0] === "gui") {
      const timer = setTimeout(() => {
        window.open("https://aungbobo.dev/", "_blank");
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [rerender, currentCommand]);

  return (
    <Wrapper>
      <span>Opening GUI version...</span>
    </Wrapper>
  );
};

export default Gui;
