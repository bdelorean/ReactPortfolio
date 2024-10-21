import Button from "../components/Button";

const Header = () => {
  return (
    <div className="flex justify-around gap-3 flex-col items-start md:flex-row md:items-center bg-bgHeader p-8">
      {/* hier komt de img en name */}
      <div className="flex flex-row items-center gap-3">
        <img
          src="/images/portfoliofoto.JPG"
          alt="my portfolio img"
          className="rounded-full w-20 h-20 object-cover mr-2 "
        />
        <div className="flex flex-col gap-1">
          <h1 className=" text-white md:text-2xl font-bold">Bianca Delorean</h1>
          <p className="bg-gray-300 text-xs md:w-auto w-[40%] px-1">
             Front-end Developer
          </p>
          <p className="text-white text-xs md:text-s">
            Passionate about creating beautiful and functional web-sites
          </p>
        </div>
      </div>
      {/* Hier komt de button */}
      <div className="bg-gray-300 w-32">
        <a
          href="https://github.com/bdelorean"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            action="View GitHub"
            additionalClasses="px-4 bg-bgButton"
          />
        </a>
      </div>
    </div>
  );
};

export default Header;
