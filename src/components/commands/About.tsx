import { AboutWrapper } from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is Aung Bo Bo. I’m a senior CS + Math student at San Jose
        State University, graduating in December 2026. I'm passionate about
        building reliable backend systems with experience in developing
        production software with Python, FastAPI, Docker, AWS, CI/CD and
        databases. I also enjoy building AI agents and designing agentic
        workflows to solve real-world problems.
      </p>
    </AboutWrapper>
  );
};

export default About;
