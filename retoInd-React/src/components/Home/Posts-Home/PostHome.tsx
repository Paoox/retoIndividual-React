export default function PostHome() {
  return (
    <main className="basis-[48%]">
      <div className="flex text-xs gap-1 m-1">
        <div className="font-bold text-black hover:bg-white hover:rounded-md hover:text-blue-800 cursor-pointer p-2">
          Relevant
        </div>
        <div className="text-gray-500 hover:bg-white hover:rounded-md hover:text-blue-800 cursor-pointer p-2">
          Latest
        </div>
        <div className="text-gray-500 hover:bg-white hover:rounded-md hover:text-blue-800 cursor-pointer p-2">
          Top
        </div>
      </div>
      <div>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--BMQK5Br8--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/grzwqes0tgsuyu6l5tqm.png"
          alt="article DevTo"
          className="rounded-t-md cursor-pointer"
        />
      </div>
    </main>
  );
}
