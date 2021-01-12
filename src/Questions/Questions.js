import React, {useState} from 'react'; 
import ListOfQuestions from './ListOfQuestions'
    export default function Questions() { 

        const questionBank = ListOfQuestions()

        const [selected, setSelected] = useState(''); 
        const [count, setCount] = useState(0); 


        const handleClick = (e) => {
            const correctAnswer = questionBank[0].correct

            setSelected(e.target.innerText)

            if (e.target.innerText === correctAnswer) {
                setCount(prevCount => prevCount + 1)
            }
        }

        const handleSubmit = (e) => {
            console.log('hello')
            e.preventDefault()

            alert(`you got ${count} out of ${questionBank.length}`)
            setSelected('')
        }
        
    return (
        <div className='q-container'>
             {questionBank.map(question => <div key={question.id}> 
                  <div className='question-box'>{question.question} <pre><code>{question.q}</code></pre>  </div>
                <div>
                <ul>
                    {question.answers.map((answer, index) => <li key={index} style={{border: 'solid 1px black'}} onClick={handleClick} value={selected}>{answer}</li>)}
                </ul>
                </div>      
          </div>)}
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}




