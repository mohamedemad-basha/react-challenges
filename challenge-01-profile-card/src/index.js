import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return (
    <img
      className="avatar"
      src="https://media-hbe1-2.cdn.whatsapp.net/v/t61.24694-24/417331174_1032693925004354_6707235814587309871_n.jpg?ccb=11-4&oh=01_Q5Aa5AGLoQ69aVPOaO_rF9DsWRfsUHcgqc7oGxnPG9twiEZuuQ&oe=6A772005&_nc_sid=5e03e0&_nc_cat=107"
      alt="Mohamed Basha"
    />
  );
}

function SkillList() {
  //  skills.map();

  return (
    <ul className="skill-list">
      {skills.map((skill) => (
        <Skill
          name={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.skill}
        />
      ))}
    </ul>
  );
}

function Skill({ name, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{name}</span>
      <span>
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>Mohamed Basha</h1>
      <p>
        Hi, I'm Mohamed, a passionate web development student from Egypt. I
        enjoy learning new technologies, solving programming problems, and
        building modern web applications. Currently, I'm focused on mastering
        React and working toward becoming a full-stack MERN developer. I believe
        that consistent practice is the key to improving every day.
      </p>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>,
);
