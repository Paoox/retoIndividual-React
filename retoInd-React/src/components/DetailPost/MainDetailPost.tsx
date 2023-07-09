import AsideLeftDetailPost from "./AsideLeftDetailPost";

export default function MainDetailPost() {
  return (
    <aside className="flex px-32 gap-3 my-3">
      <AsideLeftDetailPost />
      <section className="bg-violet-700 basis-[60%]">post</section>
      <section className="bg-lime-500 basis-[30%]">user</section>
    </aside>
  );
}
