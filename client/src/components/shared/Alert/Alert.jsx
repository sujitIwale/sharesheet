import React from 'react'
import './Alert.css'

const Alert = ({ message, type }) => {
    return (
        <div className={`alert shadow shadow-hover round-sm ${type}`}>
            <h4 className='bold text-dark'>{message}</h4>
        </div>
    )
}

export default Alert