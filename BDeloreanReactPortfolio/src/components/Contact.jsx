import Form from "./Form";
import Icons from "./Icons";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-[1300px] h-auto md:h-[350px] mx-auto shadow-lg py-2 bg-[#21201D]/80 mb-28 mt-28"
      data-aos="flip-left"
      data-aos-easing="ease-out-cubic"
      data-aos-duration="2000"
    >
      <div className="mt-8"></div>
      <div className="flex flex-col items-start ml-6 md:flex-row md:items-center justify-around">
        {/* Contact list */}
        <div className="flex flex-col w-[42%] space-y-2">
          <h2 className="text-white md:text-3xl font-bold mt-4">Contact me:</h2>
          <p className="bg-gray-300 text-xs w-4/5 md:w-[60%] p-1 mt-2">
            Feel free to reach out through any of the following options
          </p>
          <ul className="text-white p-3 list-disc">
            <li>
              Email: &#9993;
              <span className="text-xs"> bia.delorean@gmail.com</span>{" "}
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/bianca-delorean-417122187/"
                className="underline text-xs"
              >
                Connect with me on LinkedIn
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/bdelorean"
                className="underline text-xs"
              >
                View my work on GitHub
              </a>
            </li>
            <li>
              Phone:{" "}
              <span className="text-xs tracking-wider">&#9742; 0626239678</span>
            </li>
          </ul>
        </div>
        {/* Form */}
        <Form />
      </div>
      {/* div for scroll behavior */}
      <div className="bg-accentColor w-full md:w-4/5 h-px mx-auto mt-4 "></div>
      <Icons />
    </section>
  );
};

export default Contact;
