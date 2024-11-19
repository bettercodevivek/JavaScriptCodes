const Questions = [
    {
        question: " who is the PM of India ?",
        options : ["narendra Modi","rahul Gandhi","batman","Reacher"],
        answer : 0
    },
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: 2, // Index of correct option
    },
    {
        question: "Who developed JavaScript?",
        options: ["Brendan Eich", "Guido van Rossum", "James Gosling", "Dennis Ritchie"],
        answer: 0,
    },
    {
        question: "Which year was JavaScript launched?",
        options: ["1995", "1996", "1997", "1998"],
        answer: 0,
    },
]

const QuestionELement = document.getElementById("question")
const OptionElement = document.getElementById("options")
const NextBtn = document.getElementById("next-btn")
const Result = document.getElementById("result-container")
const ScoreContainer = document.getElementById("score")


let CurrentIndex = 0;
let Score = 0;


function ShowQuestion(){
    const CurrentQues = Questions[CurrentIndex]
    QuestionELement.textContent = CurrentQues.question;
    OptionElement.innerHTML = " "

    CurrentQues.options.forEach((option,index)=>{
     
     const btn = document.createElement("button")

     btn.textContent = option

     btn.classList.add("option-btn")

     btn.onclick = () => SelectAnswer(index)

     OptionElement.appendChild(btn)

    })
    
}

function SelectAnswer(SelectedIndex){
    
    const answerIndex = Questions[CurrentIndex].answer

    if (SelectedIndex === answerIndex ){
        Score++ ;
    }
    CurrentIndex++;

    if (CurrentIndex < Questions.length){
        ShowQuestion()
    }
    else {
        ShowResult()
    }
}


function ShowResult(){
    QuestionELement.classList.add("hidden")
    OptionElement.classList.add("hidden")
    NextBtn.classList.add("hidden")
    Result.classList.remove("hidden")
    ScoreContainer.textContent = `${Score}/${Questions.length}`
}

ShowQuestion();

// NextBtn.addEventListener("click",(e)=>{
//    e.preventDefault()
   
// })



// 1. Built an array of questions with each element being a object containing question , answer and options.
// 2. stored important elements of the page in variables.
// 3. worte function showQuestion(), in that first stored the question of index 0 in a variable 