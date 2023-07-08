import MenuAssideIzq from "./MenuAssideIzq";

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
    </aside>
  );
}
