
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
           {question: 'Given the example below, what is the correct way to implement the style prop in React', 
                q:'Make the color of this text red -> <div>Hello World!</div>' , 
                answers: [`<div className='style' style={color:}>Hello World!</div>`, 
                       `<div style='red'>Hello World!</div>`, 
                       `<div>style={{color: 'red', Hello World!}}</div>`, 
                       `<div className='container' style={{color: 'red'}}>Hello World!</div>`
                            ], 
                correct: `<div className='container' style={{color: 'red'}}>Hello World!</div>`, 
                id: 3
                    }, 
            {question: `Which answer best describes the question below:`, 
                q: `After a React element is created, what package is mainly responsible for putting that element on the screen? `, 
                answers: [`ReactDOM.render()`, `document.body.appendChild()`, `Babel`, `componentDidMount()`], 
                correct: `ReactDOM.render()`, 
                id: 4
                        }                                  
      ]

      return questionBank

}