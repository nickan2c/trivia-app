import React from 'react'

export default function Question({data, handleClick, isClicked}) {
    const answers = [...data.incorrect_answers, data.correct_answer]

    const styles = {
        backgroundColor: isClicked?"#D6DBF5":"white"
    }

    const a = answers.map(answer => {return(
        <button  style={styles} onClick={handleClick} className='answers--button'>{answer} </button>)
    })

   

    return (
        <div className='question'>
            <h3>{decodeURIComponent(data.question)}</h3>
            <div  className='answers'> {a}</div>
        </div>
    )
}
