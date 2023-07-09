import { Link } from "react-router-dom";
import ButtonLogin from "../Login/ButtonLogin";
import github from "../../assets/github-Icon.svg";
import forem from "../../assets/forem.svg";
import twitter from "../../assets/tuwiter-Icon.svg";
import UserData from "../Login/UserData";

export default function MainAccountNew() {
  return (
    <section className="mx-52 p-3  px-36">
      <div className="bg-white rounded-md p-3">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-[#171717] text-[18px] font-bold">
            Welcome to DEV Community
          </h1>
          <p className="text-[#404040] text-[10px] mb-4">
            DEV Community is a community of 1,096,406 amazing developers
          </p>
          <ButtonLogin
            title="Apple"
            className="bg-[#171717]"
            icon="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg"
            text="Sign up with Apple"
          />
          <ButtonLogin
            title="Forem"
            className="bg-[#106274]"
            icon={forem}
            text="Sign up with Forem"
          />
          <ButtonLogin
            title="GitHub"
            className="bg-[#364146]"
            icon={github}
            text="Sign up with GitHub"
          />
          <ButtonLogin
            title="Twitter"
            className="bg-[#1da1f2]"
            icon={twitter}
            text="Sign up with Twitter"
          />
          <div className="mt-2 flex justify-center items-center">
            <div className="border-gray-300 border w-16 h-0"></div>
            <p className=" px-[4px] text-[7px] text-[#404040]">
              Do you want to create your account? enter email and password
            </p>
            <div className="border-gray-300 border w-20 h-0"></div>
          </div>
        </div>
        <form action="" className="items-start pt-3">
          <UserData text="Email" />
          <UserData text="Password" />
          <UserData text="Confirm your Password" />
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <p className="text-black text-[10px]">Remember me</p>
          </div>
          <Link to="/">
            <button
              type="submit"
              className="text-white  bg-[#3b49df] hover:bg-[#1E37FF] w-full mb-1 text-[12px] p-2 rounded-md flex justify-center mt-3"
            >
              Create Account
            </button>
          </Link>
        </form>
      </div>
    </section>
  );
}
