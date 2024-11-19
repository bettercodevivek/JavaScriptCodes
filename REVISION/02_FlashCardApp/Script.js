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

let currentIndex = 0;

const QuestionElement = document.getElementById("question");
const AnswerElement = document.getElementById("answer");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const ProgressElement = document.getElementById("progress");
const showAnswerBtn = document.getElementById("show-answer-button");

// Show the current question and update progress
function ShowQuestion() {
    const CurrentQues = Questions[currentIndex];
    QuestionElement.textContent = CurrentQues.question; // Set question text
    AnswerElement.textContent = ""; // Clear the answer
    // AnswerElement.classList.add("hidden"); // Hide the answer
    ProgressElement.textContent = `Card ${currentIndex + 1} of ${Questions.length}`; // Update progress
}

// Show the answer when "Show Answer" is clicked
showAnswerBtn.addEventListener("click", () => {
    const CurrentQues = Questions[currentIndex];
    AnswerElement.textContent = CurrentQues.answer;
    // AnswerElement.classList.remove("hidden"); // Unhide the answer
});

// Navigate to the next question
nextBtn.addEventListener("click", () => {
    if (currentIndex < Questions.length - 1) {
        currentIndex++;
        ShowQuestion(); // Update question
    }
});

// Navigate to the previous question
prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        ShowQuestion(); // Update question
    }
});

// Initialize the app
ShowQuestion();
