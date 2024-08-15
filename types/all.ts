import { StaticImageData } from 'next/image';
import { IconType } from 'react-icons';

export type MenuItem = {
  label: string;
  path: string;
};

export type LogoInfo = {
  width: string;
  height: string;
  textSize: string;
  classname?: string;
};

export type SocialMediaDataType = {
  link: string;
  icon: IconType;
  title: string;
};

export type Skill = {
  name: string;
  proficiency: number;
};

export type Skillset = {
  title: string;
  skills: Skill[];
};

export type EducationType = {
  startDate: string;
  endDate: string;
  degree: string;
  instituition: string;
  address: string;
};

export type ExperienceType = {
  startDate: string;
  endDate: string;
  company: string;
  jobPosition: string;
  address: string;
};

export type ProjectsType = {
  title: string;
  thumbnail: StaticImageData;
  githubLink: string;
  demoLink: string;
  description: string;
  tagClouds: string[];
};

export type AnimatedSectionType = {
  children: React.ReactNode;
  className: string;
  animation: any;
};
