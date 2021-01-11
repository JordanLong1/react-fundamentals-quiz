
export default function ListOfQuestions() {
    const questionBank = [
        {question: `What does babel compile this code snippet to: `, 
            q: `const container = <div className='container'>Welcome to the React Fundamentals Quiz</div>`,
                answers: [ 'const container = /*#__PURE__*/ document.createElement("div",{classsName: "container" },"Welcome to the React Fundamentals Quiz!")', 'const container =  /*#__PURE__*/ React.createElement("div",{classsName: "container", textContent: "Welcome to the React Fundamentals Quiz!" })', `const container = /*#__PURE__*/ React.createElement("div",{classsName: "container" },"Welcome to the React Fundamentals Quiz!")`,  'Invalid Input'  ],
                     correct: `const container = /*#__PURE__*/ React.createElement("div",{classsName: "container" },"Welcome to the React Fundamentals Quiz!")`, 
                         id: 1
                         },      
         {question: `Lets see if this will work as well `, 
             q: `Simply Just a test`,
              answers: ['Answer One', 'Answer Two', 'Answer Three', 'Answer Four'],
                   correct: 'Answer Four', 
                      id: 2
                       },                                    
      ]

      return questionBank

}