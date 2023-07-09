import MenuAssideIzq from "./MenuAssideIzq";
import MenuIcons from "./MenuIcons";
import mastodon from "../../../assets/mastodon-Icon.svg";
import twit from "../../../assets/tuwiter-Black-Icon.svg";
import face from "../../../assets/facebock-Icon.svg";
import git from "../../../assets/github-black.svg";
import insta from "../../../assets/instagram-Icon.svg";
import twitch from "../../../assets/twitch-Icon.svg";
import lgbt from "../../../assets/lgbt-Devto-Logo-Icon.svg";
import house from "../../../assets/hoouse-Icon.svg";
import oldDoc from "../../../assets/old-Document-Icon.svg";
import microp from "../../../assets/microphone-Icon.svg";
import camera from "../../../assets/video-Camera-Icon.svg";
import tag from "../../../assets/tag-Icon.svg";
import focus from "../../../assets/spotligth-Icon.svg";
import bags from "../../../assets/color-Bags-Icon.svg";
import heart from "../../../assets/red-Heart-Icon.svg";
import trumpet from "../../../assets/trumpet-Icon.svg";
import book from "../../../assets/book-Icon.svg";
import question from "../../../assets/question-Emoji-Icon.svg";
import like from "../../../assets/like-Yellow-Hand-Icon.svg";
import nerd from "../../../assets/nerd-Emoji-Icon.svg";
import eyes from "../../../assets/surprised-Eyes-Icon.svg";
import settings from "../../../assets/custumize-Tag.svg";
import dots from "../../../assets/three-Dots-Icon.svg";

export default function AssideIzq() {
  return (
    <aside className="basis-1/5">
      <MenuAssideIzq icon={house} text="Home" />
      <MenuAssideIzq icon={oldDoc} text="Listings" />
      <MenuAssideIzq icon={microp} text="Podcasts" />
      <MenuAssideIzq icon={camera} text="Videos" />
      <MenuAssideIzq icon={tag} text="Tags" />
      <MenuAssideIzq icon={focus} text="FAQ" />
      <MenuAssideIzq icon={bags} text="Forem Shop" />
      <MenuAssideIzq icon={heart} text="Sponsors" />
      <MenuAssideIzq icon={lgbt} text="About" />
      <MenuAssideIzq icon={trumpet} text="Contact" />
      <MenuAssideIzq icon={book} text="Guides" />
      <MenuAssideIzq icon={question} text="Software comparisons" />
      <div className=" p-1 flex items-center">
        <span className="text-[12px] px-1 my-3 text-zinc-900 font-extrabold">
          Other
        </span>
      </div>
      <MenuAssideIzq icon={like} text="Code of Conduct" />
      <MenuAssideIzq icon={nerd} text="Privacy Policy" />
      <MenuAssideIzq icon={eyes} text="Terms of use" />
      <div className="p-1">
        <div className="flex mt-3 gap-2">
          <MenuIcons icon={twit} name="twitter" />
          <MenuIcons icon={face} name="facebook" />
          <MenuIcons icon={git} name="github" />
          <MenuIcons icon={insta} name="instagram" />
          <MenuIcons icon={twitch} name="twitch" />
          <MenuIcons icon={mastodon} name="mastodon" />
        </div>
      </div>
      <div className="p-1 flex justify-between items-center mx-1 mb-12">
        <span className="text-[12px] my-3 text-zinc-900 font-extrabold">
          My Tags
        </span>
        <img src={settings} alt="settings" className="h-4" />
      </div>
      <div className="bg-white rounded-md p-2">
        <div className="flex gap-[38%] py-2">
          <p className="text-zinc-600 text-[9px] ">DEV community</p>
          <img src={dots} alt="three dots" className="h-4" />
        </div>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--Iim0709g--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/2tlkmy55xik6gfbcah9f.jpg"
          alt="DEV Newsletter"
          className="rounded-[4px] pb-2 "
        />
        <h2 className="text-[#404040] text-[14px] font-bold mr-6">
          Want to stay ahead of the game in the world of coding?
        </h2>
        <p className="hover:text-blue-800 text-[10px] my-2 underline text-blue-600 cursor-pointer">
          Join our newsletter community and never miss a beat.
        </p>
      </div>
      <div className="bg-white rounded-md p-2">
        <div className="flex gap-[38%] py-2">
          <p className="text-zinc-600 text-[9px] ">DEV community</p>
          <img src={dots} alt="three dots" className="h-4" />
        </div>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--vf_P4FwD--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_350/https://p32.f1.n0.cdn.getcloudapp.com/items/OAu6mnD1/20ada628-9434-4772-a8e0-7d861713d3c4.jpg"
          alt="Dev Forem"
          className="rounded-md my-2"
        />
        <h2 className="text-[#404040] text-[14px] font-bold mr-6 my-2">
          The Forem Shop is Here!
        </h2>
        <p className="hover:text-blue-800 text-[10px] underline text-blue-600 cursor-pointer">
          <code>
            {">"}
            {">"}Shop Forem, DEV, and CodeNewbie merch
          </code>
        </p>
      </div>
    </aside>
  );
}
