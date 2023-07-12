import CardPost from "./CardPost";
import { useEffect, useState } from "react";

export default function PostHome() {
  const [posts, setPosts] = useState<any>([]);

  useEffect(() => {
    fetch("http://localhost:8080/post")
      .then((response) => response.json())
      .then((response) => setPosts(response.data))
      .catch((error) => {
        console.log("error", error);
      });
  }, []);

  return (
    <main className="w-full">
      <div className="flex text-xs gap-1 m-1">
        <div className="font-bold text-black hover:bg-white hover:rounded-md hover:text-blue-800 cursor-pointer p-2">
          Relevant
        </div>
        <div className="text-gray-500 hover:bg-white hover:rounded-md hover:text-blue-800 cursor-pointer p-2">
          Latest
        </div>
        <div className="text-gray-500 hover:bg-white hover:rounded-md hover:text-blue-800 cursor-pointer p-2">
          Top
        </div>
      </div>
      <div></div>
      {posts.map((post, index) => (
        <CardPost key={`index${index}`} post={post} />
      ))}
    </main>
  );
}
