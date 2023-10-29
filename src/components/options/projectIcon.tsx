import React, { ReactNode } from 'react';
import { IconType } from 'react-icons';
import './projectIcon.css';

interface projectIconProps {
  name: string,
  icon: ReactNode,
  path: string,
  setFocus?: React.Dispatch<React.SetStateAction<string>>;
}

const ProjectIcon: React.FC<projectIconProps> = (props: projectIconProps) => {
  const onClick = ():void => {
    if(props.setFocus) props.setFocus(props.name);
  }
  return (
    <div className="project-icon-container">
      <a href={props.path} className='project-icon-button' onClick={onClick} >
        {props.icon}
        <h3 className='project-title'>{props.name}</h3>
      </a>
    </div>
  )
}

export default ProjectIcon