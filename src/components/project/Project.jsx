import "./project.css";

const Project = ({img, link, para, git}) => {
  return (
    <div className="p">
       <div className="p-browser">
        <div className="p-circle"></div>
        <div className="p-circle"></div>
        <div className="p-circle"></div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="p-img"/>
      </a>
      <p className="para-desc">{para}</p>
      <a href={git} target="_blank" rel="noreferrer"><button>GitHub</button></a>
    </div>
  );
};

export default Project;
