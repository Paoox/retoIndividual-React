import CardPost from "../Home/Posts-Home/CardPost";

export default function PostContent() {
  return (
    <section className=" basis-[80%]">
      <div>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--ToZbxUFF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9gl6twd8r59cvwqlllw7.jpg"
          alt="aiticle-DevTo"
          className="rounded-t-lg"
        />
      </div>
      <CardPost
        imgUser="https://res.cloudinary.com/practicaldev/image/fetch/s--maG37Ov1--/c_fill,f_auto,fl_progressive,h_50,q_auto,w_50/https://dev-to-uploads.s3.amazonaws.com/uploads/organization/profile_image/1/9a7650bd-c94f-4330-b5af-ef29fbec1a39.jpg"
        UserName="Sloan the DEV Moderador"
        DatePost="Posted on Jul 6"
        TitlePost="Welcome Thread - v232"
        reactions="18 Reactions"
      />
      <div className="p-3 bg-white text-xs ">
        <ol className="list-decimal text-black p-3 ">
          <li className="py-2">
            Leave a comment below to introduce yourself! You can talk about what
            brought you here, what you're learning, or just a fun fact about
            yourself.
          </li>
          <li className="py-2">
            Reply to someone's comment, either with a question or just a hello.
            👋
          </li>
          <li className="py-2">
            If you are new to coding, want to help beginners in their
            programming journey, or just want another awesome place to connect
            with fellow developers, check out the CodeNewbie Org!
          </li>
        </ol>
        <img
          src="https://picsum.photos/550/300"
          alt=""
          className="rounded-lg"
        />
        <p className="text-black py-2 leading-6">
          My name is Viktor Ardelean and I am happy to join this awesome <br />
          community! ✔️ I am a AWS Architect with 𝟗+ <br /> 𝐲𝐞𝐚𝐫𝐬 𝐨𝐟 𝐞𝐱𝐩𝐞𝐫𝐢𝐞𝐧𝐜𝐞
          and use my passion, skills, and experience to design and implement{" "}
          <br />
          top-of-the-line software solutions for businesses worldwide. ✔️ <br />
          𝐂𝐨𝐧𝐭𝐫𝐢𝐛𝐮𝐭𝐨𝐫 𝘁𝗼 𝘁𝗵𝗲 𝐉𝐚𝐯𝐚 <br />
          𝐒𝐩𝐫𝐢𝐧𝐠 𝐅𝐫𝐚𝐦𝐞𝐰𝐨𝐫𝐤, since I feel <br />
          it's moving the <br />
          bar in the current backend development. ✔️ <br />
          𝐓𝐞𝐜𝐡 𝐖𝐫𝐢𝐭𝐞𝐫 𝗳𝗼𝗿 𝘁𝗵𝗲 𝘄𝗲𝗹𝗹 <br />
          𝗸𝗻𝗼𝘄𝗻 𝗯𝗹𝗼𝗴 𝐁𝐚𝐞𝐥𝐝𝐮𝐧𝐠, a leading <br />
          resource for any developer working in Java.
        </p>
      </div>
    </section>
  );
}