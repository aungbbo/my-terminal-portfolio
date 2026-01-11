import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);
  const currentCommand = getCurrentCmdArry(history);

  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>Here are some of my selected projects:</ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}) ${title}`}</ProjectTitle>
          <ProjectDesc>- {desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "Jade.AI",
    desc: "AI data analysis platform for ultra-fast reasoning - 1st prize winner.",
    url: "https://devpost.com/software/jadeai/",
  },
  {
    id: 2,
    title: "MindOrbit",
    desc: "A spatial productivity workspace in an immersive, XR environment.",
    url: "https://github.com/aungbbo/MindOrbit/",
  },
  {
    id: 3,
    title: "Trekteria",
    desc: "AI camping planning app that helps user explore campsites, gear, and trips.",
    url: "https://trekteria.com/",
  },
  {
    id: 4,
    title: "YuCode",
    desc: "AI technical interview preparation and learning platform with real-time feedback.",
    url: "https://hackmit2025.vercel.app/",
  },
];

export default Projects;
