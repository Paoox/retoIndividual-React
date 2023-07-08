import MenuAssideIzq from "./MenuAssideIzq";

export default function AssideIzq() {
  return (
    <aside className="basis-1/4">
      <MenuAssideIzq icon="🏠" text="Home" />
      <MenuAssideIzq icon="📜" text="Listings" />
      <MenuAssideIzq icon="🎙" text="Podcasts" />
    </aside>
  );
}
