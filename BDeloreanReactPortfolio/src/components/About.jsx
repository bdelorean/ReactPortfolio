const About = ({ title, text }) => {
  return (
    <section id="about" className="h-[55vh] md:h-auto" data-aos="zoom-in-up">
      <div className="mt-8"></div>
      <div className="w-[350px] h-[310px] md:w-[520px] md:h-[450px] bg-[#21201D]/80 flex flex-col px-8 ">
        <h2 className="text-white md:text-3xl font-bold mt-6 md:mt-10">{title}</h2>
        <p className="text-white w-auto text-xs mt-4 leading-5 md:text-sm md:mt-16 tracking-wider md:leading-7">
          {text}
        </p>
      </div>
    </section>
  );
};

export default About;
