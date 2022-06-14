import React from 'react'

export default function StartPage(props) {
  return (
    <div className='start-page'>
        <h1>Quiz</h1>
        <h3> Test your general knowledge!</h3>
        <button className='start--button' onClick={props.handleClick}> Start quiz!</button>
    </div>
  )
}
