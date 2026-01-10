import { useContext } from "react";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Gui from "./commands/Gui";
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

  const specialCmds = ["echo", "themes"]; // commands that accept args

  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv>Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer>
      {
        {
          clear: <Clear />,
          echo: <Echo />,
          help: <Help />,
          history: <History />,
          gui: <Gui />,
          themes: <Themes />,
          welcome: <Welcome />,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
