export default function Login() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col text-neutral-200 gap-10">
      <nav className="bg-[#FFFFFF] flex w-auto h-auto px-32 gap-2 p-1">
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
      </nav>
      <section>inputs</section>
    </main>
  );
}
