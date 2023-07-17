import { useForm } from "react-hook-form";
import { useState } from "react";
import Hashtags from "./Hashtags";
import linkMini from "../../assets/link-minimalistic.svg";
import clip from "../../assets/clip-board.svg";
import checkList from "../../assets/check-list.svg";
import quote from "../../assets/quote.webp";
import galeryWide from "../../assets/galeryWide.svg";

interface PostData {
  userCreatorId: string;
  title: string;
  content: string;
  image: string;
  time: number;
  tags: [string];
  date: string;
  heartReactions: number;
}

export default function Create() {
  const [tagsCount, setTagsCount] = useState();

  function onSubmit(data: PostData) {
    console.log("data", data);
    const userToken = localStorage.getItem("token");
    const payload = userToken.split(".")[1];
    const idUser = JSON.parse(atob(payload)).id;
    console.log("esto es el id?", idUser);
    const currentDate = new Date();
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`,
      },
      body: JSON.stringify({
        userCreatorId: idUser,
        title: data.title,
        content: data.content,
        image: data.image,
        time: data.time,
        tags: data.tags,
        date: currentDate.toISOString(),
        heartReactions: Number,
      }),
    })
      .then((response) => {
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
        console.log(response)
      })
      .catch((error) => {
        alert(error);
      });
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PostData>();
  console.log(errors)
  return (
    <>
      <main className=" bg-transparent flex flex-col justify-start items-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <header className=" md:px-7 md:py-3 rounded-lg">
            <div className="input-img md:py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-0 bg-[#F5F5F5]"
                placeholder="Add a cover image..."
                {...register("image")}
              />
            </div>
            <div className="title-input">
              <input
                type="text"
                placeholder="New post title here..."
                className="w-full md:h-16 font-extrabold  md:text-3xl focus:outline-none focus:ring-0 bg-[#F5F5F5]"
                {...register("title")}
              />
            </div>
            <div className="flex justify-around">
              <div className="flex justify-start">
                <input
                  type="text"
                  placeholder="Add up to 4 tags"
                  className=" text-xs md:text:base font-thin focus:outline-none focus:ring-0 bg-[#F5F5F5]"
                  {...register("tags")}
                />
                <button
                  className="text-black md:p-1 rounded-xl text-xs md:text:base"
                  onClick={handleSubmit(setTagsCount)}
                >
                  Add Tag
                </button>
              </div>
              {tagsCount ? <Hashtags text="a" /> : <div></div>}
              <div>
                <input
                  type="number"
                  placeholder="Time to read"
                  className="font-thin focus:outline-none focus:ring-0 bg-[#F5F5F5]"
                  {...register("time")}
                />
              </div>
            </div>
          </header>
          <section className="flex flex-row md:max-w-lg justify-center text-center pb-3">
            <div className="w-1/12 text-center font-bold">B</div>
            <div className="w-1/12 text-center italic">I</div>
            <div className="w-1/12 text-center flex">
              <img src={linkMini} className="w-4/12"></img>
            </div>
            <div className="w-1/12 flex items-center">
              <img src={clip} className="w-4/12 "></img>
            </div>
            <div className="w-1/12 flex items-center">
              <img src={checkList} className="w-4/12"></img>
            </div>
            <div className="w-1/12 flex items-center">
              <img src={quote} className="w-4/12"></img>
            </div>
            <div className="w-1/12 flex items-center">
              <img src={galeryWide} className="w-4/12"></img>
            </div>
            <div className="w-1/12 flex items-center font-bold">:</div>
          </section>
          <article className="bg-[#F5F5F5]">
            <section>
              <textarea
                className="md:w-full h-40 md:h-96 font-light p-2 focus:outline-none focus:ring-0 bg-[#F5F5F5]"
                {...register("content")}
                placeholder="Write your post content here..."
              ></textarea>
            </section>
          </article>
          <div className=" text-white w-4 text-center">
            <button type="submit" className="bg-blue-600 rounded-md p-2 text-sm">
              Publish
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
