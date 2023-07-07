import NavBar from "../components/NavBar";

export default function Login() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col text-neutral-200 ">
      <NavBar />
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
