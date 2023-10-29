import React, { useState } from 'react'
import "./IphoneUnlock.css"
import { Icon } from '../../../global/globalMain'
import { javascriptIcon, cvIcon } from '../../../../assets/images/iphone/iphoneMain'
import IphoneCV from '../IphoneCV/IphoneCV'
import IphoneJS from '../IphoneJS/IphoneJS'

enum iphoneRootEnum {
    cv,
    js,
} 
function IphoneUnlock() {
    const [click, setClick] = useState<Boolean>(false)
    const [iphoneRoot, setIphoneRoot ] = useState<iphoneRootEnum>();

    const setCurrentRoot = (title:iphoneRootEnum) => {
        setTimeout(() => {
            setClick(true);
            setIphoneRoot(title)
        }, 500)
    }
  return (
        <div className={`iphone-unlock-box ${click ? "" : ""}`}>
            <div className="iphone-unlock-body">
                {
                    click 
                    ? iphoneRoot === iphoneRootEnum.cv 
                    ? <IphoneCV closeApp={setClick}/>
                    : iphoneRoot === iphoneRootEnum.js
                    ? <IphoneJS closeApp={setClick}/>
                    : undefined
                    :undefined
                }
            </div>
            <div className={click ? "iphone-display-none" : "iphone-unlock-footer"}>
                <Icon icon={cvIcon} title={'cv'} setCurrentRoot={() => {setCurrentRoot(iphoneRootEnum.cv)}} />            
                <Icon icon={javascriptIcon} title={'js'} setCurrentRoot={() => {setCurrentRoot(iphoneRootEnum.js)}} />            
            </div>
        </div>
    )
}

export default IphoneUnlock