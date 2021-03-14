import React from 'react'
import './styles/style.css'

const ErrorC = (props) => {

    return (
        <div>
            <p id='app-error'>{props.error}</p>
        </div>
    )
}



export default ErrorC