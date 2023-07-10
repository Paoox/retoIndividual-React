import NavCreatedPost from "../components/CreatedPost/NavCreatedPost";
import ContentCreatePost from "../components/CreatedPost/ContentCreatePost";

export default function CreatePost() {
  return (
    <main className="bg-[#F5F5F5] min-h-screen flex flex-col ">
      <NavCreatedPost />
      <ContentCreatePost />
    </main>
  );
}
