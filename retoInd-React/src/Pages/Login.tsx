import NavBarLogin from "../components/Login/NavBarLogin";
import MainLogin from "../components/Login/MainLogin";

export default function Login() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col text-neutral-200 ">
      <NavBarLogin />
      <MainLogin />
    </main>
  );
}
