import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Hollow from "../../assets/hollow-knight.png";
import burguer from "../../assets/burger-Menu-Icon.svg";

export default function NavHome() {
  return (
    <nav className="bg-[#FFFFFF] flex items-center w-full h-auto md:px-32 gap-2 p-[6px] place-content-between">
      <div className="flex gap-1">
        <span className="leading-6 block">
          <button
            className="mx-2 p-2 relative inline-block md:hidden"
            type="submit"
          >
            <img
              className="w-[24px] h-[24px]"
              src={burguer}
              alt="Burguer menu icon"
            />
          </button>
        </span>
        <div>
          <Link to="/">
            <img
              className="h-7 max-w-full"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DevTo"
            />
          </Link>
        </div>
        <div className="hidden md:block">
          <form
            action="submit"
            className=" border rounded-md w-64 max-w-xs h-7 pb-1 pl-1 hover:border-gray-400 flex justify-between"
          >
            <input
              type="text"
              placeholder="Search..."
              className="placeholder:text-[10px] placeholder:text-gray-700 "
            />
            <span className="material-symbols-outlined text-black font-light text-xl hover:bg-slate-100 hover:text-blue-800 cursor-pointer pl-1 pr-6 w-6 h-[26px] hover:ring[1px] hover:rounded-md">
              search
            </span>
          </form>
        </div>
      </div>
      <div className="text-black flex">
        <div className=" border-[1px] border-[#3b49df] rounded-[3px] m-[1px] flex justify-center hover:bg-[#3b49df] ">
          <Link
            to="/createPost"
            className="m-1 text-[10px] text-[#3b49df] px-1 hover:text-white hover:underline"
          >
            Create Post
          </Link>
        </div>
        <div className="mx-4 px-[3px] static hover:bg-slate-100 hover:rounded-md cursor-pointer">
          <FontAwesomeIcon icon={faBell} style={{ color: "#C5B8FF" }} />
        </div>
        <div className="p-1 bg-black rounded-[50%] hover:bg-gray-800 cursor-pointer">
          <img src={Hollow} alt="" className="h-5" />
        </div>
      </div>
    </nav>
  );
}
