import CardPost from "./CardPost";

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
      <CardPost
        imgUser="https://res.cloudinary.com/practicaldev/image/fetch/s--ifX47biZ--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/682769/87fdd296-6176-41b1-86a4-740375c3e6d2.jpg"
        UserName="Pradumna Saraf"
        DatePost="Jul 6 (2 days ago)"
        TitlePost="Renaming Git Commit Messages: A Quick and Easy Guide"
        reactions="33 Reactions"
        comentsNum="3 Comments"
        timeRead="6 mins read"
        className="rounded-b-lg"
      />
      <CardPost
        imgUser="https://res.cloudinary.com/practicaldev/image/fetch/s--zSHFnyyx--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/255514/f665fcf9-9b52-41e0-b62e-7ccf8f84ef1a.jpeg"
        UserName="Tomas Rares"
        DatePost="Jul 7 (1 days ago)"
        TitlePost="Why OpenAI removed Web Browsing from ChatGPT"
        reactions="26 Reactions"
        comentsNum="4 Comments"
        timeRead="4 mins read"
        className="rounded-lg"
      />
    </main>
  );
}
