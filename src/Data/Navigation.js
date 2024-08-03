import Greetings from "../Components/Greetings/Greetings.jsx";

export default [
  {
    component: Greetings,
    path: "/",
    text: "Greetings",
  },
  {
    component: () => import("../Components/WorkExperience.jsx"),
    path: "/work-experience",
    text: "Work Experience",
  },
  {
    component: () => import("../Components/Education.jsx"),
    path: "/education",
    text: "Education",
  },
  {
    component: () => import("../Components/PersonalProjects.jsx"),
    path: "/personal-projects",
    text: "Personal Projects",
  },
  {
    component: () => import("../Components/OpenSourceProjects.jsx"),
    path: "/open-source-contributions",
    text: "Open Source Contributions",
  },
  {
    component: () => import("../Components/AchievementsAndCertificates.jsx"),
    path: "/achievement-and-certificates",
    text: "Achievements & Certificates",
  },
];
