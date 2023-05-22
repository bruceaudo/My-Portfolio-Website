"use client";
import React, { useEffect } from "react";

type SkillElProps = {
  text: string;
};

const skills = [
  { id: 0, name: "HTML" },
  { id: 1, name: "CSS" },
  { id: 2, name: "Javascript" },
  { id: 3, name: "NextJs" },
  { id: 4, name: "React" },
  { id: 5, name: "Data Structures" },
  { id: 6, name: "Algorithms" },
  { id: 7, name: "SQL" },
  { id: 8, name: "MongoDB" },
  { id: 9, name: "PostgreSQL" },
  { id: 10, name: "Git" },
  { id: 11, name: "Github" },
  { id: 12, name: "NestJs" },
  { id: 13, name: "Postman" },
];

const SkillEl: React.FC<SkillElProps> = ({ text }) => {
  return (
    <div className="flex items-center justify-center border rounded-full w-[200px] px-16 py-5">
      {text}
    </div>
  );
};

const Skills2: React.FC = () => {
  return (
    <div className="logos2 mt-10 overflow-hidden lg:max-w-[45rem] lg:mx-auto whitespace-nowrap flex gap-8 relative">
      {skills &&
        <div className="logo-slide2 gap-8">
          {skills.map(skill => <SkillEl key={skill.id} text={skill.name} />)}
        </div>}
      {skills &&
        <div className="logo-slide2 gap-8">
          {skills.map(skill => <SkillEl key={skill.id} text={skill.name} />)}
        </div>}
      {skills &&
        <div className="logo-slide2 gap-8">
          {skills.map(skill => <SkillEl key={skill.id} text={skill.name} />)}
        </div>}
      {skills &&
        <div className="logo-slide2 gap-8">
          {skills.map(skill => <SkillEl key={skill.id} text={skill.name} />)}
        </div>}
      {skills &&
        <div className="logo-slide2 gap-8">
          {skills.map(skill => <SkillEl key={skill.id} text={skill.name} />)}
        </div>}
      {skills &&
        <div className="logo-slide2 gap-8">
          {skills.map(skill => <SkillEl key={skill.id} text={skill.name} />)}
        </div>}
    </div>
  );
};
export default Skills2;
