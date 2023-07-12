import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContentCreatePost() {
  const navigate = useNavigate();

  const { handleSubmit, register } = useForm();

  function onSubmit(data) {
    fetch("http://localhost:8080/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: data.title,
        content: data.content,
        image: data.image,
        time: data.time,
        tags: data.tags,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("response: ", res);
        if (res?.token) {
          localStorage.setItem("token", res.token);
          /* const token = localStorage.getItem("token"); */
          navigate("/dashboard");
        } else {
          toast.error("token no encontrado");
        }
      })
      .catch(() => {
        toast.error("A donde cainal, no pasas prro");
      });
  }

  return (
    <section className="flex lg:px-32 gap-3 ">
      <form action="submit" onSubmit={handleSubmit(onSubmit)}>
        <div className=" lg:basis-[70%] bg-white rounded-md py-3">
          <div className="flex-auto px-3">
            <p className="text-[12px] font-bold">Titulo del Post</p>
            <input
              type="text"
              className=" border-gray-600 border w-full rounded"
              {...register("Titulo", {
                required: {
                  value: true,
                  message: "email de usuario requerido",
                },
              })}
            />
          </div>
          <div className="p-3">
            <textarea
              name=""
              id=""
              cols={35}
              rows={5}
              className="border"
              placeholder="Escribe aqui tu Post"
              {...register("text area", {
                required: {
                  value: true,
                  message: "email de usuario requerido",
                },
              })}
            ></textarea>
          </div>
          <div className="flex px-3 gap-2">
            <div className="flex-auto">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2jkk1p99Jxhrh2FyfpXVnCjO21nzque4aLg&usqp=CAU"
                alt=""
                className="border border-gray-500 w-full rounded-md "
              />
              <div className="my-2">
                <p className="text-[12px] font-bold">Url de tu imagen</p>
                <input
                  type="text"
                  className="border-gray-600 border w-full rounded"
                  {...register("img", {
                    required: {
                      value: true,
                      message: "email de usuario requerido",
                    },
                  })}
                />
              </div>
              <div className="">
                <p className="text-[12px] font-bold">Titulo de tu imagen</p>
                <input
                  type="text"
                  className="border-gray-600 border w-full rounded"
                  {...register("tituloImg", {
                    required: {
                      value: true,
                      message: "email de usuario requerido",
                    },
                  })}
                />
              </div>
            </div>
            <div className="flex-auto px-9">
              <div className="py-2">
                <p className="text-[12px] font-bold">Tiempo de lectura</p>
                <input
                  type="text"
                  className="border-gray-600 border  rounded"
                  {...register("time", {
                    required: {
                      value: true,
                      message: "email de usuario requerido",
                    },
                  })}
                />
              </div>
              <div className="py-2">
                <p className="text-[12px] font-bold">Hashtags</p>
                <input
                  type="text"
                  className="border-gray-600 border rounded"
                  {...register("tags", {
                    required: {
                      value: true,
                      message: "email de usuario requerido",
                    },
                  })}
                />
              </div>
              <div className="py-2">
                <p className="text-xs">Tus Hashtags</p>
              </div>
              <button className="bg-blue-700 p-2 pr-4 pl-4 rounded-md text-sm hover:bg-blue-800 text-white font-semibold">
                Crear
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="hidden md:flex md:basis-[25%] ">
        <div className="mt-[80%]">
          <p className="text-[12px] font-bold text-gray-900 my-2">
            Writing a Great Post Title
          </p>
          <p className="text-[12px] text-gray-800">
            Think of your post title as a super short (but compelling!)
            description — like an overview of the actual post in one short
            sentence. Use keywords where appropriate to help ensure people can
            find your post by search.
          </p>
        </div>
      </div>
    </section>
  );
}
