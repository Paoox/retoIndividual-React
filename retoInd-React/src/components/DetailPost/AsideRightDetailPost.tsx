import Listings from "../Home/AssideDer/Listings";
import dots from "../../assets/three-Dots-Icon.svg";
import { useEffect, useState } from "react";

let postsData= {}

export default function AsideRightDetailPost() {
  const [posts, setPosts] = useState<any>([]);
  const postId = new URL(window.location.href).search.slice(1);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetch(`http://localhost:8080/post/${postId}`)
      .then((response) => response.json())
      .then((response) => {
        setPosts(response.data);
        postsData = response.data;
        setLoading(false);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }, []);


  return (
    <section className="hidden lg:flex flex-col basis-[30%]">
      <div className="bg-white rounded-md p-3 border-t-black border-t-[25px] relative">
        <div className="flex gap-1 items-end absolute top-[-14px]">
        {loading ? <p>Loading...</p> :  <img
            src={postsData.userCreatorId.profilePicture}
            className="h-7 rounded-sm "
           />}
          {loading ? <p>Loading...</p> : <p className="text-gray-700 text-sm font-semibold">
        {postsData.userCreatorId.name} 
          </p> }
        </div>
        <button
          type="submit"
          className="bg-blue-700 w-full rounded text-white text-sm p-[5px] my-3"
        >
          Follow
        </button>
        <p className="text-gray-600 text-[13px] my-3">
          The hardworking team behind DEV ❤️
        </p>
        <p className="text-gray-600 text-xs my-4">
          Want to contribute to open source and help make the DEV community
          stronger? The code that powers DEV is called Forem and is freely
          available on GitHub. You're welcome to jump in!
        </p>
        <button className="text-xs p-[6px] text-gray-500 border border-slate-600 w-full rounded-md">
          Contribute to Forem
        </button>
      </div>
      <div className="bg-white rounded-md my-2">
        <div className="p-3 border-b border-zinc-200">
          <p className="text-black font-semibold">
            More from{" "}
            <span className="text-xs text-blue-800 cursor-pointer">
            {loading ? <p>Loading...</p> : <p className="text-gray-700 text-sm font-semibold">
        {postsData.userCreatorId.name} 
          </p> }
            </span>
          </p>
        </div>
        <Listings title="Welcome Thread - v231" type="#welcome" />
        <Listings title="Welcome Thread - v230" type="#welcome" />
        <Listings title="Welcome Thread - v229" type="#welcome" />
        <div className="p-3 rounded-b-lg">
          <p className="text-zinc-700 text-[10px] hover:text-blue-800 cursor-pointer">
            Welcome Thread - v228
          </p>
          <p className="text-zinc-500 text-[8px]">#welcome</p>
        </div>
      </div>
      <div className="bg-white rounded-md p-2 my-2">
        <div className="flex justify-between py-2">
          <div className="flex text-end gap-1 cursor-pointer">
          {loading ? <p>Loading...</p> :  <img
            src={postsData.userCreatorId.profilePicture}
            className="h-7 rounded-sm "
           />}
            {loading ? <p>Loading...</p> : <p className="text-gray-700 text-sm font-semibold">
        {postsData.userCreatorId.name} 
          </p> }
          </div>
          <div className="hover:bg-slate-200 hover:rounded-md cursor-pointer">
            <img src={dots} alt="three dots" className="h-5" />
          </div>
        </div>
        <h2 className="text-[#404040] text-sm font-bold mr-6 my-2">
          Did you know? DEV relies on open source code!
        </h2>
        <p className=" text-xs text-[#404040] my-1">
          Yes, that's correct. The code behind everything is Forem, which you
          can find on{" "}
          <span className="hover:text-blue-800 hover:underline cursor-pointer">
            GitHub.
          </span>{" "}
          DEV is just one instance of Forem.
        </p>
        <p className=" text-xs text-[#404040]">
          Open source is the future of social media.
        </p>
      </div>
    </section>
  );
}
