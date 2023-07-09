import Hash from "./Hash";
import Emojis from "./Emojis";
import heart from "../../../assets/red-Heart-Icon.svg";
import unicorn from "../../../assets/unicorn-Icon.svg";
import boom from "../../../assets/crazy-Man-Icon.svg";
import hands from "../../../assets/raise-.svg";
import fire from "../../../assets/fire-Icon.svg";
import comments from "../../../assets/comments-count.svg";
import read from "../../../assets/read.svg";

export default function CardPost(props) {
  const {
    imgUser,
    UserName,
    DatePost,
    TitlePost,
    reactions,
    comentsNum,
    timeRead,
    className,
  } = props;
  return (
    <div className={`flex p-3 gap-1 bg-white ${className} mb-2`}>
      <div>
        <img
          src={imgUser}
          alt={UserName}
          className="rounded-full h-6 cursor-pointer"
        />
      </div>
      <div className="w-full">
        <p className="text-gray-500 text-[10px]  leading-none cursor-pointer">
          {UserName}
        </p>
        <p className="text-gray-500 text-[10px]  leading-none cursor-pointer">
          {DatePost}
        </p>
        <h2 className="text-black font-bold text-lg my-2 leading-tight hover:text-sky-800 cursor-pointer">
          {TitlePost}
        </h2>
        <div className="flex text-gray-800 text-[10px] gap-2">
          <Hash hash="#news" />
          <Hash hash="#chatgpt" />
          <Hash hash="#openia" />
        </div>
        <div className="flex my-2 gap-1 items-center pl-1 justify-between">
          <div className="flex">
            <div className="flex p-1 hover:bg-gray-200  rounded-[4px] cursor-pointer">
              <Emojis emoji={heart} name="heart" />
              <Emojis emoji={unicorn} name="unicorn" />
              <Emojis emoji={boom} name="head exploding" />
              <Emojis emoji={hands} name="hands" />
              <Emojis emoji={fire} name="fire" />
              <p className="hover:text-black text-gray-700 text-[9px] px-1">
                {reactions}
              </p>
            </div>
            <div className="flex p-1 hover:bg-gray-200  rounded-[4px] cursor-pointer">
              <img src={comments} alt="comments" className="h-4" />
              <p className=" hover:text-black  text-gray-700 text-[9px] py-[1px]">
                {comentsNum}
              </p>
            </div>
          </div>
          <div className="text-gray-700 text-[8px] gap-1 flex items-center">
            {timeRead}
            <div className="hover:bg-gray-200 rounded-sm p-1 cursor-pointer">
              <img src={read} alt="read" className="h-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
