export default function ContentCreatePost() {
  return (
    <section className="flex px-32 gap-3 ">
      <div className="basis-[5%]"></div>
      <div className="basis-[70%] bg-white rounded-md py-3">
        <div className="flex gap-2 px-3 py-1 flex-auto">
          <div className="flex-auto">
            <p className="text-[12px] font-bold">Nombre</p>
            <input
              type="text"
              className=" border-gray-600 border w-full rounded"
            />
          </div>
          <div className="flex-auto">
            <p className="text-[12px] font-bold">Apellido</p>
            <input
              type="text"
              className="border-gray-600 border w-full rounded"
            />
          </div>
        </div>
        <div className="flex-auto px-3">
          <p className="text-[12px] font-bold">Titulo del Post</p>
          <input
            type="text"
            className=" border-gray-600 border w-full rounded"
          />
        </div>
        <div className="p-3">
          <textarea
            name=""
            id=""
            cols="80"
            rows="5"
            className="border border-gray-500"
            placeholder="Escribe aqui tu Post"
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
              />
            </div>
            <div className="">
              <p className="text-[12px] font-bold">Titulo de tu imagen</p>
              <input
                type="text"
                className="border-gray-600 border w-full rounded"
              />
            </div>
          </div>
          <div className="flex-auto px-9">
            <div className="py-2">
              <p className="text-[12px] font-bold">Tiempo de lectura</p>
              <input type="text" className="border-gray-600 border  rounded" />
            </div>
            <div className="py-2">
              <p className="text-[12px] font-bold">Hashtags</p>
              <input type="text" className="border-gray-600 border rounded" />
            </div>
            <div className="py-2">
              <p className="text-xs">Tus Hashtags</p>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-[25%] ">
        <div className="mt-[40%]">
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
