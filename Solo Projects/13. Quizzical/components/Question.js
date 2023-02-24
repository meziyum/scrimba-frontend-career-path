import React from "react"

export default function Question(props){

    const [ options, updateOptions] =React.useState(fetchOptions)

    function fetchOptions(){
        return props.incorrect_answers.concat(props.correct_answer).map( (option) => {
            return <button className="option" onClick={ (e) => selectOption(e)}>{option}</button>
        });
    }

    /*
    Durstenfeld shuffle
    */
    function shuffle(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }

    return(
        <div className="question">
        <p className="question-text">{props.question}</p>
        <div className="options">
            {shuffle(options)}
        </div>
    </div>
    ) 
}