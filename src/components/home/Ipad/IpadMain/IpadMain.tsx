import React from 'react'
import {ipadBackground} from '../../../../assets/images/ipad/ipadMain.ts';
import {Icon} from '../../../global/globalMain.ts';
import { album, draw } from '../../../../assets/images/common/commonMain.ts';

import './IpadMain.css'

interface IpadMainProps {
    setCurrentRoot: (title:string) => void;

}

function IpadMain(props: IpadMainProps) {
  return (
    <div className="ipad-middle" style={{backgroundImage:`url(${ipadBackground})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: 'rgba(221,231,255, 0.6)', backgroundBlendMode: 'darken'}}>
        <div className="ipad-middle-bottomBar">
          <Icon icon={album} title={'album'} setCurrentRoot={props.setCurrentRoot} />
          <Icon icon={draw} title={'draw'} setCurrentRoot={props.setCurrentRoot} />
        </div>
    </div>
  )
}

export default IpadMain