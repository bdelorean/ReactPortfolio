const Contact = () => {
  return (
    <section
      id="contact"
      className="w-[1300px] h-auto md:h-[350px] mx-auto shadow-lg py-2 bg-[#21201D]/80 mb-28 mt-28"
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
            <li>Email: &#9993;<span className="text-xs"> bia.delorean@gmail.com</span> </li>
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
        <div className="flex flex-col items-center justify-around">
          <form
            action=""
            className="flex flex-col items-center text-white space-y-4"
          >
            <div className="flex flex-col justify-start w-full">
              <label htmlFor="name" className="text-xs">
                Name:
              </label>
              <input
                type="text"
                placeholder="enter your name"
                className="w-full px-1 rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-start w-full">
              <label htmlFor="email" className="text-xs">
                Email:
              </label>
              <input
                type="email"
                placeholder="enter your email"
                className="w-full px-1 rounded-sm"
              />
            </div>
            <div className="flex flex-col justify-start">
              <label htmlFor="message" className="text-xs">
                Message:
              </label>
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="2"
                className="rounded-sm"
              ></textarea>
            </div>
            <button className=" bg-[#21201D] py-2 px-4 rounded-md text-xs">
              Send Message
            </button>
          </form>
        </div>
      </div>
      <div className="bg-accentColor w-full md:w-4/5 h-px mx-auto mt-4 "></div>
      <div className="flex flex-row items-center justify-start gap-4 ml-6 md:ml-32 mt-2">
        <a href="https://www.facebook.com/Bia.Moldoveanu"><img src="/images/Facebook.png" alt="Facebook" /></a>
        <a href="mailto:bia.delorean@gmail.com"><img src="/images/Letter.png" alt="mail"  /></a>
        <a href="https://www.linkedin.com/in/bianca-delorean-417122187/"><img src="/images/LinkedIn.png" alt="Lkdn" /></a>
        <a href="https://github.com/bdelorean"><img src="/images/GitHub.png" alt="" /></a>
      </div>
    </section>
  );
};

export default Contact;
