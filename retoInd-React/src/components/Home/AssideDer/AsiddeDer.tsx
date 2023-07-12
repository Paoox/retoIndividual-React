import Listings from "./Listings";

export default function AssideDer() {
  return (
    <aside className="hidden lg:flex flex-col basis-[27%]">
      <div className="bg-white rounded-md mb-3">
        <div className="flex justify-between border-b border-zinc-200 p-3 items-center ">
          <p className="text-black font-bold text-xs">Listings</p>
          <p className="text-sky-800 text-[9px] cursor-pointer">See all</p>
        </div>
        <Listings title="Goto 10 Retro Computing Newsletter" type="misc" />
        <Listings title="Learn Godot 4by Marketing a 2D" type="education" />
        <Listings title="Lunar Ground color 3rd party" type="products" />
        <Listings title="Thriving in the IA Era" type="products" />
        <Listings title="We need visionaries like you" type="collabs" />
        <div className="flex justify-center p-3">
          <p className="text-zinc-700 text-[9px] hover:text-sky-800 cursor-pointer">
            Create Listing
          </p>
        </div>
      </div>
      <div className="bg-white rounded-md mb-3">
        <div className="border-b border-zinc-200 p-3 items-center ">
          <p className="text-black font-bold text-xs cursor-pointer hover:text-sky-800 ">
            #discuss
          </p>
        </div>
        <Listings title="Build in Public:Week One Check-in" type="5 comments" />
        <Listings title="Meme Monday -- What are you" type="7 comments" />
        <Listings title="Coding Problem Interview" type="12 comments" />
        <Listings
          title="#DEV Discuss: Is Threads Truly Decentralized?"
          type="9 comments"
        />
      </div>
      <div className="bg-white rounded-md">
        <div className="border-b border-zinc-200 p-3 items-center ">
          <p className="text-black font-bold text-xs cursor-pointer hover:text-sky-800 ">
            #watercooler
          </p>
        </div>
        <Listings
          title="Instat Bug-fixing or Bug-free Code:Wich Power Would You Pick? "
          type="2 comments"
        />
        <Listings title="Coding Problem Interview" type="26 comments" />
      </div>
    </aside>
  );
}
