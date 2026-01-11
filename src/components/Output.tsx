import { useContext } from "react";
import Clear from "./commands/Clear";
import Echo from "./commands/Echo";
import Email from "./commands/Email";
import Github from "./commands/Github";
import Gui from "./commands/Gui";
import Help from "./commands/Help";
import History from "./commands/History";
import Linkedin from "./commands/Linkedin";
import Projects from "./commands/Projects";
import Resume from "./commands/Resume";
import TextOutput from "./commands/TextOutput";
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

  const specialCmds = ["echo", "projects", "themes"]; // commands that accept args

  if (!specialCmds.includes(cmd) && arg.length > 0)
    return <UsageDiv>Usage: {cmd}</UsageDiv>;

  return (
    <OutputContainer>
      {
        {
          clear: <Clear />,
          echo: <Echo />,
          email: <Email />,
          help: <Help />,
          history: <History />,
          github: <Github />,
          gui: <Gui />,
          linkedin: <Linkedin />,
          projects: <Projects />,
          pwd: <TextOutput>/home/aungbobo</TextOutput>,
          resume: <Resume />,
          themes: <Themes />,
          welcome: <Welcome />,
          whoami: <TextOutput>guest</TextOutput>,
        }[cmd]
      }
    </OutputContainer>
  );
};

export default Output;
