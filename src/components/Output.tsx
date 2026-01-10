import { useContext } from "react";
import Welcome from "./commands/Welcome";
import Themes from "./commands/Themes";
import Clear from "./commands/Clear";
import Help from "./commands/Help";
import { OutputContainer, UsageDiv } from "./styles/Output.styled";
import { termContext } from "./Terminal";

type Props = {
  index: number;
  cmd: string;
};

const Output: React.FC<Props> = ({ index, cmd }) => {
  const { arg } = useContext(termContext);

  const specialCmds = ["themes"]; // commands that accept args

  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv>Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer>
      {
        {
          welcome: <Welcome />,
          themes: <Themes />,
          clear: <Clear />,
          help: <Help />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
