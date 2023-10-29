import React from 'react'
import {AiFillLock, AiFillSignal, AiOutlineWifi, } from 'react-icons/ai'
import { BsBatteryHalf } from 'react-icons/bs';
import { iphoneBackground } from '../../../assets/images/iphone/iphoneMain.ts';
import IphoneLock from './IphoneLock/IphoneLock.tsx';
import IphoneUnlock from './IphoneUnlock/IphoneUnlock.tsx';

import './Iphone.css'
function Iphone({time, date}:{time:string, date:string}) {
  const [clicked, setClicked] = React.useState<Boolean>(false);
  const [displayNone, setDisplayNone] = React.useState<Boolean>(false);
  return (
    <div className="iphone-box">
      <div className='iphone' style={{backgroundImage:`url(${iphoneBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#483C32', backgroundBlendMode: clicked === true ? '' : 'darken'}}> 
        <div className="iphone-head-box">
          <div className="iphone-head-island">
              <AiFillLock size={`2vmin`} />
          </div>
          <div className="iphone-head-icons">
            <AiFillSignal size={'2vmin'}  color='black' />
            <AiOutlineWifi size={'2vmin'} color='black' />
            <BsBatteryHalf size={'2vmin'} color='red'/>
          </div>
        </div>
          <div className='iphone-lock-container' style={{  transform: clicked ? "translateY(-150%)": "", display: displayNone? "none": "" }}>
            <IphoneLock time={time} date={date} onFingerPrint={setClicked} setDisplayNone={setDisplayNone}/>
          </div>
          {
            displayNone ?  <IphoneUnlock /> : undefined
          }
      </div>
    </div>
  )
}

export default Iphone