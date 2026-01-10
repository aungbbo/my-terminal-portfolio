import { useContext } from "react";
import _ from "lodash";
import { Wrapper } from "../styles/Output.styled";
import { termContext } from "../Terminal";

const Echo: React.FC = () => {
  const { arg } = useContext(termContext);

  let outputStr = _.join(arg, " ");
  outputStr = _.trim(outputStr, "'");
  outputStr = _.trim(outputStr, '"');
  outputStr = _.trim(outputStr, "`");

  return <Wrapper>{outputStr}</Wrapper>;
};

export default Echo;
