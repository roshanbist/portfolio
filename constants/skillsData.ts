import { Skillset } from '@/types/types';
import {} from 'react-icons/fa';
import {
  SiAdobephotoshop,
  SiBootstrap,
  SiCss3,
  SiDocker,
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiJest,
  SiJira,
  SiMongodb,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPostman,
  SiPython,
  SiReact,
  SiRedux,
  SiSass,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
} from 'react-icons/si';
import { TbBrandFramerMotion } from 'react-icons/tb';

export const skillsData: Skillset[] = [
  {
    title: 'Frontend Development',
    skills: [
      {
        label: 'HTML5',
        icon: SiHtml5,
      },
      {
        label: 'CSS3',
        icon: SiCss3,
      },
      {
        label: 'SCSS/SASS',
        icon: SiSass,
      },
      {
        label: 'Tailwind CSS',
        icon: SiTailwindcss,
      },
      {
        label: 'JavaScript',
        icon: SiJavascript,
      },
      {
        label: 'TypeScript',
        icon: SiTypescript,
      },
      {
        label: 'React',
        icon: SiReact,
      },
      {
        label: 'Redux',
        icon: SiRedux,
      },
      {
        label: 'Next JS',
        icon: SiNextdotjs,
      },
      {
        label: 'Bootstrap',
        icon: SiBootstrap,
      },
      {
        label: 'Jest',
        icon: SiJest,
      },
      {
        label: 'React Testing Library',
        icon: SiTestinglibrary,
      },
      {
        label: 'Motion',
        icon: TbBrandFramerMotion,
      },
    ],
  },
  {
    title: 'Backend & Database',
    skills: [
      {
        label: 'Node JS',
        icon: SiNodedotjs,
      },
      {
        label: 'Express JS',
        icon: SiExpress,
      },
      {
        label: 'Python',
        icon: SiPython,
      },
      {
        label: 'MongooDB',
        icon: SiMongodb,
      },
      {
        label: 'PostgreSQL',
        icon: SiPostgresql,
      },
      {
        label: 'Docker',
        icon: SiDocker,
      },
    ],
  },
  {
    title: 'Tools & Workflow',
    skills: [
      {
        label: 'Adobe Photoshop',
        icon: SiAdobephotoshop,
      },
      {
        label: 'Figma',
        icon: SiFigma,
      },
      {
        label: 'Postman',
        icon: SiPostman,
      },
      {
        label: 'Git',
        icon: SiGit,
      },
      {
        label: 'Jira',
        icon: SiJira,
      },
    ],
  },
];
