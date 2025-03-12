import React from 'react'
import mainIcon from  '../assets/n.svg'
const Card = ({ number }) => {
    return (
        <div className='cardDiv'>
            <img className='cardMainicon' src={mainIcon} alt="cardMainicon" />
            <div className='numberSpanDiv'><span className='numberSpan'>you selected {number} of out 5</span></div>
            <p className='cardP'>Thank you!</p>
            <div className='cardSpanDiv'><span className='cardSpan'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</span></div>
        </div>
    )
}

export default Card