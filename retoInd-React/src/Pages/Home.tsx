import NavHome from "../components/Navs/NavHome";
import Footer from "../components/Footer/Footer";
import MainHome from "../components/Home/MainHome";

export default function Home() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col text-neutral-200">
      <NavHome />
      <MainHome />
      <Footer />
    </main>
  );
}
