import React from 'react'

 const questionBank = [
{question: 'Whatever question here', 
answer1: 'Answer one', 
answer2: 'Answer Two', 
answer3: 'Answer three', 
answer4: 'Answer 4', 
correct: 'answer3', 
id: 1
}, 
{
    question: 'Whatever question here', 
    answer1: 'Answer one', 
    answer2: 'Answer Two', 
    answer3: 'Answer three', 
    answer4: 'Answer 4', 
    correct: 'answer2', 
    id: 2
}, 
{
    question: 'Whatever question here', 
    answer1: 'Answer one', 
    answer2: 'Answer Two', 
    answer3: 'Answer three', 
    answer4: 'Answer 4', 
    correct: 'answer1', 
    id: 3
}, 
]

    export default function Questions() { 
   
    return (
        <div>
         {questionBank.map(question => <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} key={question.id}>{question.question} {question.answer1} {question.answer2} {question.answer3} {question.answer4}</div>)}
        </div>
    )
}


