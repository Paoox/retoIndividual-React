import NavBarLogin from "../components/Navs/NavBarLogin";
import MainLogin from "../components/Login/MainLogin";
import Footer from "../components/Footer/Footer";

export default function Login() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col text-neutral-200 ">
      <NavBarLogin />
      <MainLogin />
      <Footer />
    </main>
  );
}
