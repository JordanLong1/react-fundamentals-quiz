import React, {useState} from 'react'; 
import q1 from '../images/q1.png'

 const questionBank = [
{question: `What does babel compile this code snippet to: `, 
answer1: 'Answer one', 
answer2: 'Answer Two', 
answer3: 'Answer three', 
answer4: 'Answer 4', 
correct: 'answer3', 
id: 1
}
]

    export default function Questions() { 

        const [selected, setSelected] = useState(''); 

        const handleChange = (e) => {
            setSelected(e.target.value)
        }
   
    return (
        <div className='q-container'>
         {questionBank.map(question => <div key={question.id}> 
         <div  className='question-box'>{question.question}</div>
         <img style={{width: '40%'}} src={q1} alt=''></img>
            <form>
          <div> <input type='radio' className='answer-list' value={'Answer one'} onChange={handleChange} checked={selected === question.answer1} ></input>A. {question.answer1}</div>
          <div> <input type='radio' className='answer-list' value={'Answer Two'} onChange={handleChange} checked={selected === question.answer2 }></input>  B. {question.answer2} </div>
          <div> <input type='radio' className='answer-list' value={'Answer three'} onChange={handleChange} checked={selected === question.answer3 }></input>  C. {question.answer3}</div> 
           <div> <input type='radio' className='answer-list' value={'Answer 4'} onChange={handleChange} checked={selected === question.answer4}></input> D. {question.answer4}</div>

            </form>

   
          </div>)}
        </div>
    )
}


