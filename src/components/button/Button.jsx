import React from 'react'

const Button = ({ value, onclick, className }) => {
    return (
        <button  className={className} onClick={onclick}>{value}</button>
    )
}

export default Button