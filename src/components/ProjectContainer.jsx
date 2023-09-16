import { myProjectsData } from "../ProjectsData";

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
            techStack,
          },
          index
        ) => (
          <section
            key={id}
            className={`text-white flex mx-20 my-10 ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="flex items-center h-400px bg-slate-800 rounded-2xl shadow-customShadow">
              <div className="m-4 w-400px">
                <h1 className="text-3xl my-3 text-center font-bold">
                  {projectTitle}
                </h1>
                <p className="max-w-xl text-center text-lg text-gray-600 dark:text-gray-400">
                  {projectDescription}
                </p>
                <div className="flex gap-5 justify-center my-3">
                  {techStack.map(({ name }, index) => (
                    <div
                      className="bg-slate-600 py-1 px-3 font-semibold rounded-md shadow-textStackShadow"
                      key={index}
                    >
                      {name}
                    </div>
                  ))}
                </div>
                <div className="flex gap-5 justify-center">
                  <a
                    href={codeLink}
                    target="_blank"
                    className="flex items-center gap-1 cursor-pointer text-slate-400 hover:text-gray-300"
                  >
                    Code{githubLogo}
                  </a>
                  <a
                    href={livePreviewLink}
                    target="_blank"
                    className="flex items-center gap-1 cursor-pointer text-slate-400 hover:text-gray-300"
                  >
                    Live Preview{livePreviewLogo}
                  </a>
                </div>
              </div>
              <div className="overflow-hidden rounded-r-2xl">
                <div className="w-500px h-400px ">
                  <a href={livePreviewLink} target="_blank">
                    <img
                      src={projectImg}
                      className={`cursor-pointer w-full h-auto ${
                        index === 0
                          ? "pokeApp"
                          : index === 1
                          ? "movieFlix"
                          : index === 2
                          ? "animuah"
                          : ""
                      }`}
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
