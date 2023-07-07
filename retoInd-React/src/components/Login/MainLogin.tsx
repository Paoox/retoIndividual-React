import ButtonLogin from "./ButtonLogin";

export default function MainLogin() {
  return (
    <section className="mx-52 p-3  px-36">
      <div className="flex flex-col justify-center items-center bg-white rounded-md p-4">
        <h1 className="text-[#171717] text-[18px] font-bold">
          Welcome to DEV Community
        </h1>
        <p className="text-[#404040] text-[10px] mb-6">
          DEV Community is a community of 1,096,406 amazing developers
        </p>
        <ButtonLogin
          title="Apple"
          color="black"
          icon="https://upload.wikimedia.org/wikipedia/commons/1/1b/Apple_logo_grey.svg"
          text="Sign up with Apple"
        />
        <ButtonLogin
          title="Forem"
          color="black"
          icon="https://account.forem.com/assets/smiley-8750f55ac3131b76c24bab0d8a76c0ca4384a76efa121519b8c3164ba34a8e53.png"
          text="Sign up with Forem"
        />
      </div>
    </section>
  );
}
