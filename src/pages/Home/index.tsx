import { useState } from "react";
import CardPost from "../../components/CardPost/CardPost";
import api from "../../api/axios";
import { useSelector } from "react-redux";
import type { RootState } from "../../Redux/store";
import { CgLogOut } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const username = useSelector((state: RootState) => state.signupUsername.userName);

    const navigate = useNavigate();

    const params = new URLSearchParams(window.location.search);
    const userlogged = params.get("username");

  const handleTitleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleLogout = () => {
    navigate("/signup");
  }

  const handleSubmitPost = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      if (!username) {
        console.error("Username is required to create a post.");
        return;
      }
      if (!title || !content) {
        console.error("Title and content are required to create a post.");
        return;
      }
      await api.post("", { username, title, content });
      setTitle('');
      setContent('');
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  return (
    <>
      <header className="bg-[#7695EC] w-[800px] h-16 flex items-center justify-between px-10 text-white text-2xl font-semibold">
        <h1>CodeLeap Network</h1>
        <button onClick={() => handleLogout()} className="flex items-center gap-1 cursor-pointer hover:bg-[#6a8be6] p-1.5 rounded-[8px]">
          <CgLogOut size={24} className="relative top-[2px]"/>
          <h2 className="text-[20px]">{userlogged}</h2>
        </button>
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
              value={title}
              onChange={(e) => handleTitleInput(e)}
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
              value={content}
              onChange={(e) => handleContentInput(e)}
              className="border-1 border-[#77777777] rounded-[8px] w-full h-[74px] outline-none text-black p-2"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              onClick={(e) => handleSubmitPost(e)}
              className={`${!title || !content ? "hover:cursor-not-allowed w-[120px] h-[32px] bg-[#7695EC] rounded-[8px] font-semibold cursor-pointer hover:bg-[#6589ec]" : "w-[120px] h-[32px] bg-[#7695EC] rounded-[8px] font-semibold cursor-pointer hover:bg-[#6589ec]"}`}
            >
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
