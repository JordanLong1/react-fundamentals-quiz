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
        <div className='q-container'>
         {questionBank.map(question => <div key={question.id}> 
         <div  className='question-box'>{question.question}</div>

         <div className='answer-box'>
          <div> <input type='radio' className='answer-list' ></input>A. {question.answer1}</div>
          <div> <input type='radio' className='answer-list'></input>  B. {question.answer2} </div>
          <div> <input type='radio' className='answer-list'></input>  C. {question.answer3}</div> 
           <div> <input type='radio' className='answer-list'></input> D. {question.answer4}</div>

         </div>
          </div>)}
        </div>
    )
}


