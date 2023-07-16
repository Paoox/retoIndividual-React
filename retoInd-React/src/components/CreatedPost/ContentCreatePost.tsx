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
  const [reactionsCount, setReactionsCount] = useState(0);
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
        heartReactions: reactionsCount,
      }),
    })
      .then((response) => {
        setTimeout(() => {
          window.location.href = "/";
        }, 1000);
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

  return (
    <>
      <main className="bg-dev-background flex flex-col justify-start items-center ">
        <form onSubmit={handleSubmit(onSubmit)}>
          <header className=" bg-dev-to-card-color px-7 py-3 rounded-lg">
            <div className="input-img py-2">
              <input
                type="text"
                className="w-full focus:outline-none focus:ring-0"
                placeholder="Add a cover image..."
                {...register("image")}
              />
            </div>
            <div className="title-input">
              <input
                type="text"
                placeholder="New post title here..."
                className="w-full h-16 font-extrabold text-3xl focus:outline-none focus:ring-0"
                {...register("title")}
              />
            </div>
            <div className="flex justify-around">
              <div className="flex justify-start">
                <input
                  type="text"
                  placeholder="Add up to 4 tags"
                  className="font-thin focus:outline-none focus:ring-0"
                  {...register("tags")}
                />
                <button
                  className="bg-blue-dev/50 text-black p-1 rounded-xl"
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
                  className="font-thin focus:outline-none focus:ring-0"
                  {...register("time")}
                />
              </div>
            </div>
          </header>
          <section className="flex flex-row max-w-lg justify-center text-center">
            <div className="w-1/12 text-center font-bold">B</div>
            <div className="w-1/12 text-center italic">I</div>
            <div className="w-1/12 text-center flex">
              <img src={linkMini} className="w-4/12 mx-4"></img>
            </div>
            <div className="w-1/12 text-center">
              <img src={clip} className="w-4/12 mx-4"></img>
            </div>
            <div className="w-1/12 text-center">
              <img src={checkList} className="w-4/12 mx-4"></img>
            </div>
            <div className="w-1/12 text-center">
              <img src={quote} className="w-4/12 mx-4"></img>
            </div>
            <div className="w-1/12 text-center">
              <img src={galeryWide} className="w-4/12 mx-4"></img>
            </div>
            <div className="w-1/12 text-center font-bold">:</div>
          </section>
          <article className=" bg-dev-background ">
            <section>
              <textarea
                className="w-full h-96 font-light p-2 focus:outline-none focus:ring-0"
                {...register("content")}
                placeholder="Write your post content here..."
              ></textarea>
            </section>
          </article>
          <div className=" text-black w-4 text-center">
            <button type="submit" className="bg-sky-800 rounded-md p-1 text-sm">
              Publish
            </button>
          </div>
        </form>
      </main>
    </>
  );
}
