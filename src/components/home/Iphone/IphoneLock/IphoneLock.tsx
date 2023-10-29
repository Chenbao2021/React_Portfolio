import React from 'react'
import {IoFingerPrintOutline} from 'react-icons/io5';

import LockMessage from './LockMessage/LockMessage';
import { muskIcon, zack } from '../../../../assets/images/iphone/iphoneMain';

import './IphoneLock.css'


function IphoneLock({time, date, onFingerPrint, setDisplayNone}: {time: string, date:string, onFingerPrint: React.Dispatch<React.SetStateAction<Boolean>>, setDisplayNone: React.Dispatch<React.SetStateAction<Boolean>>}) {
    const [checked, setChecked] =  React.useState<Boolean>(false);
    const [dropScreen, setDropScreen] = React.useState<Boolean>(false);
    const delayReact = () => {
        setChecked(true);
        setTimeout(() => {
            onFingerPrint(true);
            setTimeout(() => {
                setDisplayNone(true);
            }, 500)
        }, 500)
    }
  return (
    <div className="iphone-lock-screen">
        <div className="iphone-body">
            <div className="iphone-body-time">
                <p>{date}</p>
                <p>{time}</p>
            </div>
        </div>
        <div className="lock-messages">
            <LockMessage title="Mark Zuckerberg" message="Malgré tu as des connaissance sur React Native" time="36min" icon={zack}/>
            <LockMessage title="Mark Zuckerberg" message="J'ai regardé ton CV , mais je decide de te refuser sans pitié" time="37min" icon={zack}/>
            <LockMessage title="Elon Musk" message="Il s'appelle Chenbao, pauvre chômeur depuis fin de ses études ..." time="47min" icon={muskIcon}/>
            <LockMessage title="Elon Musk" message="Il a perdu son téléphone, si vous l'avez trouvé ..." time="52min" icon={muskIcon}/>
            <LockMessage title="Elon Musk" message="Bonjour, tu es la?" time="57min" icon={muskIcon}/>
        </div>
        <div className='iphone-fingerprint' onClick={delayReact}>
            <IoFingerPrintOutline  size={'30%'} color={ checked ? 'green' : 'white'}/>
        </div>
    </div>
  )
}

export default IphoneLock