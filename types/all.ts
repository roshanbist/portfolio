import { IconType } from 'react-icons';

export type MenuItem = {
  label: string;
  path: string;
};

export type Contact = {
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
