import { useContext } from "react";
import Clear from "./commands/Clear";
import Help from "./commands/Help";
import History from "./commands/History";
import Themes from "./commands/Themes";
import Welcome from "./commands/Welcome";
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
          clear: <Clear />,
          help: <Help />,
          history: <History />,
          themes: <Themes />,
          welcome: <Welcome />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
