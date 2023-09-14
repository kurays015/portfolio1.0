import { Link } from "react-router-dom";
import {
  DiJsBadge as JS,
  DiHtml5 as HTML,
  DiCss3 as CSS,
  DiGithubBadge,
  DiReact,
  DiGit,
} from "react-icons/di";
import { BiLogoTailwindCss, BiLogoLinkedinSquare } from "react-icons/bi";
// import img from "../assets/profile.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className=" flex items-center justify-center gap-40  text-gray-300 h-80vh">
        <div>
          <h1 className="text-5xl font-semibold text-start py-2">
            Front-End Developer
          </h1>
          <p className="font-medium">
            Hi, I'm Christ Emerald Narvarte, a passionate and aspiring front-end
            developer from the Philippines.
          </p>
          <div className="flex items-center">
            <Link to="https://github.com/kurays015" target="_blank">
              <DiGithubBadge className="text-3xl" />
            </Link>
            <Link
              to="https://www.linkedin.com/in/christ-narvarte-638351201/"
              target="_blank"
            >
              <BiLogoLinkedinSquare className="text-3xl" />
            </Link>
          </div>
          <div className="flex items-center gap-5 my-5">
            <h2 className="font-semibold">Tech Stack : </h2>
            <div className="hover:-translate-y-3 cursor-pointer transition-transform duration-500 ease-in-out">
              <HTML className="text-7xl text-orange-600 " />
            </div>
            <div className="hover:-translate-y-3 cursor-pointer transition-transform duration-500 ease-in-out">
              <CSS className="text-7xl text-blue-500" />
            </div>
            <div className="hover:-translate-y-3 cursor-pointer transition-transform duration-500 ease-in-out">
              <JS className="text-6xl text-yellow-300 mx-1" />
            </div>
            <div className="hover:-translate-y-3 cursor-pointer transition-transform duration-500 ease-in-out">
              <DiReact className="text-7xl text-cyan-400" />
            </div>
            <div className="hover:-translate-y-3 cursor-pointer transition-transform duration-500 ease-in-out">
              <DiGithubBadge className="text-7xl text-black" />
            </div>
            <div className="hover:-translate-y-3 cursor-pointer transition-transform duration-500 ease-in-out">
              <DiGit className="text-7xl text-orange-600" />
            </div>
            <div className="hover:-translate-y-3 cursor-pointer transition-transform duration-500 ease-in-out">
              <BiLogoTailwindCss className="text-7xl text-cyan-400" />
            </div>
          </div>
        </div>
        <div>
          <img
            src="https://placehold.co/600x400"
            alt="profile-image"
            className="w-80"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
