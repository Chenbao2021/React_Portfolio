import React from 'react'

import './LockMessage.css'

interface lockMessageProps {
    title: string,
    message: string,
    time: string,
    icon: string,
}

function LockMessage(props: lockMessageProps) {
  return (
    <div className='lockMessage-box'>
        <div className="lockMessage-icon" style={{ backgroundImage:`url(${props.icon})` }}>
        </div>
        <div className="lockMessage-message-box">
            <div className="lockMessage-head">
                <p><b><em>{props.title}</em></b></p>
                <p>{props.time}</p>
            </div>
            <div className="lockMessage-message">
                <p>{props.message}</p>
            </div>
        </div>
        
    </div>
  )
}

export default LockMessage