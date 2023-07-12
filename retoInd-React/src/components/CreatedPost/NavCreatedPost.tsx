import { Link } from "react-router-dom";

export default function NavCreatedPost() {
  return (
    <nav className="bg-[#F5f5f5] flex items-center w-auto h-auto lg:px-32 gap-2 p-[6px] place-content-between">
      <div className="flex gap-1">
        <div>
          <Link to="/">
            <img
              className="h-7"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DevTo"
            />
          </Link>
        </div>
        <div>
          <p className="m-2 text-[#404040] text-[10px]  ">Create Post</p>
        </div>
      </div>
      <div className="flex">
        <div className="hover:rounded-[3px] m-[1px] flex justify-center hover:bg-[#3a2dee2c] ">
          <Link to="/" className=" text-[10px] text-gray-600 hover:text-white ">
            <span className="material-symbols-outlined text-[20px]">close</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
