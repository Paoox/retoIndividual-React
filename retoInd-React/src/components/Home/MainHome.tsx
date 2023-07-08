import { Link } from "react-router-dom";
import AssideIzq from "./AssideIzq/AssideIzq";

export default function MainHome() {
  return (
    <section className="flex px-32 gap-3 my-3">
      <AssideIzq />
      <main className="basis-[48%] bg-yellow-400">main</main>
      <aside className="basis-[27%] bg-green-400">asside derecho</aside>
    </section>
  );
}
