// types/project.ts або там, де лежить інтерфейс
import { StaticImageData } from 'next/image';

export interface Project {
  id: number;
  projectName: string;
  brief: string;
  industry: string;
  type: string;
  focus: string;
  conclusion: string;
  stats: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  desktopImg: string | StaticImageData;
  tabletImg: string | StaticImageData;
  mobileImg: string | StaticImageData;
  link: string;
}
