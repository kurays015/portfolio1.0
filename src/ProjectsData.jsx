import { DiGithubBadge } from "react-icons/di";
import { MdPreview } from "react-icons/md";
import PokeApp from "./assets/PokéApp-img.png";
import AniMuah from "./assets/AniMuah-img.png";
import MovieFlix from "./assets/MovieFlix-img.png";

export const myProjectsData = [
  {
    id: 1,
    codeLink: "https://github.com/kurays015/PokeApp-React",
    githubLogo: <DiGithubBadge className="text-3xl" />,
    livePreviewLogo: <MdPreview className="text-3xl" />,
    livePreviewLink: "https://poke-app-react-two.vercel.app/",
    projectDescription:
      "A PokéDex App that allows user to search their favorite pokemons in different generations, filter types, and play a guessing game.",
    projectTitle: "PokéApp",
    projectImg: PokeApp,
  },

  {
    id: 2,
    codeLink: "https://github.com/kurays015/MovieFlix",
    githubLogo: <DiGithubBadge className="text-3xl" />,
    livePreviewLogo: <MdPreview className="text-3xl" />,
    livePreviewLink: "https://kurays015.github.io/MovieFlix",
    projectDescription:
      "MovieFlix app is made using TMDb API, you can search upcoming movies, read synopsis, and watch their trailer.",
    projectTitle: "MovieFlix",
    projectImg: MovieFlix,
  },
  {
    id: 3,
    codeLink: "https://github.com/kurays015/AniMuah2",
    githubLogo: <DiGithubBadge className="text-3xl" />,
    livePreviewLogo: <MdPreview className="text-3xl" />,
    livePreviewLink: "https://kurays015.github.io/AniMuah2/",
    projectDescription:
      "AniMuah app is made using MyAnimeList (MAL) API. You can search thousands of upcoming and ongoing animes, and watch trailer.",
    projectTitle: "AniMuah",
    projectImg: AniMuah,
  },
];
