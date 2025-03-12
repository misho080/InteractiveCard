import React from 'react'

const Button = ({ value, onclick, }) => {
    return (
        <button className='button' onClick={onclick}>{value}</button>
    )
}

export default Button