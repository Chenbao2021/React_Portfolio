import React, { useState } from 'react'
import Modal from "react-modal"

import { CgCloseR } from 'react-icons/cg'
import { GoLocation } from 'react-icons/go'
import { FaReact, FaNodeJs } from 'react-icons/fa'
import {SiFirebase } from 'react-icons/si'


import Modal_confirmation from '../../../global/modal_confirmation/Modal_confirmation'
import { easoftLogo } from '../../../../assets/images/iphone/iphoneMain';

import './IphoneJS.css'

interface iphoneJSProps {
    closeApp: React.Dispatch<React.SetStateAction<Boolean>>;
}
interface workIconProps {
  title: string;
  localisation: string;
  icon: any;
  techFrontIcon: React.ReactNode;
  techBackIcon: React.ReactNode;
  link: string;
  onClick: (link:string) => void;
}
const WorkIcon = (props: workIconProps) => {
  return(
    <div className='iphone-js-work-list-item-box' onClick={() => props.onClick(props.link)}>
      <div className="iphone-js-work-list-item-head">
        <img src={props.icon} alt='easoftLogo' className='iphone-js-work-list-item-icon'/>
        <div className="iphone-js-work-list-item-head-tech-icon">
          {props.techFrontIcon}
          {props.techBackIcon} 
        </div>
      </div>
      <div className="iphone-js-work-list-item-description">
        <p>{props.title}</p>
        <p><GoLocation /> {props.localisation}</p>
      </div>
    </div>
  )
}

function IphoneJS(props:iphoneJSProps) {
  const [clicked, setClicked] = useState<boolean>(false);
  const [link, setLink] = useState<string>("");

  const openModal = (link:string) => {
    setClicked(true);
    setLink(link)
  }
  const closeModal = () => {
    setClicked(false)
  }
  return ( 
    <div className='iphone-js-box' id='iphone-js-box'>
        <div className="iphone-js-head-box">
          <div className="iphone-js-head-buttons-box">
            <CgCloseR onClick={() => props.closeApp(false)} size={'10%'} color='black' className='iphone-js-back' />
          </div>
          <h1>Liste de mes projets</h1>
        </div>
        <div className="iphone-js-work-box">
          <p>Mes projets professionnelles</p>
          <div className="iphone-js-work-list-box">
              <WorkIcon 
                title="Kitchen display system" 
                localisation="EAsoft, Bobigny" 
                icon={easoftLogo} 
                techBackIcon={<FaNodeJs size={'50%'}/>} 
                techFrontIcon={<FaReact size={'50%'}/>}
                link="https://docs.google.com/document/d/1kSGe2BQIcf_2BkgN4J5VBr3NFNkFHDLUqLmB4IQHgIs/edit?usp=sharing"
                onClick = {openModal}
              />
              <WorkIcon 
                title="Systeme de fidélité" 
                localisation="EAsoft, Bobigny" 
                icon={easoftLogo} 
                techBackIcon={<SiFirebase size={'50%'}/>} 
                techFrontIcon={<FaReact size={'50%'}/>}
                link="https://docs.google.com/document/d/1aQVZiaMuHKkXNISCsnDh56mfp8wBEnebc2X7tLXbJNc/edit?usp=sharing"
                onClick = {openModal}
              />
          </div>
        </div>
        <div className="iphone-js-personal-box">
          <p>Mes projets personnelles</p>
        </div>

        <Modal_confirmation closeModal={closeModal} click={clicked} link={"https://docs.google.com/document/d/1kSGe2BQIcf_2BkgN4J5VBr3NFNkFHDLUqLmB4IQHgIs/edit?usp=sharing"} />
    </div>
  )
}

export default IphoneJS