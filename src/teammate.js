import React from "react";

const Teammates = props => {
  return (
    <div className="teammate-list">
      {props.teammate.map(teammate => (
        <div className="teammate" key={teammate.name}>
          <h2>{teammate.name}</h2>
          <h3>{teammate.email}</h3>
          <h3>{teammate.role}</h3>

        </div>
      ))}
    </div>
  );
};

export default Teammates;