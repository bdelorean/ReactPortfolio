const Form = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-around">
        <form
          action="https://formspree.io/f/xeoqoeay"
          method="POST"
          name="contact"
          className="flex flex-col items-center text-white space-y-4"
        >
          <div className="flex flex-col justify-start w-full">
            <label htmlFor="name" className="text-xs">
              Name:
            </label>
            <input
              type="text"
              placeholder="enter your name"
              className="text-black text-xs w-full p-1 rounded-sm placeholder:text-xs placeholder:italic"
              name="name"
            />
          </div>
          <div className="flex flex-col justify-start w-full">
            <label htmlFor="email" className="text-xs">
              Email:
            </label>
            <input
              type="email"
              placeholder="enter your email"
              className="text-black text-xs w-full p-1 rounded-sm placeholder:text-xs placeholder:italic"
              name="email"
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
              className="rounded-sm text-black"
            ></textarea>
          </div>
          <button
            className=" bg-[#21201D] py-2 px-4 rounded-md text-xs"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Form;
