export default function AsideRightDetailPost() {
  return (
    <section className=" basis-[30%] ">
      <div className="bg-white rounded-md p-3 border-t-black border-t-[25px] relative">
        <div className="flex gap-1 items-end absolute top-[-14px]">
          <img
            src="https://res.cloudinary.com/practicaldev/image/fetch/s--h1q5i4Pl--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/9a7650bd-c94f-4330-b5af-ef29fbec1a39.jpg"
            alt="DevTeam"
            className="h-7 rounded-sm "
          />
          <p className="text-gray-700 text-xs font-semibold">The DEV Team</p>
        </div>
        <button
          type="submit"
          className="bg-sky-800 w-full rounded text-white text-[9px] p-[6px] my-3"
        >
          Follow
        </button>
        <p className="text-gray-600 text-[10px] my-3">
          The hardworking team behind DEV ❤️
        </p>
        <p className="text-gray-600 text-[10px] my-3">
          Want to contribute to open source and help make the DEV community
          stronger? The code that powers DEV is called Forem and is freely
          available on GitHub. You're welcome to jump in!
        </p>
        <button className="text-[9px] p-[6px] text-gray-500 border border-slate-600 w-full rounded-sm">
          Contribute to Forem
        </button>
      </div>
    </section>
  );
}
