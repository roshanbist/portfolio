import Image from 'next/image';
import Link from 'next/link';

import { projectsData } from '@/constants/projectsData';

const ProjectsSection = () => {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-8 md:gap-16 pt-[3rem]'>
      {projectsData.map((project) => (
        <div
          key={project.title}
          className='cursor-pointer group max-sm:mb-[3rem]'
        >
          <div className='w-full h-[35rem] sm:h-[40rem] md:h-[50rem] overflow-hidden relative border border-border/60 rounded-[0.6rem] z-[1]'>
            <span className='absolute top-0 left-0 w-full h-full mix-blend-multiply bg-gray-800/40 z-[1]' />
            <span className='absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-[opacity] bg-gradient-to-b from-primary/90 to-black z-[2]' />
            <Image
              src={project.thumbnail}
              alt={project.description}
              fill
              className='object-cover scale-100 group-hover:scale-110 group-hover:rotate-3 transition-[transform] translateZ-0'
            />
            <div className='absolute bottom-[-8rem] left-0 w-full text-white p-[3rem] z-[2] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:bg-gradient-to-b after:from-transparent after:via-black/60 after:via-45% after:to-black after:to-100% after:z-[-1] group-hover:bottom-0 transition-all duration-500 after:transition-all group-hover:after:opacity-0 '>
              <h4 className='font-bold text-lg md:text-xl font-robotoCondensed capitalize'>
                {project.title}
              </h4>

              <ul className='flex flex-wrap gap-6 md:gap-12 mt-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all'>
                <li>
                  <Link
                    href={project.demoLink}
                    target='_blank'
                    className='btn primary-button min-w-[10.5rem] xl:min-w-[12.5rem] bg-transparent text-white hover:text-white block text-center'
                  >
                    <span className='relative z-10'>Demo</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href={project.githubLink}
                    target='_blank'
                    className='btn primary-button min-w-[10.5rem] xl:min-w-[12.5rem] bg-transparent text-white hover:text-white block text-center'
                  >
                    <span className='relative z-10'>Github</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
