import { StaticImageData } from 'next/image';

export interface Project {
  id: number;
  projectName: string;
  about: string;
  challenge: string[];
  solution: string[];
  brief: string;
  industry: string;
  type: string;
  focus: string;
  conclusion: string;
  feedback: string[];
  stats: {
    performance: number;
    accessibility: number;
    bestPractices: number;
    seo: number;
  };
  image: string | StaticImageData;
  desktopImg: string | StaticImageData;
  tabletImg: string | StaticImageData;
  mobileImg: string | StaticImageData;
  link: string;
  details?: {
    title: string;
    image?: string | StaticImageData;
    video?: string;
    text: string;
    items?: { label: string; value: string }[];
  }[];
}

export interface AdaptiveShowcaseProps {
  tabletImg: string | StaticImageData;
  mobileImg: string | StaticImageData;
}
