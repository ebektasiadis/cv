import "./App.css";
import ExperienceList from "./components/ExperienceList";
import Header from "./components/Header";
import Section from "./components/Section";
import SplitScreen from "./components/SplitScreen";
import { Experience } from "./types/experience";

const PROFILE_TEXT = `
I am a Full-Stack Web Developer specialized in websites and web
applications. I am skilled in JavaScript and its ES6 features. I
also have extensively worked with the MERN stack (MongoDB,
Express, React, Node).`;

const EXPERIENCE_INFORMATION: Experience[] = [
  {
    id: 1,
    position: "Full Stack Web Developer",
    employer: "Linked Business",
    city: "Athens (Remote)",
    startDate: new Date("11/01/2021"),
    endDate: "present",
    description: `Implemented a web-based data quality control application that our "data analysis" team could use in order to make sure that what the company serves to the customer is correct and updated both in terms of validity and completeness as well as to reduce the time and actions needed by the team to manually check the data.`,
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Docker",
      "Jest",
      "Cypress",
      "GitLab CI",
    ],
  },
  {
    id: 2,
    position: "Full-stack Web Developer",
    employer: "Hellenic Armed Forces",
    startDate: new Date("01/01/2021"),
    endDate: new Date("10/01/2021"),
    description: `Developed a warehouse management application for the military base I was in. A warehouse manager could insert new products, search them through filters or rent them to other people of the military base.`,
    skills: ["MongoDB", "Express", "React", "Node.js", "Docker"],
  },
  {
    id: 3,
    position: "Full Stack Web Developer",
    employer: "Linked Business",
    city: "Athens (Remote)",
    startDate: new Date("06/01/2020"),
    endDate: new Date("12/01/2020"),
    description: `Created from scratch a content management system that receives information from a variant of API endpoints, extracts certain parts of the information using JSONPath and automatically creates a dynamic sharable widgets (charts or data tables). These widgets can be later embedded to various websites. The viewers of the widgets have the option to embed it to their own website or even download an image of it in its current state (hidden labels e.t.c.).`,
    skills: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Redis",
      "Docker",
      "Jest",
      "GitHub Actions",
    ],
  },
  {
    id: 4,
    position: "Software Engineer",
    employer: "Linked Business",
    city: "Athens (Remote)",
    startDate: new Date("10/01/2019"),
    endDate: new Date("06/01/2020"),
    description: `Made an information extractor for the legal notices of Public Limited Companies that extracts both the distinctive and full title of the company, its registration number, and the administration team (VAT and role of each person in team). The hard part was that the notices lacked a distinct structure and had varying formats.`,
    skills: ["Java", "Maven", "MySQL"],
  },
  {
    id: 5,
    position: "Software Engineer",
    employer: "Linked Business",
    city: "Athens (Remote)",
    startDate: new Date("10/01/2018"),
    endDate: new Date("07/01/2019"),
    description: `Developed a Web Scraper with Selenium in Java that extracts and downloads all the legal notices about a certain company from the Government Gazette of the Hellenic Republic and stores them into a MySQL database. Using this tool, I managed to download and organize all the legal notices for the majority of companies residing in Greece.`,
    skills: ["Java", "Selenium", "PhantomJS", "Maven", "MySQL"],
  },
];

const VOLUNTEER_INFORMATION: Experience[] = [
  {
    id: 1,
    position: "Seminar Organizer",
    employer: "University of Thessaly",
    city: "Lamia",
    startDate: new Date("10/01/2018"),
    endDate: new Date("12/01/2018"),
    description: `I organized with the help of my professors, seminars to help other students to learn C (Pointers, Strings, Data Structures, File I/O) and advance their skills (Linked Lists, Trees, Generic functions, Recursive functions, Memory allocation)`,
    skills: ["C"],
  },
];

const INTERNSHIP_INFORMATION: Experience[] = [
  {
    id: 1,
    position: "Software Engineer",
    employer: "NCSR Demokritos",
    city: "Athens",
    startDate: new Date("07/01/2019"),
    endDate: new Date("08/01/2019"),
    description: `Named Entity Recognition And New Metrics For Big Economic Data`,
    skills: ["C"],
  },
];

const EDUCATION_INFORMATION: Experience[] = [
  {
    id: 1,
    position: "Computer Science and Biomedical Informatics",
    employer: "University of Thessaly",
    city: "Lamia",
    endDate: new Date("06/01/2020"),
    description: `Grade: 8.35/10`,
  },
];

const PERSONAL_DETAILS = {
  "Military obligations": "Fullfiled",
  GitHub: "ebektasiadis",
};

const HARD_SKILLS = [
  "React",
  "Node.js",
  "Javascript (ES6)",
  "Docker",
  "Git",
  "Java",
];

const LANGUAGES = ["Greek", "English"];

const mapArrayToBullets = (data: string[]) => (
  <ul>
    {data.map((d) => (
      <li className="pb-5 last:pb-0">{d}</li>
    ))}
  </ul>
);

const mapObjectToBullets = (data: any) => (
  <ul>
    {Object.entries(data).map(([key, value]: any) => (
      <li className="pb-5 last:pb-0" key={key}>
        <p className="text-darkgray">{key}</p>
        <p>{value}</p>
      </li>
    ))}
  </ul>
);

const left = (
  <div className="section-list">
    <Section
      header="Profile"
      children={<p className=" text-justify">{PROFILE_TEXT}</p>}
    />
    <Section
      header="Experience"
      children={<ExperienceList items={EXPERIENCE_INFORMATION} />}
    />
    <Section
      header="Volunteer"
      children={<ExperienceList items={VOLUNTEER_INFORMATION} />}
    />
    <Section
      header="Internship"
      children={<ExperienceList items={INTERNSHIP_INFORMATION} />}
    />
  </div>
);

const right = (
  <div className="section-list">
    <Section
      header="Personal details"
      children={mapObjectToBullets(PERSONAL_DETAILS)}
    />
    <Section header="Hard Skills" children={mapArrayToBullets(HARD_SKILLS)} />
    <Section header="Languages" children={mapArrayToBullets(LANGUAGES)} />
    <Section
      header="Education"
      children={<ExperienceList items={EDUCATION_INFORMATION} />}
    />
  </div>
);

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Header
        firstName="Efstratios"
        lastName="Bektasiadis"
        role="Full Stack Web Developer"
      />
      <SplitScreen left={left} right={right} />
    </div>
  );
}

export default App;
