import "./App.css";
import ExperienceList from "./components/ExperienceList";
import Header from "./components/Header";
import Section from "./components/Section";
import SplitScreen from "./components/SplitScreen";
import {
  PROFILE,
  EXPERIENCE,
  VOLUNTEER,
  INTERNSHIP,
  PERSONAL_DETAILS,
  HARD_SKILLS,
  LANGUAGES,
  EDUCATION,
} from "./constants";

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
      children={<p className=" text-justify">{PROFILE}</p>}
    />
    <Section
      header="Experience"
      children={<ExperienceList items={EXPERIENCE} />}
    />
    <Section
      header="Volunteer"
      children={<ExperienceList items={VOLUNTEER} />}
    />
    <Section
      header="Internship"
      children={<ExperienceList items={INTERNSHIP} />}
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
      children={<ExperienceList items={EDUCATION} />}
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
