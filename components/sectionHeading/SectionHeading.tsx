const SectionHeading = ({ heading }: { heading: string }) => {
  return (
    <div className='mb-12'>
      <h2 className='capitalize text-3xl font-robotoCondensed font-bold pb-8 relative before:absolute before:bottom-0 before:left-0 before:w-[5.5rem] before:h-[0.5rem] before:bg-foreground after:absolute after:bottom-[0.2rem] after:left-0 after:w-[25rem] after:h-[0.1rem] after:bg-foreground'>
        {heading}
      </h2>
    </div>
  );
};

export default SectionHeading;
