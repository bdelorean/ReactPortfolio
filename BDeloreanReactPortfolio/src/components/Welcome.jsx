const Welcome = () => {
  return (
    <section className="mt-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around">
        <div className="flex flex-col gap-3 items-center justify-between md:justify-start w-[520] h-[168]">
          <h1 className="hidden md:block text-white text-xl font-bold py-2 px-6 mt-6 bg-bgHeader bg-opacity-65 md:bg-transparent md:p-0 ">
            Welcome to my portfolio
          </h1>
          <p className="hidden md:text-xs text-white md:block">Explore my latest projects</p>
          {/* Buttons */}
          <div className="flex flex-row items-center gap-5 md:w-[35vw] mt-7">
            <button className="text-white rounded-md border-solid border border-accentColor text-xs md:w-full w-[240px] h-[48px]">
              Contact me
            </button>
            
              <button className="text-white rounded-md bg-bgHeader text-xs drop-shadow-2xl md:w-full w-[240px] h-[48px] ">
                View Projects
              </button>
            
          </div>
        </div>

        <div className="w-[350px] md:w-[520px] md:h-[400px]">
          <img src="/images/portfoliofoto.JPG" alt="" className="w-full h-auto"/>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
