import React from 'react';
import ProjectCard from './components/ProjectCard';
import './style.css';

export default function App() {
  const showCard = true;
  return (
    <div>
      {showCard ? (
        <>
          <ProjectCard name="Caleb" role="intern" />
          <ProjectCard name="abby" />
          <ProjectCard name="john" />
        </>
      ) : (
        <p>Empty</p>
      )}
    </div>
  );
}
