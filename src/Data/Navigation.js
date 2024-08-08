import Greetings from "../Components/Greetings/Greetings.jsx";
import WorkExperience from "../Components/WorkExperience/WorkExperience.jsx";
import Education from "../Components/Education.jsx";
import PersonalProjects from "../Components/PersonalProjects/PersonalProjects.jsx";
import OpenSourceContributions from "../Components/OpenSource/OpenSource.jsx";
import AchievementsAndCertificates from "../Components/AchievementsAndCertificates/AchievementsAndCertificates.jsx";

export default [
  {
    component: Greetings,
    path: "/",
    text: "Greetings",
  },
  {
    component: WorkExperience,
    path: "/work-experience",
    text: "Work Experience",
  },
  {
    component: Education,
    path: "/education",
    text: "Education",
  },
  {
    component: PersonalProjects,
    path: "/personal-projects",
    text: "Personal Projects",
  },
  {
    component: OpenSourceContributions,
    path: "/open-source-contributions",
    text: "Open Source Contributions",
  },
  {
    component: AchievementsAndCertificates,
    path: "/achievement-and-certificates",
    text: "Achievements & Certificates",
  },
];
