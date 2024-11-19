const Questions = [
    {
        question:"What is the value of PI ?",
        answer : " The value of PI is 3.1428 "
    },
    {
        question:"What is the value of PI ?",
        answer : " The value of PI is 3.1428 "
    },
    {
        question:"What is the value of PI ?",
        answer : " The value of PI is 3.1428 "
    },
    {
        question:"What is the value of PI ?",
        answer : " The value of PI is 3.1428 "
    },
    {
        question:"What is the value of PI ?",
        answer : " The value of PI is 3.1428 "
    }
]

let currentIndex = 0;

const QuestionElement = document.getElementById("question")
const AnswerElement = document.getElementById("answer")
const prevBtn = document.getElementById("prev-btn")
const nextBtn = document.getElementById("next-btn")
const ProgressElement  = document.getElementById("progress")

function ShowQuestion(){
    const CurrentQues = Questions[currentIndex];
    QuestionElement.textContent = CurrentQues.question;

    nextBtn.addEventListener("click",()=>{
        if(currentIndex < Questions.length){
            currentIndex++;
        }
        else{
            currentIndex--;
        }
    })
   
    prevBtn.addEventListener("click",()=>{
        if(currentIndex > 0){
            currentIndex--;
        }
        else{
            currentIndex++;
        }
    })



}

ShowQuestion();