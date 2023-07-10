import NavHome from "../components/Navs/NavHome";
import MainDetailPost from "../components/DetailPost/MainDetailPost";
import Footer from "../components/Footer/Footer";

export default function Login() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col text-neutral-200 ">
      <NavHome />
      <MainDetailPost />
      <Footer />
    </main>
  );
}
