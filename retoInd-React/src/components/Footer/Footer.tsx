import LiFooter from "./LiFooter";

export default function Footer() {
  return (
    <footer className=" mb-2 bg-[#E5E5E5] w-full h-auto">
      <div className="p-10">
        <div className=" lg:mx-48 flex  flex-col text-center ">
          <p className="text-gray-500 text-[9px] ">
            <a href="" className="text-[#3b49df] text-[11px]">
              Dev community
            </a>
            — A constructive and inclusive social network for software
            developers. With you every step of your journey.
          </p>
        </div>
        <div className="text-[#3b49df] text-[9px] flex flex-col text-center flex-wrap">
          <ul className="flex justify-center text-center flex-wrap">
            <LiFooter text="Home" />
            <LiFooter text="Listings" />
            <LiFooter text="Podcasts" />
            <LiFooter text="Videos" />
            <LiFooter text="Tags" />
            <LiFooter text="FAQ" />
            <LiFooter text="Forem Shop" />
            <LiFooter text="Sponsors" />
            <LiFooter text="About" />
            <LiFooter text="Contact" />
            <LiFooter text="Guides" />
            <li>
              <a href="">Software Comparisons</a>
            </li>
          </ul>
        </div>
        <div className="text-[#3b49df] text-[9px] flex flex-col text-center">
          <ul className="flex justify-center text-center flex-wrap">
            <LiFooter text="Code of conduct" />
            <LiFooter text="Privacy Policy" />
            <li>
              <a href="">Terms of use</a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-500 text-[9px] lg:mx-48 flex justify-center items-center text-center">
            Buil on&nbsp;
            <a href="" className="text-[#3b49df]">
              Forem
            </a>
            &nbsp; — the
            <a href="" className="text-[#3b49df]">
              &nbsp; open source
            </a>
            &nbsp; software that powers&nbsp;
            <a href="" className="text-[#3b49df]">
              DEV&nbsp;
            </a>
            &nbsp; and other inclusive comminities
          </p>
          <p className="text-gray-500 text-[9px] lg:mx-48 flex justify-center items-center text-center">
            Made with love and&nbsp;
            <a href="" className="text-[#3b49df]">
              Ruby on Rails.
            </a>
            &nbsp; Dev Community © 2016 - 2023
          </p>
        </div>
      </div>
    </footer>
  );
}
