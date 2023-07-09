import NavBarLogin from "../components/Navs/NavBarLogin";
import MainAccountNew from "../components/NewAccount/MainAccountNew";
import Footer from "../components/Footer/Footer";

export default function CreateAccount() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col text-neutral-200 ">
      <NavBarLogin />
      <MainAccountNew />
      <Footer />
    </main>
  );
}
