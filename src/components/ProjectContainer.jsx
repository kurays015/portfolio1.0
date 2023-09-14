import { myProjectsData } from "../ProjectsData";
import Footer from "./Footer";

const ProjectContainer = () => {
  return (
    <>
      {myProjectsData.map(
        (
          {
            id,
            codeLink,
            githubLogo,
            livePreviewLogo,
            livePreviewLink,
            projectDescription,
            projectTitle,
            projectImg,
          },
          index
        ) => (
          <section
            key={id}
            className={`text-white flex ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="flex items-center h-500px bg-gray-700 rounded-2xl m-4">
              <div className="bg-slate-900 m-2">
                <h1 className="text-3xl my-3 text-center">{projectTitle}</h1>
                <p className="max-w-xl text-center">{projectDescription}</p>
                <div className="flex gap-5 justify-center my-4">
                  <a
                    href={codeLink}
                    target="_blank"
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    Code{githubLogo}
                  </a>
                  <a
                    href={livePreviewLink}
                    target="_blank"
                    className="flex items-center gap-1 cursor-pointer"
                  >
                    Live Preview{livePreviewLogo}
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-r-2xl">
                <div className="w-500px h-500px ">
                  <a href={livePreviewLink} target="_blank">
                    <img
                      src={projectImg}
                      className={`cursor-pointer w-full h-auto transform translate-y-0 transition-transform duration-4 ease-in-out hover:-translate-y-30`}
                      alt="AniMuah"
                    />
                  </a>
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </>
  );
};
// text-white grid grid-cols-[repeat(auto-fill,minmax(650px,1fr))] gap-5 p-3
// transform translate-y-0 transition-transform duration-10000 ease-in-out hover:-translate-y-scrollUp

export default ProjectContainer;
