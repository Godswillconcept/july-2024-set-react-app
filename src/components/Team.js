const Team = ({ name, title, department, level, image }) => {
  return (
    <div className="card ">
        <img className="card-img-top" src={image} alt={image} />
      <div className="card-body p-3">
        <h2 className="card-title">{name}</h2>
        <h5 className="card-title">{title}</h5>
        <p className="card-text italic">{department}</p>
        <p className="card-text capitalize">{level}</p>
      </div>
    </div>
  );
};

export default Team;
