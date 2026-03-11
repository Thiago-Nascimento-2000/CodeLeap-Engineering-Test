const Sigup = () => {
  return (
    <>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-[500px] h-[205px] border-1 border-[#CCCCCC] p-5 rounded-[16px] bg-white">
          <h2 className="text-black font-bold text-[22px] text-left">
            Welcome to CodeLeap network
          </h2>
          <div>
            <label className="text-black font-normal text-[16px] text-left block mb-2 mt-4">
              Plase enter your username
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="border-1 border-[#77777777] text-[14px] rounded-[8px] w-full h-[32px] outline-none text-black p-2"
            />
          </div>
          <button className="w-[120px] h-[32px] bg-[#7695EC] rounded-[8px] font-semibold cursor-pointer hover:bg-[#6589ec] block ml-auto mt-4">
            ENTER
          </button>
        </div>
      </div>
    </>
  );
};

export default Sigup;
