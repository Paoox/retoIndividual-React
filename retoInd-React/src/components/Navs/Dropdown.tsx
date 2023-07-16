import { useState } from "react";
import burguer from "../../assets/burguer.svg";
import MenuAssideIzq from "../Home/AssideIzq/MenuAssideIzq";
import lgbt from "../../assets/lgbt-Devto-Logo-Icon.svg";
import house from "../../assets/hoouse-Icon.svg";
import oldDoc from "../../assets/old-Document-Icon.svg";
import microp from "../../assets/microphone-Icon.svg";
import camera from "../../assets/video-Camera-Icon.svg";
import tag from "../../assets/tag-Icon.svg";
import focus from "../../assets/spotligth-Icon.svg";
import bags from "../../assets/color-Bags-Icon.svg";
import heart from "../../assets/red-Heart-Icon.svg";
import trumpet from "../../assets/trumpet-Icon.svg";
import book from "../../assets/book-Icon.svg";
import question from "../../assets/question-Emoji-Icon.svg";

export default function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <span className="relative leading-6 block">
      <button
        className="mx-2 p-2 inline-block md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
        type="submit"
      >
        <img
          className="w-[24px] h-[24px]"
          src={burguer}
          alt="Burguer menu icon"
        />
      </button>
      {isOpen && (
        <div className="absolute top-10 w-40 border ring-slate-600 bg-white left-[-10px] rounded-md">
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
        </div>
      )}
    </span>
  );
}
