import heartPlus from "../../assets/heart-plus.svg";
import coment from "../../assets/comments-count.svg";
import bookmark from "../../assets/read.svg";
import dots from "../../assets/three-Dots-Icon.svg";

export default function AsideLeftDetailPost() {
  function getRandom() {
    const init = 1;
    const finaly = 25;
    const numRandom = init + Math.floor(Math.random() * finaly);
    return numRandom;
  }
  return (
    <section className="hidden md:flex flex-col basis-[6%] ">
      <div className="flex py-5 flex-col gap-2  cursor-pointer items-center text-[10px] text-[#171313] text-center  ">
        <div className="p-2">
          <img
            src={heartPlus}
            alt="Heart plus"
            className="h-4 fill-[#525252]"
          />
          <p>{getRandom()}</p>
        </div>
        <div className="p-2">
          <img src={coment} alt="Comments" className="h-5 fill-[#525252]" />
          <p>{getRandom()}</p>
        </div>
        <div className="p-2">
          <img src={bookmark} alt="Bookmark" className="h-[13px]" />
          <p>{getRandom()}</p>
        </div>
        <div className="p-2">
          <img src={dots} alt="dots" className="h-6" />
        </div>
      </div>
    </section>
  );
}
