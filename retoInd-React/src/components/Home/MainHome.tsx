import AssideIzq from "./AssideIzq/AssideIzq";
import PostHome from "./Posts-Home/PostHome";
import AssideDer from "./AssideDer/AsiddeDer";

export default function MainHome() {
  return (
    <section className="flex lg:px-32 gap-3 my-3">
      <AssideIzq />
      <PostHome />
      <AssideDer />
    </section>
  );
}
