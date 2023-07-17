import { Link } from "react-router-dom";

export default function NavBarLogin() {
  return (
    <nav className="bg-[#FFFFFF] flex items-center w-auto h-auto lg:px-32 gap-2 p-[6px] place-content-between">
      <div className="flex gap-1">
        <div>
          <Link to="/">
            <img
              className="h-10"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DevTo"
            />
          </Link>
        </div>
        <div className="border rounded-md w-80 max-w-xs h-9 pb-1 pl-1 hover:border-gray-400 flex justify-between">
          <input
            type="text"
            placeholder="Search..."
            className=" placeholder:text-gray-700 "
          />
          <span className="material-symbols-outlined text-black font-light text-2xl hover:bg-slate-100 hover:text-blue-800 cursor-pointer pl-1 pr-6 w-6 h-[26px] hover:ring[1px] hover:rounded-md">
            search
          </span>
        </div>
      </div>
      <div className="text-black flex items-center invisible sm:visible">
        <div>
          <Link
            to="/login"
            className=" m-2 text-[#404040]  hover:bg-slate-100 p-[6px] rounded-[3px]  hover:text-[#3b49df] text hover:underline "
          >
            Log in
          </Link>
        </div>
        <div className=" border-[1px] border-[#3b49df] rounded-lg m-[1px] flex justify-center hover:bg-[#3b49df] ">
          <Link
            to="/createAccount"
            className="m-1 text-sm  text-[#3b49df] p-1 hover:text-white hover:underline"
          >
            Create account
          </Link>
        </div>
      </div>
    </nav>
  );
}
