import CardPost from "../../components/CardPost/CardPost";

const Home = () => {
  return (
    <>
      <header className="bg-[#7695EC] w-[800px] h-16 flex items-center px-10 text-white text-2xl font-semibold">
        <h1>CodeLeap Network</h1>
      </header>
      <main className="flex flex-col justify-center gap-5 p-5 bg-[#ffffff] w-[800px]">
        <form className="flex flex-col gap-5 border-1 border-[#99999999] rounded-[16px] color w-[752px] h-[334px] p-5 ">
          <div className="flex justify-start">
            <h2 className="text-black font-bold text-2xl">
              What's on your mind?
            </h2>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="Title" className="text-black font-[16px]">
              Title
            </label>
            <input
              placeholder="Hello world"
              type="text"
              className="border-1 border-[#77777777] rounded-[8px] w-full h-[32px] outline-none text-black p-2"
            ></input>
          </div>
          <div className="flex flex-col items-start gap-2">
            <label htmlFor="Title" className="text-black font-[16px]">
              Content
            </label>
            <textarea
              placeholder="Content hero"
              className="border-1 border-[#77777777] rounded-[8px] w-full h-[74px] outline-none text-black p-2"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button className="w-[120px] h-[32px] bg-[#7695EC] rounded-[8px] font-semibold cursor-pointer hover:bg-[#6589ec]">
              Create
            </button>
          </div>
        </form>

        <CardPost />
      </main>
    </>
  );
};

export default Home;
