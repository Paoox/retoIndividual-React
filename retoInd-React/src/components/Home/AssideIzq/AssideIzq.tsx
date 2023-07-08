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

export default function AssideIzq() {
  return (
    <aside className="basis-1/4">
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
      <div className="rounded-md p-1 flex items-center">
        <span className="text-[12px] px-1 my-3 text-zinc-900 font-extrabold">
          Other
        </span>
      </div>
      <MenuAssideIzq icon={like} text="Code of Conduct" />
      <MenuAssideIzq icon={nerd} text="Privacy Policy" />
      <MenuAssideIzq icon={eyes} text="Terms of use" />
      <div className="p-2">
        <div className="flex my-3 gap-1">
          <MenuIcons icon={twit} name="twitter" />
          <MenuIcons icon={face} name="facebook" />
          <MenuIcons icon={git} name="github" />
          <MenuIcons icon={insta} name="instagram" />
          <MenuIcons icon={twitch} name="twitch" />
          <MenuIcons icon={mastodon} name="mastodon" />
        </div>
      </div>
    </aside>
  );
}
