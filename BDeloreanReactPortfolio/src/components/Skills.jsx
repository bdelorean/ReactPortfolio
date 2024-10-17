const Skills = () => {
  return (
    <section id="about" className="h-auto">
      <div className="mt-8"></div>
      <div className="w-[350px] h-[310px] md:w-[520px] md:h-[450px] relative border-solid border border-accentColor px-8 shadow-lg">
        <h2 className="text-white md:text-3xl font-bold mt-10">Skills</h2>
        <ul className="text-white mt-10 space-y-1 md:mt-16 list-disc px-6 md:space-y-2">
          <li className="text-xs md:text-sm">HTML</li>
          <li className="text-xs md:text-sm">CSS/SCSS</li>
          <li className="text-xs md:text-sm">Bootstrap</li>
          <li className="text-xs md:text-sm">JavaScript</li>
          <li className="text-xs md:text-sm">Tailwind</li>
          <li className="text-xs md:text-sm">React</li>
        </ul>
        <div className="absolute w-20 md:w-32 h-auto top-4 right-6">
          <img src="/images/react.png" alt="react" />
        </div>
        <div className="absolute w-8 md:w-14 h-auto bottom-5 right-10">
          <img src="/images/js.png" alt="" />
        </div>
        <div className="absolute w-10 md:w-14 h-auto bottom-20 md:bottom-32 right-2">
          <img src="/images/bootstrap.png" alt="" />
        </div>
        <div className="absolute w-8 md:w-14 h-auto bottom-32 md:bottom-40 right-28 md:right-36">
          <img src="/images/css3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Skills;
