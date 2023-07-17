import { Link, Route, Switch } from "react-router-dom";
import Emojis from "./Emojis";
import heart from "../../../assets/red-Heart-Icon.svg";
import unicorn from "../../../assets/unicorn-Icon.svg";
import boom from "../../../assets/crazy-Man-Icon.svg";
import hands from "../../../assets/raise-.svg";
import fire from "../../../assets/fire-Icon.svg";
import comments from "../../../assets/comments-count.svg";
import read from "../../../assets/read.svg";

export interface PostProps {
  post: {
    content: string;
    date: string;
    heartReactions: string;
    image: string;
    marks: string;
    tags: [string];
    time: number;
    title: string;
    userCreatorId: {
      name: string;
      profilePicture: string;
      _id: string;
    };
    _id: string;
  };
}

export default function CardPost(post: PostProps) {
  function getRandom() {
    const init = 1;
    const finaly = 40;
    const numRandom = init + Math.floor(Math.random() * finaly);
    return numRandom;
  }
  return (
    <>
      <Link to={`/detailPost?${post.post._id}`}>
        <img src={post.post.image} className="rounded-t-md cursor-pointer" />
      </Link>
      <div className="flex p-3 gap-1 bg-white rounded-md mb-2">
        <div>
          <img
            src={post.post.userCreatorId.profilePicture}
            alt="img del post"
            className="rounded-full h-7 cursor-pointer"
          />
        </div>
        <div className="w-full">
          <p className="text-gray-500 text-sm  leading-none cursor-pointer">
            {post.post.userCreatorId.name}
          </p>
          <p className="text-gray-500 text-sm  leading-none cursor-pointer">
            {`${post.post.time} days ago`}
          </p>
          <Link to={`/detailPost?${post.post._id}`}>
            <h2 className="text-black font-bold text-xl my-2 leading-tight hover:text-sky-800 cursor-pointer">
              {post.post.title}
            </h2>
          </Link>
          <div className="flex text-gray-800 text-xs gap-2">
            {post.post.tags}
          </div>
          <div className="flex md:my-2 gap-1 items-center pl-1 justify-between">
            <div className="flex">
              <div className="flex py-1 hover:bg-gray-200  rounded-[4px] cursor-pointer">
                <Emojis emoji={heart} name="heart" />
                <Emojis emoji={unicorn} name="unicorn" />
                <Emojis emoji={boom} name="head exploding" />
                <Emojis emoji={hands} name="hands" />
                <Emojis emoji={fire} name="fire" />
                <p className="hover:text-black text-gray-700 text-xs px-2">
                  {getRandom()}
                </p>
              </div>
              <div className="flex pt-[3px] md:gap-1 hover:bg-gray-200  rounded-[4px] cursor-pointer">
                <img src={comments} alt="comments" className="h-6" />
                <p className=" hover:text-black  text-gray-800 text-xs ">
                  {getRandom()}
                </p>
              </div>
            </div>
            {post.post.time ? (
              <>
                <div className="text-gray-700 text-xs gap-1 flex items-center">
                  {`${post.post.time} min read`}
                  <div className="hover:bg-gray-200 rounded-sm md:p-1 cursor-pointer">
                    <img src={read} alt="read" className="h-4" />
                  </div>
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
