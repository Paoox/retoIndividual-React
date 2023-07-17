import ButtonLogin from "./ButtonLogin";
import github from "../../assets/github-Icon.svg";
import forem from "../../assets/forem.svg";
import twitter from "../../assets/tuwiter-Icon.svg";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginData {
  email: string;
  password: string;
}

export default function MainLogin() {
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm<LoginData>();

  function onSubmit(data: LoginData) {
    fetch("http://localhost:8080/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: data.email,
        password: data.password,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log("response:", response);
        if (response?.data) {
          localStorage.setItem("token", response.data);
          // ? const token = localStorage.getItem("token");
          // ? localStorage.removeItem("token")
          navigate("/");
        } else {
          toast.warn("No se encontro al usuario");
        }
      })
      .catch(() => {
        toast.error("Error on fetch");
      });
  }

  return (
    <section className="lg:mx-52 lg:px-36  p-3 ">
      <div className="bg-white rounded-md p-3">
        <div className="flex flex-col justify-center items-center ">
          <h1 className="text-[#171717] text-3xl font-bold">
            Welcome to DEV Community
          </h1>
          <p className="text-[#404040] text-lg mb-4">
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
            <div className="border-gray-300 border w-20 h-0"></div>
            <p className=" px-[6px] text-xs text-[#404040]">
              Have a password? Continue with your email address
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
            <label htmlFor="text" className="text-black">
              Email
            </label>
            <input
              type="email"
              className="border border-x-gray-400 w-full mt-1 mb-1  text-black p-2 rounded-md h-9"
              {...register("email", {
                required: {
                  value: true,
                  message: "email de usuario requerido",
                },
              })}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="text" className="text-black">
              Password
            </label>
            <input
              type="password"
              className="border border-x-gray-400 w-full mt-1 mb-1 text-black p-2 rounded-md h-9"
              {...register("password", {
                required: {
                  value: true,
                  message: "Password de usuario requerido",
                },
              })}
            />
          </div>
          <div className="flex gap-2">
            <input type="checkbox" />
            <p className="text-black">Remember me</p>
          </div>
          <button
            type="submit"
            className="text-white  bg-[#3b49df] hover:bg-[#1E37FF] w-full mb-1 p-2 rounded-md flex justify-center mt-3"
          >
            Continue
          </button>
          <p className="text-[#3b49df] text-xs mt-3 text-center cursor-pointer">
            I forgot my password
          </p>
        </form>
      </div>
    </section>
  );
}
