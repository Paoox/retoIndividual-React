import { Link } from "react-router-dom";

export default function NavBarLogin() {
  const token = localStorage.getItem("token");
  return (
    <nav className="bg-[#FFFFFF] flex items-center w-auto h-auto px-32 gap-2 p-[6px] place-content-between">
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
        <div className="border rounded-md w-64 max-w-xs h-7 pb-1 pl-1 hover:border-gray-400 flex justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="placeholder:text-[10px] placeholder:text-gray-700 "
          />
          <span className="material-symbols-outlined text-black font-light text-xl hover:bg-slate-100 hover:text-blue-800 cursor-pointer pl-1 pr-6 w-6 h-[26px] hover:ring[1px] hover:rounded-md">
            search
          </span>
        </div>
      </div>

      <div className="text-black flex">
        {token ? (
          <>
            <div className=" border-[1px] border-[#3b49df] rounded-[3px] m-[1px] flex justify-center hover:bg-[#3b49df]">
              <Link
                to="/createPost"
                className="m-1 text-[10px] text-[#3b49df] px-1 hover:text-white hover:underline"
              >
                Create Post
              </Link>
            </div>
            <div>
              <a>
                <img src="" />
              </a>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link
                to="/login"
                className="m-2 text-[#404040] text-[10px] hover:bg-slate-100 p-[6px] rounded-[3px]  hover:text-[#3b49df] text hover:underline "
              >
                Log in
              </Link>
            </div>
            <div className=" border-[1px] border-[#3b49df] rounded-[3px] m-[1px] flex justify-center hover:bg-[#3b49df] ">
              <Link
                to="/createAccount"
                className="m-1 text-[10px] text-[#3b49df] px-1 hover:text-white hover:underline"
              >
                Create account
              </Link>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}
