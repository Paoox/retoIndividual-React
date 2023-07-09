import AsideLeftDetailPost from "./AsideLeftDetailPost";
import PostContent from "./PostContent";

export default function MainDetailPost() {
  return (
    <aside className="flex px-32 gap-2 my-3">
      <AsideLeftDetailPost />
      <PostContent />
      <section className="bg-lime-500 basis-[30%]">user</section>
    </aside>
  );
}
