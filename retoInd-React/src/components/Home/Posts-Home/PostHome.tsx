export default function PostHome() {
  return (
    <main className="basis-[55%]">
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
      <div className="flex p-3 gap-1">
        <div className="">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--ifX47biZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/682769/87fdd296-6176-41b1-86a4-740375c3e6d2.jpg"
            alt="Image User"
            className="rounded-full h-6"
          />
        </div>
        <div className="w-full">
          <p className="text-gray-500 text-[10px]  leading-none">
            Pradumna Saraf
          </p>
          <p className="text-gray-500 text-[10px]  leading-none">
            Jul 6 (2 days ago)
          </p>
          <h2 className="text-black font-bold text-lg my-2 leading-tight">
            Renaming Git Commit Messages: A Quick and Easy Guide
          </h2>
        </div>
      </div>
    </main>
  );
}
