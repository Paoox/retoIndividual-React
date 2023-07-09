import { Link } from "react-router-dom";
import AssideIzq from "./AssideIzq/AssideIzq";
import PostHome from "./Posts-Home/PostHome";

export default function MainHome() {
  return (
    <section className="flex px-32 gap-3 my-3">
      <AssideIzq />
      <PostHome />
      <aside className="basis-[27%] bg-green-400">asside derecho</aside>
    </section>
  );
}
