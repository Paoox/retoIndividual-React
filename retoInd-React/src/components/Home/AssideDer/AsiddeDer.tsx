import Listings from "./Listings";

export default function AssideDer() {
  return (
    <aside className="basis-[27%]">
      <div className="bg-white rounded-md mb-3">
        <div className="flex justify-between border-b border-zinc-200 p-3 items-center ">
          <p className="text-black font-bold text-xs">Listings</p>
          <p className="text-sky-800 text-[9px] cursor-pointer">See all</p>
        </div>
        <Listings title="Goto 10 Retro Computing Newsletter" type="misc" />
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
      </div>
    </aside>
  );
}
