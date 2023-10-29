import React from 'react'
import { CgCloseR } from 'react-icons/cg'
import { GoLocation } from 'react-icons/go'
import { FaComputerMouse, FaReact } from "react-icons/fa6";
import { MdDraw, MdLanguage, MdSportsGymnastics } from "react-icons/md";
import {BsFillAirplaneFill} from 'react-icons/bs';
import { GiMeditation } from 'react-icons/gi';

import IphoneCVBottomBar from './IphoneCVBottomBar/IphoneCVBottomBar'
import { avatar } from '../../../../assets/images/iphone/iphoneMain'

import Colors from '../../../../constants/theme'

import './IphoneCV.css'
interface iphoneCvProps {
    closeApp: React.Dispatch<React.SetStateAction<Boolean>>;
}

interface buttonProps {
    title: string;
    selected : string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;

}
interface iphoneCVBarButtonProps {
    title: string;
    description : React.JSX.Element;
}
const IphoneCVBarButton = (props:buttonProps) => {
    return (
        <div 
            className='iphone-cv-body-bar-button-box' 
            style={{ backgroundColor: props.selected === props.title ? Colors.primary : Colors.lightWhite }}
            onClick={() => { props.setSelected(props.title) }}
        >
            <p>{props.title}</p>
        </div>
    )
}
const IphoneCVSelectedInformation = (props: iphoneCVBarButtonProps) => {
    return (
        <>
            <h1>{props.title}</h1>
            <p className='iphone-cv-body-selected-information-details'>
                {props.description}
            </p>
        </>
    )
}
function IphoneCV(props:iphoneCvProps) {
    const [selected, setSelected] = React.useState<string>("A propo");
    const About = {
        title: "A propo",
        description: <>
                        Titulaire d'un diplôme d'ingénieur en informatique (BAC + 5). <br/>
                        Je suis à la recherche d'une opportunité en CDI en développement du  front-end ou mobile(React Native). 
                        <br />
                        J'ai 2 ans de pratique en beaux-arts et une passion pour le design UI et le développement front-end.
                    </>
    }
    const Comptétences = {
        title: "Compétences",
        description: <>
                        <FaComputerMouse />:Bonne pratiques en plusieurs langages: JS, Python, Java, etc.
                        <br /><br />
                        <FaReact />:Expérience professionnelle de <em>1.5</em> ans en React Native
                        <br /><br />
                        <MdDraw />:Plusieurs années de pratique en beaux-arts 
                        <br /><br />
                        <MdLanguage />:Niveau professionnel à l'écrit et à l'oral en chinois,français.
                                        et bon niveau à l'écrit en anglais et espagnole.
                    </>
    }
    const Plus = {
        title: "Plus",
        description: <>
                        <BsFillAirplaneFill />:J'ai vécu 10 ans en Chine, 5 ans en Espagne, et depuis 10 ans en France.
                        <br /><br />
                        <MdSportsGymnastics />: J'ai deux ans d'expérience en pratique sportive chez Basic Fit, ainsi que un an d'expérience en Nunchaku.
                        <br /><br />
                        <GiMeditation />: Compétence en gestion émotionnelle, préférence pour le travail en équipe plutôt qu'en individuel, et préférence pour le travail en présentiel plutôt qu'en distanciel.
                    </>
    }
  return (
    <div className='iphone-cv-box'>
        <div className="iphone-cv-buttons">
            <CgCloseR onClick={() => props.closeApp(false)} size={'4vh'} color='black' />
        </div>
        <div className="iphone-cv-informations">
            <div className="iphone-cv-head">
                <img src={avatar} alt="avatar" className='iphone-cv-head-avatar'/>
                <div className="iphone-cv-personal-informations">
                    <p className='iphone-cv-personal-informations-title'>React Native Developer</p>
                    <p className='iphone-cv-personal-informations-additional'> Javascript/ <GoLocation /><em>Paris</em></p>
                </div>
            </div>
            <div className="iphone-cv-body">
                <div className="iphone-cv-body-bar">
                    <IphoneCVBarButton title="A propo" selected={selected} setSelected={setSelected}/>
                    <IphoneCVBarButton title="Compétences" selected={selected} setSelected={setSelected}/>
                    <IphoneCVBarButton title="Plus" selected={selected} setSelected={setSelected}/>
                </div>
                <div className="ipone-cv-body-selected-information">
                    {
                        selected === "A propo" ? <IphoneCVSelectedInformation title={About.title} description={About.description} />
                        : selected === "Compétences" ? <IphoneCVSelectedInformation title={Comptétences.title} description={Comptétences.description} />
                        : <IphoneCVSelectedInformation title={Plus.title} description={Plus.description} />
                    }
                </div>
            </div>
        </div>
        <div className="iphone-cv-bottombar">
            <IphoneCVBottomBar />
        </div>
    </div>
  )
}

export default IphoneCV