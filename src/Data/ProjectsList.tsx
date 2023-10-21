import noImage from "../assets/noImage.png";
import portfolioImage from "../assets/ProjectImages/Portfolio.jpg";
import exoExplorerImage from "../assets/ProjectImages/ExoExplorer.jpg";
import chalmersDefenseImage from "../assets/ProjectImages/ChalmersDefense.png";
import cleverFoxImage from "../assets/ProjectImages/CleverFox.jpg";
import weAreAliveImage from "../assets/ProjectImages/WeAreAlive.jpg";
import RetroFootballImage from "../assets/ProjectImages/RetroFootball.png";
import InstantFootballImage from "../assets/ProjectImages/InstantFootball.png";
import Jackpot15Image from "../assets/ProjectImages/Jackpot15.png";
import PenaltyShootoutImage from "../assets/ProjectImages/PenaltyShootout.png";
import ExoExplorer from "../components/Projects/ExoExplorer";
import WeAreAlive from "../components/Projects/WeAreAlive";
import { ProjectItem } from "../Types/ProjectsItem";
import RetroFootball from "../components/Projects/RetroFootball";
import InstantFootball from "../components/Projects/InstantFootball";
import ChalmersDefense from "../components/Projects/ChalmersDefense";
import CleverFox from "../components/Projects/CleverFox";
import Jackpot from "../components/Projects/Jackpot";
import Penalty from "../components/Projects/Penalty";

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
      "3D realistic story game where robots are a part of everyday life. But one day, the robots start showings signs of emotions. All robot models are called back and thrown into junkyards to be destroyed. You are one of them, find a way to survive!",
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
      "A 2D tower defense game with the theme of Chalmers vs Corona virus. Each tower represents a different program at Chalmers and they are fighting against the different variants of the corona virus. ",
    projectLink: "/ChalmersDefense",
    projectComponent: <ChalmersDefense />,
    githubLink: "https://github.com/ElinForsbergDev/Chalmers-Defense",
    skillsAndTools: "Java, LibGDX, JUnit, GitHub",
  },
  {
    id: 3,
    image: cleverFoxImage,
    projectCategory: "Personal",
    projectName: "Listiga Räven! / Clever Fox!",
    projectDescription:
      "A 2D learning game for kids. It consists of different minigames teaching kids about math, words and music. It also consists of a memory game and a weather game about dressing a fox depending on real time weather by using an API.",
    projectLink: "/CleverFox",
    projectComponent: <CleverFox />,
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
    image: PenaltyShootoutImage,
    projectCategory: "Professional",
    projectName: "Penalty: From the Streets",
    projectDescription:
      "Football penalty game where you try to score against the goalkeeper. The more you score, the higher the multiplier gets. However, be aware, the goalkeeper can catch it and reset you at any moment!",
    projectLink: "/Penalty",
    projectComponent: <Penalty />,
    githubLink: "",
    skillsAndTools: "C#, Unity, DevOps",
  },
  {
    id: 6,
    image: Jackpot15Image,
    projectCategory: "Professional",
    projectName: "Jackpot 15",
    projectDescription:
      "A website application where the player can predict and see the outcomes of different sport matches. ",
    projectLink: "/Jackpot",
    projectComponent: <Jackpot />,
    githubLink: "",
    skillsAndTools: "React, TypeScript, C#, HTML, CSS, Material Design, DevOps",
  },
  {
    id: 7,
    image: InstantFootballImage,
    projectCategory: "Professional",
    projectName: "Instant Premier Football",
    projectDescription:
      "An upgrade to Retro Football. A 3D football simulation game where the player can predict different outcomes of up to 10 different football games in 4 different leagues that are generated in real time.",
    projectLink: "/InstantFootball",
    projectComponent: <InstantFootball />,
    githubLink: "",
    skillsAndTools: "C#, Unity, DevOps",
  },
  {
    id: 8,
    image: RetroFootballImage,
    projectCategory: "Professional",
    projectName: "Retro Football",
    projectDescription:
      "A football simulation game in retro style where the player can predict ten different football matches. There are many different prediction options and when the predictions are made, the player can watch the ten matches play out simultaneously.",
    projectLink: "/RetroFootball",
    projectComponent: <RetroFootball />,
    githubLink: "",
    skillsAndTools: "C#, Unity, DevOps",
  },
];
