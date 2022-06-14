import {React, useState, useEffect} from 'react'
import Question from './Question'

export default function Quiz() {
    const [questionsData, setQuestionsData] = useState()
    const [isClicked, setIsClicked] = useState(false)
    
    useEffect(() =>{
        fetch("https://opentdb.com/api.php?amount=5")
        .then(res => res.json())
        .then(data => setQuestionsData(data.results))
    },[])
    
    function handleClick(){
        setIsClicked(current => !current)
        console.log(isClicked)
    }

    const questions = questionsData && questionsData.map(result => {return (
            <Question
             data={result}
            handleClick = {handleClick}
            isClicked = {isClicked}
            />
        )
    })

    return (
        <div className='quiz'>{questions}</div>
    )
}
