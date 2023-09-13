import noImage from "../assets/noImage.png";
import portfolioImage from "../assets/ProjectImages/Portfolio.jpg";
import exoExplorerImage from "../assets/ProjectImages/ExoExplorer.jpg";
import chalmersDefenseImage from "../assets/ProjectImages/ChalmersDefense.png";
import cleverFoxImage from "../assets/ProjectImages/CleverFox.jpg";
import weAreAliveImage from "../assets/ProjectImages/WeAreAlive.jpg";
import RetroFootballImage from "../assets/ProjectImages/RetroFootball.png";
import InstantFootballImage from "../assets/ProjectImages/InstantFootball.png";
import ExoExplorer from "../components/Projects/ExoExplorer";
import WeAreAlive from "../components/Projects/WeAreAlive";
import { ProjectItem } from "../Types/ProjectsItem";
import RetroFootball from "../components/Projects/RetroFootball";
import InstantFootball from "../components/Projects/InstantFootball";

export const ProjectList = (): ProjectItem[] => [
  {
    id: 0,
    image: exoExplorerImage,
    projectCategory: "Personal",
    projectName: "Exo Explorer",
    projectDescription:
      "A procedurally generated space exploration simulation. This application has been designed to provide an immersive and dynamic space exploration experience, with a multitude of celestial bodies and ecosystems to explore.",
    projectLink: "/ExoExplorer",
    projectComponent: <ExoExplorer />,
    githubLink: "https://github.com/Danilll01/Kandidatarbete2023",
    skillsAndTools: "Unity, C#, GitHub",
  },
  {
    id: 1,
    image: weAreAliveImage,
    projectCategory: "Personal",
    projectName: "We Are Alive",
    projectDescription:
      "3D realistic story game taking place in the future where robots are a part of everyday life. But one day, the robots start showings signs of real human emotions, and society goes into panic mode. All robot models are called back and thrown into junkyards to be destroyed. You are one of these robots, you wake up damaged with missing parts, find some spare parts and get out of there! ",
    projectLink: "/WeAreAlive",
    projectComponent: <WeAreAlive />,
    githubLink: "https://github.com/ElinForsbergDev/We_Are_Alive",
    skillsAndTools: "Unity, C#, GitHub",
  },
  {
    id: 2,
    image: chalmersDefenseImage,
    projectCategory: "Personal",
    projectName: "Chalmers Defense!",
    projectDescription:
      "A 2D tower defense game with the theme of Chalmers vs Corona virus. Each tower represents a different program at Chalmers and they are fighting against the different variants of the corona virus. The player also has different tower upgrades available and some powerups that are essential for beating the corona bosses on higher rounds.",
    projectLink: "",
    projectComponent: <></>,
    githubLink: "https://github.com/ElinForsbergDev/Chalmers-Defense",
    skillsAndTools: "Java, JavaFX, GitHub",
  },
  {
    id: 3,
    image: cleverFoxImage,
    projectCategory: "Personal",
    projectName: "Listiga Räven! / Clever Fox!",
    projectDescription:
      "A 2D learning game for kids. Consists of different minigames teaching kids about math, words and creating music. Also consists of a memory game and a weather game where the kids have to dress a fox depending on real time weather. We used a weather API here to show the realtime weather for the player in their location",
    projectLink: "",
    projectComponent: <></>,
    githubLink: "https://github.com/Danilll01/DAT257-Group-Orup",
    skillsAndTools: "Unity, C#, API, GitHub",
  },

  {
    id: 4,
    image: portfolioImage,
    projectCategory: "Personal",
    projectName: "Portfolio",
    projectDescription: "Created the portfolio website you are currently on!",
    projectLink: "/",
    projectComponent: <></>,
    githubLink:
      "https://github.com/ElinForsbergDev/ElinForsbergDev.github.io/tree/master",
    skillsAndTools: "React, Typescript, HTML, CSS, GitHub",
  },
  {
    id: 5,
    image: RetroFootballImage,
    projectCategory: "Professional",
    projectName: "Retro Football",
    projectDescription:
      "A casino football betting game in retro style where the player can bet on ten different football matches. There are many markets to choose from and after completing the bets, the player can watch the ten matches play out simultaneously.",
    projectLink: "/RetroFootball",
    projectComponent: <RetroFootball />,
    githubLink: "",
    skillsAndTools: "C#, Unity, DevOps",
  },
  {
    id: 6,
    image: InstantFootballImage,
    projectCategory: "Professional",
    projectName: "Instant Premier Football",
    projectDescription:
      "An upgrade to Retro Football. A 3D football simulation casino game where the player can bet on different outcomes of up to 10 different football games in 4 different leagues that are generated in real time.",
    projectLink: "/InstantFootball",
    projectComponent: <InstantFootball />,
    githubLink: "",
    skillsAndTools: "C#, Unity, DevOps",
  },
];
