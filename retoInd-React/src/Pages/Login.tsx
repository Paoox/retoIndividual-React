export default function Login() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col text-neutral-200 ">
      <nav className="bg-[#FFFFFF] flex items-center w-auto h-auto px-32 gap-2 p-[6px] place-content-between">
        <div className="flex gap-1">
          <img
            className="h-7"
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/logos/resized_logo_UQww2soKuUsjaOGNB38o.png"
            alt="DevTo"
          />
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
          <div>
            <a
              href=""
              className="m-2 text-[#404040] text-[10px] hover:bg-slate-100 p-[6px] rounded-[3px]  hover:text-[#3b49df] text hover:underline "
            >
              Log in
            </a>
          </div>
          <div className=" border-[1px] border-[#3b49df] rounded-[3px] m-[1px] flex justify-center hover:bg-[#3b49df] ">
            <a
              href=""
              className="m-1 text-[10px] text-[#3b49df] px-1 hover:text-white hover:underline"
            >
              Create account
            </a>
          </div>
        </div>
      </nav>
      <section className="mx-52 p-3  px-36">
        <div className="flex flex-col justify-center items-center bg-white rounded-md p-4">
          <h1 className="text-[#171717] text-[18px] font-bold">
            Welcome to DEV Community
          </h1>
          <p className="text-[#404040] text-[10px]">
            DEV Community is a community of 1,096,406 amazing developers
          </p>
          <button
            type="submit"
            className="text-white bg-black w-full my-4 text-[10px] p-2 rounded-md flex justify-center gap-2"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg"
              className="w-3"
              alt=""
            />
            Sign up with Apple
          </button>
        </div>
      </section>
    </main>
  );
}
