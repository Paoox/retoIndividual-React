import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface LoginData {
  email: string;
  password: string;
}

export default function UserData() {
  const navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<LoginData>();

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
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
        theme="colored"
      />
      <form onSubmit={handleSubmit(onSubmit)} action="submit">
        <div className="flex flex-col">
          <label htmlFor="text" className="text-black text-[12px]">
            Email
          </label>
          <input
            type="email"
            className="border border-x-gray-400 w-full mt-1 mb-1 text-[10px] text-black p-2 rounded-md h-7"
            {...register("email", {
              required: { value: true, message: "email de usuario requerido" },
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
        </div>
      </form>
    </>
  );
}
