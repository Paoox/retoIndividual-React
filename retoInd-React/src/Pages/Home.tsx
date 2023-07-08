import NavHome from "../components/Navs/NavHome";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col text-neutral-200  relative">
      <NavHome />
      <section></section>
      <Footer />
    </main>
  );
}
