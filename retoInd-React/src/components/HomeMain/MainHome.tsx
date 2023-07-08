import { Link } from "react-router-dom";

export default function MainHome() {
  return (
    <section className="flex px-32 gap-3 my-3">
      <div className="basis-1/4 bg-red-400">asside izq</div>
      <div className="basis-[48%] bg-yellow-400">main</div>
      <div className="basis-[27%] bg-green-400">asside derecho</div>
    </section>
  );
}
