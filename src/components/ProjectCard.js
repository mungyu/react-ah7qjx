import React from 'react';

function ProjectCard(props) {
  return (
    <>
      <h3>Project name is {props.name}</h3>
      <p>{props.role ?  props.role : 'No role'}</p>
    </>
  );
}

export default ProjectCard;
