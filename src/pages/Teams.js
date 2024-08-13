import Todos from "../components/Todos";
import React, { useState } from "react";
import appStyle from "../app.module.css"; // stylesheet as a module
import Team from "../components/Team";
import teams1 from "../gallery/gallery-1.jpg";
import teams2 from "../gallery/gallery-2.jpg";
import teams3 from "../gallery/gallery-3.jpg";
import teams4 from "../gallery/gallery-4.jpg";
import teams5 from "../gallery/gallery-5.jpg";
import teams6 from "../gallery/gallery-6.jpg";
export const Teams = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState(["Todo 1", "Todo 2"]);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };
  const buttonStyle = {
    border: "2px solid red",
    padding: "10px 20px",
    borderRadius: "10px",
    cursor: "pointer",
  };

  const teams = [
    {
      name: "John Doe",
      title: "Software Engineer",
      department: "Development",
      level: "Mid-level",
      image: teams1,
    },
    {
      name: "Emily Chen",
      title: "Cybersecurity Specialist",
      department: "Security",
      level: "Senior",
      image: teams2,
    },
    {
      name: "Raj Patel",
      title: "Network Administrator",
      department: "Infrastructure",
      level: "Junior",
      image: teams3,
    },
    {
      name: "Sarah Lee",
      title: "Data Analyst",
      department: "Business Intelligence",
      level: "Mid-level",
      image: teams4,
    },
    {
      name: "Michael Kim",
      title: "IT Project Manager",
      department: "Project Management",
      level: "Senior",
      image: teams5,
    },
  ];
  return (
    // <div>
    //   Teams page
    //   <Todos todos={todos} />
    //   count: {count} <br />
    //   <button
    //     onClick={incrementCount}
    //     className={appStyle.btnStyle}
    //   >
    //     Counter
    //   </button>
    // </div>
    <div className="container">
      <div className="row g-4">
        {teams.map(({ image, title, department, level, name }, i) => (
          <div className="col-4" key={i}>
            {
              <Team
                title={title}
                level={level}
                image={image}
                department={department}
                name={name}
              />
            }
          </div>
        ))}
      </div>
    </div>
  );
};
