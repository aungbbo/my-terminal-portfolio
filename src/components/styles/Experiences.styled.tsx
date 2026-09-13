import styled from "styled-components";

export const ExperiencesIntro = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  line-height: 1.5rem;
`;

export const ExperienceRow = styled.div`
  line-height: 1.5rem;
  margin-bottom: 0.375rem;
`;

export const ExperienceCompany = styled.span`
  color: ${({ theme }) => theme.colors?.primary};
`;

export const ExperiencePeriod = styled.span`
  color: ${({ theme }) => theme.colors?.text[200]};
`;

export const ExperienceDetail = styled.div`
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
`;

export const ExperienceTitle = styled.div`
  font-weight: 700;
  margin-bottom: 0.25rem;
`;

export const ExperienceMeta = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  margin-bottom: 0.25rem;
`;

export const ExperiencePoint = styled.div`
  color: ${({ theme }) => theme.colors?.text[200]};
  line-height: 1.5rem;
  margin-top: 0.5rem;
`;
