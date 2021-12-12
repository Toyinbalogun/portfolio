import "./projectList.css";
import Project from "../project/Project";
import { projects } from "../../data";

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Projects...</h1>
        <p className="pl-desc">
          Browse projects I have worked on below.
        </p>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <Project
            key={item.id}
            img={item.img}
            link={item.link}
            para={item.para}
            git={item.git}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectList;
