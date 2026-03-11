import type { RootState } from "../../Redux/store";
import { useDispatch, useSelector } from "react-redux";
import { setUserName } from "../../Redux/Slices/authUser";
import { useNavigate } from "react-router-dom";

const Sigup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userName = useSelector(
    (state: RootState) => state.signupUsername.userName,
  );

  const handleUserNameStateInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setUserName(e.target.value));
  };

  const handleSignIn = () => {
    try {
      if (!userName) {
        alert("Please enter a username.");
        return;
      }
      const url = new URL(window.location.href);
      url.searchParams.set("username", userName);
      window.history.pushState({}, "", url.toString());
      navigate(`${'/home' + url.search}`);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

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
              value={userName}
              onChange={handleUserNameStateInput}
              placeholder="John Doe"
              className="border-1 border-[#77777777] text-[14px] rounded-[8px] w-full h-[32px] outline-none text-black p-2"
            />
          </div>
          <button
            className={`w-[120px] h-[32px] bg-[#7695EC] rounded-[8px] font-semibold cursor-pointer hover:bg-[#6589ec] block ml-auto mt-4`}
            onClick={handleSignIn}
          >
            ENTER
          </button>
        </div>
      </div>
    </>
  );
};

export default Sigup;
