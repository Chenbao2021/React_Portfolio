import React from 'react'
import IpadMain from './IpadMain/IpadMain'

import './Ipad.css'
import IpadAlbum from './IpadAlbum/IpadAlbum';
import IpadDraw from './IpadDraw/IpadDraw';

function Ipad() {
  const [currentRoot, setCurrentRoot] = React.useState<string>('main');
  const delaySet = (title:string) => {
    setTimeout(() => {
      setCurrentRoot(title);
    }, 0.5 * 1000);
  }
  return (
    <div className="ipad">
        <div className="ipad-top">
          <div></div>
        </div>
        <div className="ipad-middle">
          {
            currentRoot === 'main' ? <IpadMain setCurrentRoot = {delaySet} />
            : currentRoot === 'album' ? <IpadAlbum />
            : currentRoot === 'draw' ? <IpadDraw goToMenu = {delaySet} />
            : <IpadMain setCurrentRoot = {delaySet}/>

          }
        </div>
        <div className="ipad-bottom">
          <button onClick={() => delaySet('main')}/>
        </div>
    </div>
  )
}

export default Ipad