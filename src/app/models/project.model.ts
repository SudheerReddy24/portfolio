import { Technology } from "./technology.model";

export type ProjectCategory =
  | 'Full Stack'
  | 'Backend'
  | 'Frontend'
  | 'Microservices';

export interface Project {
  id: number;
  title: string;
  subTitle: string;
  description: string;
  category: ProjectCategory;
  technologies: Technology[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  accentColor: string;
}