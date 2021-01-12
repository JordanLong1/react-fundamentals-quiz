
export default function ListOfQuestions() {
    const questionBank = [
        {question: `What does babel compile this code snippet to: `, 
            q: `const container = <div className='container'>Welcome to the React Fundamentals Quiz</div>`,
                answers: [ 'const container = /*#__PURE__*/ document.createElement("div",{classsName: "container" },"Welcome to the React Fundamentals Quiz!")', 'const container =  /*#__PURE__*/ React.createElement("div",{classsName: "container", textContent: "Welcome to the React Fundamentals Quiz!" })', `const container = /*#__PURE__*/ React.createElement("div",{classsName: "container" },"Welcome to the React Fundamentals Quiz!")`,  'Invalid Input'  ],
                     correct: `const container = /*#__PURE__*/ React.createElement("div",{classsName: "container" },"Welcome to the React Fundamentals Quiz!")`, 
                         id: 1
                         },      
         {question: `Which one of the options below, has a controlled input in this scenario:`, 
             q: `const [input, setInput] = useState('')`,
              answers: [`<input type='text' value={text} onChange={event => setInput(event.target.value)}`
              , `<input type'text' value={input} onClick={event => setInput(event.target.value)}`, 
              `<input type='text' value={input} onChange={event => setInput(event.target.value)}`, 
              `<input type='controlled' value={input} onChange={event => setInput(event.target.value)}`],
                   correct: `<input type='text' value={input} onChange={event => setInput(event.target.value)}`, 
                      id: 2
                       },                                    
      ]

      return questionBank

}