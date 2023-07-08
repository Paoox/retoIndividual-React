import MenuAssideIzq from "./MenuAssideIzq";
import MenuIcons from "./MenuIcons";
import mastodon from "../../../assets/mastodon-Icon.svg";
import twit from "../../../assets/tuwiter-Black-Icon.svg";
import face from "../../../assets/facebock-Icon.svg";
import git from "../../../assets/github-black.svg";
import insta from "../../../assets/instagram-Icon.svg";
import twitch from "../../../assets/twitch-Icon.svg";

export default function AssideIzq() {
  return (
    <aside className="basis-1/4">
      <MenuAssideIzq icon="🏠" text="Home" />
      <MenuAssideIzq icon="📜" text="Listings" />
      <MenuAssideIzq icon="🎙" text="Podcasts" />
      <MenuAssideIzq icon="🎥" text="Videos" />
      <MenuAssideIzq icon="🏷" text="Tags" />
      <MenuAssideIzq icon="💡" text="FAQ" />
      <MenuAssideIzq icon="🛍" text="Forem Shop" />
      <MenuAssideIzq icon="❤" text="Sponsors" />
      <MenuAssideIzq icon="🏳‍🌈" text="About" />
      <MenuAssideIzq icon="📯" text="Contact" />
      <MenuAssideIzq icon="📖" text="Guides" />
      <MenuAssideIzq icon="🤔" text="Software comparisons" />
      <div className="rounded-md p-1 flex items-center">
        <span className="text-[12px] px-1 my-3 text-zinc-900 font-extrabold">
          Other
        </span>
      </div>
      <MenuAssideIzq icon="👍🏼" text="Code of Conduct" />
      <MenuAssideIzq icon="🤓" text="Privacy Policy" />
      <MenuAssideIzq icon="👀" text="Terms of use" />
      <div className="p-2">
        <div className="flex my-3 gap-1">
          <MenuIcons icon={twit} />
          <MenuIcons icon={face} />
          <MenuIcons icon={git} />
          <MenuIcons icon={insta} />
          <MenuIcons icon={twitch} />
          <MenuIcons icon={mastodon} />
        </div>
      </div>
    </aside>
  );
}
