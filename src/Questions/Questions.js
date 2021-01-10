import React, {useState} from 'react'; 



     const questionBank = [
         {question: `What does babel compile this code snippet to: `, 
             answer1: 'const container = /*#__PURE__*/ document.createElement("div",{classsName: "container" },"Welcome to the React Fundamentals Quiz!")', 
                  answer2: 'const container =  /*#__PURE__*/ React.createElement("div",{classsName: "container", textContent: "Welcome to the React Fundamentals Quiz!" })', 
                      answer3: `const container = /*#__PURE__*/ React.createElement("div",{classsName: "container" },"Welcome to the React Fundamentals Quiz!")`, 
                         answer4: 'Invalid Input', 
                              correct: 'answer3', 
                                  id: 1
                              }
                        ]

    export default function Questions() { 

        const [selected, setSelected] = useState(''); 
        const [count, setCount] = useState(0); 


        const handleChange = (e) => {
            let correctAnswer = `const container = /*#__PURE__*/ React.createElement("div",{classsName: "container" },"Welcome to the React Fundamentals Quiz!")`

            setSelected(e.target.value)

            if (e.target.value === correctAnswer) {
                setCount(prevCount => prevCount + 1)
            }
        }

        const handleSubmit = (e) => {
            e.preventDefault()

            alert(`you got ${count} out of 1 correct`)
        }
        
        const q = `const container = <div className='container'>Welcome to the React Fundamentals Quiz</div>`
    return (
        <div className='q-container'>
         {questionBank.map(question => <div key={question.id}> 
         <div  className='question-box'>{question.question}</div>
            <pre><code>{q}</code></pre>

          <form onSubmit={handleSubmit}>

         <div>
            <input type='radio' className='answer-list' value={question.answer1} onChange={handleChange} checked={selected === question.answer1} ></input>
                <pre><code>{question.answer1}</code></pre>
         </div>

          <div>
            <input type='radio' className='answer-list' value={question.answer2} onChange={handleChange} checked={selected === question.answer2 }></input>
                 <pre><code>{question.answer2} </code></pre>
          </div>

         <div>
             <input type='radio' className='answer-list' value={question.answer3} onChange={handleChange} checked={selected === question.answer3 }></input>
                 <pre><code>C. {question.answer3}</code></pre>
         </div>

        <div> 
           <input type='radio' className='answer-list' value={question.answer4} onChange={handleChange} checked={selected === question.answer4}></input>
               <pre><code>{question.answer4}</code></pre>
        </div>

            <button>Submit</button>
            </form>
          </div>)}
        </div>
    )
}


