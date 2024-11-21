const Questions = [
    {
        question: "What is the value of PI?",
        answer: "The value of PI is 3.1428",
    },
    {
        question: "What is the capital of France?",
        answer: "The capital of France is Paris",
    },
    {
        question: "Who developed JavaScript?",
        answer: "JavaScript was developed by Brendan Eich",
    },
    {
        question: "Which year was JavaScript launched?",
        answer: "JavaScript was launched in 1995",
    },
    {
        question: "What does HTML stand for?",
        answer: "HTML stands for HyperText Markup Language",
    },
];


let CurrentIndex = 0

const QuestionELement = document.getElementById("question")
const AnswerElement = document.getElementById("answer")
const nextBtn = document.getElementById("next-btn")
const prevBtn = document.getElementById("prev-btn")
const showBtn = document.getElementById("show-answer-button")
const Progress = document.getElementById("progress")

function ShowQuestion(){
    const Question = Questions[CurrentIndex]
    QuestionELement.textContent = Question.question;
    AnswerElement.textContent = " "
    Progress.textContent=`Card ${CurrentIndex+1} of ${Questions.length}`
}

showBtn.addEventListener("click",ShowAnswer)

function ShowAnswer(){
   AnswerElement.textContent=Questions[CurrentIndex].answer
}

nextBtn.addEventListener("click",()=>{
    if(CurrentIndex <= Questions.length-1){
        CurrentIndex++;
        ShowQuestion();
    }
    })

prevBtn.addEventListener("click",()=>{
    if(CurrentIndex > 0){
        CurrentIndex--;
        ShowQuestion();
    }
})

ShowQuestion();

