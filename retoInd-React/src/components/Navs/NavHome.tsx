import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-solid-svg-icons";
import Hollow from "../../assets/hollow-knight.png";
import Dropdown from "./Dropdown";
import { useState , useEffect} from "react";
import SearchBar from "./SearchBar";

let postsData= {}



export default function NavHome() {
  const [text, setText] = useState("")
 

  function logOut() {
    localStorage.removeItem("token");
    localStorage.removeItem("id");
    localStorage.removeItem("postId");
  }

  
  
  return (
    <nav className="bg-[#FFFFFF] flex items-center w-full h-auto md:px-10 p-[4px] place-content-between">
      <div className="flex gap-1">
        <div className=" inline-block text-left">
          <Dropdown />
        </div>
        <div className=" py-1">
          <Link to="/">
            <img
              className="h-10 max-w-full"
              src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
              alt="DevTo"
            />
          </Link>
        </div>
        <SearchBar /* text={text} setText={setText}  *//>
      </div>
      <div className="text-black flex">
        <div className=" hidden md:flex border-[1px] border-[#3b49df] rounded-lg m-[1px]  justify-center hover:bg-[#3b49df] ">
          <Link
            to="/createPost"
            className="m-1  text-[#3b49df] px-1 hover:text-white hover:underline"
          >
            Create Post
          </Link>
        </div>
        <div className=" flex items-center mx-4 px-[3px] static hover:bg-slate-100 hover:rounded-md cursor-pointer">
          <FontAwesomeIcon icon={faBell} style={{ color: "#C5B8FF" }} />
        </div>

        <div className="dropdown p-1 bg-black rounded-[50%] hover:bg-gray-800 cursor-pointer">
          <label tabIndex={0}>
            <img src={Hollow} alt="" className="h-7" />
          </label>
          <Link to="/login" onClick={logOut}>
            <span
              tabIndex={0}
              className="dropdown-content right-3 menu p-[1px]  rounded-box w-6"
            >
              <a className=" text-blue-800 flex p-[1px] font-bold ">
                Logout
              </a>
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
