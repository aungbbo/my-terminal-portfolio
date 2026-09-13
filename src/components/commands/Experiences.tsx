import { useContext } from "react";
import _ from "lodash";
import { isArgInvalid } from "../../utils/funcs";
import {
  ExperienceCompany,
  ExperienceDetail,
  ExperienceMeta,
  ExperiencePeriod,
  ExperiencePoint,
  ExperienceRow,
  ExperiencesIntro,
  ExperienceTitle,
} from "../styles/Experiences.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Experiences: React.FC = () => {
  const { arg } = useContext(termContext);

  if (arg.length > 0) {
    if (isArgInvalid(arg, "go", ["1", "2", "3", "4"]))
      return <Usage cmd="experiences" />;

    const experience = _.find(experiences, { id: parseInt(arg[1]) });
    if (!experience) return <Usage cmd="experiences" />;

    return (
      <ExperienceDetail data-testid={`experience-${experience.id}`}>
        <ExperienceTitle>
          {`${experience.role} @ `}
          <ExperienceCompany>{experience.company}</ExperienceCompany>{" "}
          <ExperiencePeriod>({experience.period})</ExperiencePeriod>
        </ExperienceTitle>
        <ExperienceMeta>
          {experience.location}
        </ExperienceMeta>
        {experience.details.map((point) => (
          <ExperiencePoint key={point}>- {point}</ExperiencePoint>
        ))}
      </ExperienceDetail>
    );
  }

  return (
    <div data-testid="experiences">
      <ExperiencesIntro>Here is where I've worked:</ExperiencesIntro>
      {experiences.map(({ id, role, company, period }) => (
        <ExperienceRow key={id}>
          {`${id}) ${role} @ `}
          <ExperienceCompany>{company}</ExperienceCompany>{" "}
          <ExperiencePeriod>({period})</ExperiencePeriod>
        </ExperienceRow>
      ))}
      <Usage cmd="experiences" marginY />
    </div>
  );
};

const experiences = [
  {
    id: 1,
    role: "Software Engineer Intern",
    company: "Neptune Ops",
    location: "San Francisco, CA",
    period: "May 2026 - Aug. 2026",
    details: [
      "Engineered and containerized a multi-file upload system using FastAPI and Docker, cutting media processing time by 50% via direct AWS S3 presigned URL uploads and asynchronous MongoDB indexing, eliminating backend I/O bottlenecks for 1,000+ daily assets.",
      "Accelerated release velocity and reduced production escape bugs by 40% by architecting an automated CI/CD testing pipeline in GitHub Actions, running 30+ Playwright E2E and regression test suites.",
    ],
  },
  {
    id: 2,
    role: "Web Developer Intern",
    company: "Alterea, Inc.",
    location: "Remote",
    period: "Feb. 2026 - May 2026",
    details: [
      "Developed and maintained full-stack features across React, Node.js, and Firebase for a production-deployed web application used by 120,000+ students, debugging across frontend and backend systems.",
      "Identified root causes and resolved UI accessibility issues and backend integration bugs, reducing reported errors by 30% for Agents of Influence, an educational media literacy game.",
    ],
  },
  {
    id: 3,
    role: "Undergraduate Researcher",
    company: "San Jose State University",
    location: "San Jose, CA",
    period: "Jan. 2026 - Present",
    details: [
      "Prototyped and benchmarked memory-efficient embedding algorithms in Python for AI/ML workflows, evaluating tradeoffs across sparse, graph-based, and neural approaches for text embeddings and RAG systems.",
      "Conducted a 48-source literature review on matrix-free methods, exploring how vector database clustering and retrieval-augmented generation can compete with next-token prediction models.",
    ],
  },
  {
    id: 4,
    role: "Backend Software Engineer",
    company: "Trekteria",
    location: "San Jose, CA",
    period: "Mar. 2025 - Sep. 2025",
    details: [
      "Built and scaled backend services using Supabase and TypeScript for an AI camping planner app, integrating 10+ RESTful APIs to support trip planning, location data, and reliable end-to-end data flow.",
      "Designed and implemented a SQLite caching layer to improve data consistency, reduce reliance on network requests, and enable full offline functionality, achieving 99.9% uptime for 200+ users.",
    ],
  },
];

export default Experiences;
