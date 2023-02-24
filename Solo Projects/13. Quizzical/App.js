import React from "react"
import Question from "./components/Question";

const data =
    {
        question: "How would one say goodbye in Spanish?",
        options: ['Adios', 'Hola', 'Au Revoir', 'Salir'], 
        answer: 'Adios',
    };

export default function AppendMode(){

    const [ startedStatus, updateStatus] =React.useState(false);
    const [ questions, updateQuestions] =React.useState([]);

    function handleClick(e){
        if(e.target.id == 'start-btn'){
            updateStatus(true);
        }
        else if(e.target.id === 'check'){
            
        }
    }

    React.useEffect(fetchQuestions,[])

    async function fetchQuestions(){
        const res = await fetch(`https://opentdb.com/api.php?amount=5&type=multiple`);
        const data = await res.json();
        let results=[];
        data.results.forEach((question, index) => {
            results.push(<Question key={index} {...question}/>);
            console.log(question);
        });
        updateQuestions(results);
    }

    return(
        <>
            {
            startedStatus
            ?
            <div id="questions">
                {questions}
                <button id="check" onClick={ (e) => handleClick(e)}> Check answers</button>
            </div>
            :
            <div id="start">
                <p id="title">Quizzical</p>
                <p id="desc">The best quiz game ever lol</p>
                <button id="start-btn" onClick={ (e) => handleClick(e)}>Start Quiz</button>
            </div>
            }
        </>
    );
}