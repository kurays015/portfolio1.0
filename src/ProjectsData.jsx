import { DiGithubBadge } from "react-icons/di";
import { MdPreview } from "react-icons/md";

export const myProjectsData = [
  {
    id: 1,
    codeLink: "https://github.com/kurays015/Storeyfy",
    githubLogo: <DiGithubBadge className="text-3xl" />,
    livePreviewLogo: <MdPreview className="text-3xl" />,
    livePreviewLink: "https://storeyfy.vercel.app/",
    projectDescription:
      "Discover a minimalist e-commerce experience powered by React Query and DummyJSON API. Shop effortlessly, save favorites to your wishlist, filter products by category, and find items quickly with a robust search feature. Streamline your shopping with efficiency and elegance.",
    projectTitle: "Storeyfy",
    projectImg: "/imgs/Storeyfy.png",
    techStack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "ReactJS" },
    ],
  },

  {
    id: 2,
    codeLink: "https://github.com/kurays015/MovieFlix",
    githubLogo: <DiGithubBadge className="text-3xl" />,
    livePreviewLogo: <MdPreview className="text-3xl" />,
    livePreviewLink: "https://kurays015.github.io/MovieFlix",
    projectDescription:
      "MovieFlix is an immersive movie discovery app powered by the TMDb API. Explore a vast library of upcoming movies, read detailed synopsis, and watch thrilling trailers. Dive into the world of cinema with MovieFlix.",
    projectTitle: "MovieFlix",
    projectImg: "/imgs/MovieFlix-img.png",
    techStack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
  },
  {
    id: 3,
    codeLink: "https://github.com/kurays015/AniMuah2",
    githubLogo: <DiGithubBadge className="text-3xl" />,
    livePreviewLogo: <MdPreview className="text-3xl" />,
    livePreviewLink: "https://kurays015.github.io/AniMuah2/",
    projectDescription:
      "AniMuah is your gateway to the anime world, powered by the MyAnimeList (MAL) API. Discover thousands of upcoming and ongoing anime series, dive into their intriguing trailers, and embark on unforgettable journeys with AniMuah. Explore, watch, and immerse yourself in the world of anime.",
    projectTitle: "AniMuah",
    projectImg: "/imgs/AniMuah-img.png",
    techStack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
  },
  {
    id: 4,
    codeLink: "https://github.com/kurays015/PokeApp-React",
    githubLogo: <DiGithubBadge className="text-3xl" />,
    livePreviewLogo: <MdPreview className="text-3xl" />,
    livePreviewLink: "https://poke-app-react-two.vercel.app/",
    projectDescription:
      "PokéApp is your ultimate Pokédex companion. Explore the Pokémon universe, search for your favorite creatures across different generations, apply filters by type, and challenge yourself with a fun guessing game. Become a true Pokémon Master with PokéApp.",
    projectTitle: "PokéApp",
    projectImg: "/imgs/PokéApp-img.png",
    techStack: [
      { name: "HTML" },
      { name: "CSS" },
      { name: "JavaScript" },
      { name: "ReactJS" },
    ],
  },
];
