import ButtonLogin from "../Login/ButtonLogin";
import github from "../../assets/github-Icon.svg";
import forem from "../../assets/forem.svg";
import twitter from "../../assets/tuwiter-Icon.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface createAccountData {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
}

export default function MainAccountNew() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<createAccountData>();

  function onSubmit(data: createAccountData) {
    fetch("http://localhost:8080/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        email: data.email,
        password: data.password,
        profilePicture: data.profilePicture,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response:", response);
        if (response?.data._id) {
          localStorage.setItem("token", response.data._id);
          // ? const token = localStorage.getItem("token");
          // ? localStorage.removeItem("token")
          navigate("/");
        } else {
          toast.warn("Usuario no encontrado");
        }
      })
      .catch(() => {
        toast.error("Error en el fetch");
      });
  }

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
        <ToastContainer />
        <form
          action="submit"
          onSubmit={handleSubmit(onSubmit)}
          className="items-start pt-3"
        >
          <div className="flex flex-col">
            <label htmlFor="text" className="text-black text-[12px]">
              Name
            </label>
            <input
              type="text"
              className="border border-x-gray-400 w-full mt-1 mb-1 text-[10px] text-black p-2 rounded-md h-7"
              {...register("name", {
                required: {
                  value: true,
                  message: " El nombre de usuario requerido",
                },
              })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="text-black text-[12px]">
              Email
            </label>
            <input
              type="email"
              className="border border-x-gray-400 w-full mt-1 mb-1 text-[10px] text-black p-2 rounded-md h-7"
              {...register("email", {
                required: {
                  value: true,
                  message: "email de usuario requerido",
                },
              })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="text-black text-[12px]">
              Password
            </label>
            <input
              type="password"
              className="border border-x-gray-400 w-full mt-1 mb-1 text-[10px] text-black p-2 rounded-md h-7"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password de usuario requerido",
                },
              })}
            />
            <div className="flex flex-col">
              <label htmlFor="text" className="text-black text-[12px]">
                Picture Profile
              </label>
              <input
                type="text"
                className="border border-x-gray-400 w-full mt-1 mb-1 text-[10px] text-black p-2 rounded-md h-7"
                {...register("profilePicture", {
                  required: {
                    value: true,
                    message: "imagen de usuario requerido",
                  },
                })}
              />
            </div>
          </div>
          <div className="flex gap-2">
            <input type="checkbox" name="" id="" />
            <p className="text-black text-[10px]">Remember me</p>
          </div>
          <button
            type="submit"
            className="text-white  bg-[#3b49df] hover:bg-[#1E37FF] w-full mb-1 text-[12px] p-2 rounded-md flex justify-center mt-3"
          >
            Create Account
          </button>
        </form>
      </div>
    </section>
  );
}
