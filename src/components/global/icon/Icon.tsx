import React from 'react'
import "./Icon.css"
interface iconProps {
    title: string,
    icon: any,
    setCurrentRoot: (title: string) => void,
}

function Icon(props: iconProps) {
    const [click, setClick] = React.useState<Boolean>(false);
    const changeScreen = (event:any) => {
        setClick(true);
        setTimeout(() => {
          setClick(false);
        }, 0.5 * 100);
        props.setCurrentRoot(props.title)
    }
  return (
    <button 
        style={{ backgroundImage: `url(${props.icon})`, backgroundSize: 'contain' }}
        className= {click ? 'icon zoom' : 'icon' } 
        onClick={(event) => changeScreen(event)}   
    />
  )
}

export default Icon