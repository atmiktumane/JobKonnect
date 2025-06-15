export const Subscribe = () => {
  return (
    // Section
    <div className="px-[20px] py-10 flex justify-center items-center">
      {/* Subscribe Card */}
      <div className="w-11/12 px-[40px] py-3 flex items-center gap-8 bg-mine-shaft-900 rounded-xl">
        {/* Left  */}
        <p className="w-1/2 text-mine-shaft-100 text-3xl text-center font-semibold">
          Never Wants to Miss <br /> Any
          <span className="text-bright-sun-400"> Job News?</span>
        </p>

        {/* Right Column */}
        <div className="w-[50%] p-2 flex items-center justify-between gap-2 bg-mine-shaft-600 rounded-xl">
          {/* Input  */}
          <input
            type="email"
            placeholder="Your@email.com"
            className="w-3/4 bg-transparent text-mine-shaft-100"
          />

          {/* button */}
          <button className="px-10 py-3 text-white text-lg font-semibold bg-bright-sun-400 hover:bg-bright-sun-500 rounded-lg">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
