import { ProjectsType } from '@/types/types';
import Thumbnail1 from '../assets/images/thumbnail1.jpeg';
import Thumbnail2 from '../assets/images/thumbnail2.jpeg';
import Thumbnail3 from '../assets/images/thumbnail3.jpeg';
import Thumbnail4 from '../assets/images/thumbnail4.jpeg';
import Thumbnail5 from '../assets/images/thumbnail5.png';
import Thumbnail6 from '../assets/images/thumbnail6.jpeg';
import Thumbnail7 from '../assets/images/thumbnail7.jpeg';

export const projectsData: ProjectsType[] = [
  {
    title: 'Shoplyst Ecommerce',
    description: 'Photo of online shopping store Shoplyst',
    thumbnail: Thumbnail1,
    githubLink: 'https://github.com/roshanbist/fullstack-ecommerce-frontend',
    demoLink: 'https://fullstack-ecommerce-frontend-sage.vercel.app/',
    tagClouds: [
      'React',
      'TypeScript',
      'Redux',
      'Tailwind',
      'ExpressJS',
      'MongoDB',
    ],
  },
  {
    title: 'Awwward Zentry Dashboard',
    description: 'Photo of Zentry dummy webpage',
    thumbnail: Thumbnail7,
    githubLink: 'https://github.com/roshanbist/awwward-zentry',
    demoLink: 'https://awwward-zentry.vercel.app/',
    tagClouds: ['React', 'Tailwind', 'GSAP'],
  },
  {
    title: 'Movix application',
    description: 'Photo of movix website',
    thumbnail: Thumbnail2,
    githubLink: 'https://github.com/roshanbist/Movix/tree/main/movix',
    demoLink: 'https://movix-xi-seven.vercel.app/',
    tagClouds: ['React', 'Redux', 'SCSS', 'React Lazy Load'],
  },
  {
    title: 'Breweries App',
    description: 'Photo of brewery website',
    thumbnail: Thumbnail3,
    githubLink: 'https://github.com/roshanbist/Breweries-List',
    demoLink: 'https://brewerycompany.vercel.app/',
    tagClouds: ['React', 'TypeScript', 'Tailwind', 'React Hook Form'],
  },
  {
    title: 'Nike Dummy Page',
    description: 'Photo of Nike dummy page',
    thumbnail: Thumbnail4,
    githubLink: 'https://github.com/roshanbist/NikeDummyPage',
    demoLink: 'https://niketailwind.netlify.app/',
    tagClouds: ['React', 'Tailwind'],
  },
  {
    title: 'Dashboard Theme Toggle',
    description: 'Photo of social media theme toggle dashboard',
    thumbnail: Thumbnail5,
    githubLink:
      'https://github.com/roshanbist/frontEndMentor-SMDashboardDarkToggle/tree/main',
    demoLink:
      'https://roshanbist.github.io/frontEndMentor-SMDashboardDarkToggle/',
    tagClouds: ['HTML5', 'SCSS', 'JavaScript'],
  },

  {
    title: 'Bankist Page',
    description: 'Photo of simple bankist website',
    thumbnail: Thumbnail6,
    githubLink: 'https://github.com/roshanbist/Bankist',
    demoLink: 'https://roshanbist.github.io/Bankist/',
    tagClouds: ['HTML5', 'CSS', 'JavaScript'],
  },
];
