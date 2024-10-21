import Button from "../components/Button";
import { Link } from "react-router-dom"

const Welcome = () => {
  return (
    <section className="mt-12">
      <div className="flex flex-col-reverse md:flex-row items-center justify-around">
        <div className="flex flex-col gap-3 items-center justify-between md:justify-start w-[70%] md:w-auto">
          <h1 className="hidden md:block text-white text-xl font-bold py-2 px-6 mt-6 bg-bgHeader bg-opacity-65 md:bg-transparent md:p-0 ">
            Welcome to my portfolio
          </h1>
          <p className="hidden md:text-xs text-white md:block">
            Explore my latest projects
          </p>
          {/* Buttons */}
          <div className="flex flex-row items-center gap-3 w-full md:w-[35vw] mt-7">
            
            <a href="#contact" className="w-full">
              <Button
                action="Contact me"
                additionalClasses="border-solid border border-accentColor md:w-60"
              />
            </a>
            <Link to="/Projects" className="w-full">
            <Button action="View Projects" additionalClasses="bg-bgHeader   md:w-60" />
            </Link>
            
          </div>
        </div>

        <div className="w-[350px] md:w-[520px] md:h-[400px]">
          <img
            src="/images/portfoliofoto.JPG"
            alt=""
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
