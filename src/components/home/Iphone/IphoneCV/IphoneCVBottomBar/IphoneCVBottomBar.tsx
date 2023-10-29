import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import './IphoneCVBottomBar.css'
import Modal_confirmation from '../../../../global/modal_confirmation/Modal_confirmation'

function IphoneCVBottomBar() {
    const [clicked, setClicked] = React.useState<boolean>(false)
    const closeModal = () => {
        setClicked(false)
    }
  return (  
    <div
        className='iphone-cv-bottomBar-box'
    >
        <div className="iphone-cv-bottomBar-email">
            <HiOutlineMail size={'70%'} color='orange'/>
        </div>
        <div className="iphone-cv-bottomBar-link-box">
            <div className="iphone-cv-bottomBar-link" onClick={() => setClicked(true)}>
                <p>Consulter le CV</p>
            </div>
        </div>
        <Modal_confirmation 
            click={clicked} 
            link='https://docs.google.com/document/d/1e4cLYPZyMhK_k0D6c3FsvCXhAljFskE9RJOe06fqO_Q/edit?usp=sharing'
            closeModal={closeModal}    
        />
    </div>
  )
}

export default IphoneCVBottomBar