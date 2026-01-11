import { Wrapper } from "../styles/Output.styled";

type Props = {
  children: string;
};

const TextOutput: React.FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
);
export default TextOutput;
