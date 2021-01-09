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
         {questionBank.map(question => <div key={question.id}>{question.question}
          <li>A) {question.answer1}</li>
          <li>B) {question.answer2}</li> 
           <li>C) {question.answer3}</li>
           <li> D) {question.answer4}</li>
          </div>)}
        </div>
    )
}


