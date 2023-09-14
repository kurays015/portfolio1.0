import Footer from "../components/Footer";
import ProjectContainer from "../components/ProjectContainer";
import PokeApp from "../assets/PokéApp-img.png";
import AniMuah from "../assets/AniMuah-img.png";
import MovieFlix from "../assets/MovieFlix-img.png";

const Project = () => {
  return (
    <>
      <ProjectContainer />
      {/* <section className="text-white flex">
        <div className="flex items-center h-500px bg-gray-700 rounded-2xl m-4">
          <div className="bg-slate-900 m-2">
            <h1 className="text-3xl my-3 text-center">Project Name</h1>
            <p className="max-w-xl text-center">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo
              dolor voluptas distinctio eos quos cumque molestiae sunt placeat
              itaque provident corrupti eligendi earum porro, iste voluptates
              similique aliquam quibusdam aperiam?
            </p>
            <div className="flex gap-5 justify-center my-4">
              <div>Code</div>
              <div>Live Preview</div>
            </div>
          </div>
          <div className="overflow-hidden rounded-r-2xl">
            <div className="w-500px h-500px ">
              <a href="#">
                <img
                  src={AniMuah}
                  className="cursor-pointer w-full h-auto transform translate-y-0 transition-transform duration-4 ease-in-out hover:translate-y-scrollUp"
                  alt="AniMuah"
                />
              </a>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default Project;
