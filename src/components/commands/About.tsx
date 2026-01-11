import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Aung Bo Bo</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a senior CS student</HighlightAlt> at San Jose State
        University.
      </p>
      <p>
        I am passionate about AI and backend development to make life easier.
      </p>
    </AboutWrapper>
  );
};

export default About;
