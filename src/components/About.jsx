import React from "react";
import AboutItem from "./AboutItem";
import AboutItem2 from "./AboutItem2";

const data1 = [
  {
    year: 2017,
    title: "S.S.C",
    duration: "",
    details: "Completed my Secondary Education from Maharashtra State Board",
  },
  {
    year: 2019,
    title: "H.S.C",
    duration: "2 Years",
    details:
      "Completed my Higher Secondary Education in the field of Science from Maharashtra State Board  ",
  },
  {
    year: 2022,
    title: "B.S.c ( CS )",
    duration: "3 Years",
    details:
      "Completed my Graduation from Mumbai University with Computer Science major",
  },
  {
    year: 2024,
    title: "M.S.c ( CS )",
    duration: "",
    details:
      "Currently pursuing my Masters in Computer Science from Mumbai University",
  }
];

const data2 = [
  {
    title: "Web",
    details: "Html, CSS, JavaScript, Node.js, React.js, Vite.js, TailwindCSS, Django",
  },
  {
    title: "Languages",
    details: "Java, Python",
  },
  {
    title: "Database",
    details: "MongoDb, MySQL.",
  },
  {
    title: "Tools",
    details: "Git, Power BI Cisco Packet Tracer, Proteus, Arduino IDE",
  },
];

export default function About() {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-5">
        Education
      </h1>
      {data1.map((item, idx) => (
        <AboutItem
          key={idx}
          year={item.year}
          title={item.title}
          title2={item.title2}
          duration={item.duration}
          details={item.details}
          details2={item.details2}
        />
      ))}
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-5">
        Skills
      </h1>
      {data2.map((item, idx) => (
        <AboutItem2
          key={idx}
          title={item.title}
          details={item.details}
        />
      ))}
      
    </div>
  );
}