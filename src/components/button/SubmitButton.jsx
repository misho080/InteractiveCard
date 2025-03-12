import React from 'react'

export const SubmitButton = ({value , onclick }) => {
  return (
    <div className='submitButtonDiv'>
        <button className='submitButton' onClick={onclick}>{value}</button>
    </div>
  )
}
