const Header = () => {
  return (
    <div className="flex justify-around flex-row items-center bg-bgHeader p-8 sm:p-4">
      {/* hier komt de img en name */}
      <div className="flex flex-row items-center gap-3">
        <img
          src="/images/portfoliofoto.JPG"
          alt="my portfolio img"
          className="rounded-full w-20 h-20 object-cover mr-2 "
        />
        <div className="flex flex-col gap-1">
          <h1 className=" text-white md:text-2xl font-bold">Bianca Delorean</h1>
          <p className="bg-gray-300 text-xs w-[55%] md:w-[40%]">Front-end Developer</p>
          <p className="text-white text-xs md:text-base">
            Passionate about creating beautiful and functional web-sites
          </p>
        </div>
      </div>
      {/* Hier komt de button */}
      <div className="bg-gray-300">
        <a
          href="https://github.com/bdelorean"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-bgButton text-white rounded-lg text-xs text-nowrap px-4 md:w-full max-w-[240px] h-[40px] ">
            View GitHub
          </button>
        </a>
      </div>
    </div>
  );
};

export default Header;
