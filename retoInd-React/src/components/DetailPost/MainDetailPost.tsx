import AsideLeftDetailPost from "./AsideLeftDetailPost";
import PostContent from "./PostContent";
import AsideRightDetailPost from "./AsideRightDetailPost";

export default function MainDetailPost() {
  return (
    <aside className="flex w-full lg:px-32 gap-2 my-3">
      <AsideLeftDetailPost />
      <PostContent />
      <AsideRightDetailPost />
    </aside>
  );
}
