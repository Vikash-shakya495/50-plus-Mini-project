// Questions for each category
const quizData = {
  html: [
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Markup Language"], answer: 0 },
    { question: "Choose the correct HTML element for the largest heading:", options: ["<h1>", "<h6>", "<heading>", "<head>"], answer: 0 },
    { question: "What is the correct HTML element for inserting a line break?", options: ["<br>", "<lb>", "<break>", "<line>"], answer: 0 },
    { question: "Which character is used to indicate an end tag in HTML?", options: ["*", "<", "/", "^"], answer: 2 },
    { question: "What is the purpose of the <title> tag in HTML?", options: ["To specify the title of the document", "To create a section title", "To add a heading", "To name the page"], answer: 0 },
    { question: "Which HTML tag is used to define an unordered list?", options: ["<ul>", "<ol>", "<li>", "<list>"], answer: 0 },
    { question: "Which attribute is used to add a hyperlink in HTML?", options: ["src", "href", "link", "path"], answer: 1 },
    { question: "How can you make a numbered list in HTML?", options: ["<ul>", "<list>", "<ol>", "<numbered>"], answer: 2 },
    { question: "Which tag is used to create an input field in HTML?", options: ["<input>", "<text>", "<field>", "<form>"], answer: 0 },
    { question: "What is the correct way to add an image in HTML?", options: ["<img href='image.jpg'>", "<img src='image.jpg'>", "<image src='image.jpg'>", "<picture src='image.jpg'>"], answer: 1 }
  ],
  css: [
    { question: "What does CSS stand for?", options: ["Cascading Style Sheets", "Colorful Style Sheets", "Computer Style Sheets", "Creative Style Sheets"], answer: 0 },
    { question: "Where in an HTML document is the correct place to refer to an external style sheet?", options: ["In the <head> section", "At the end of the document", "In the <body> section", "At the top of the document"], answer: 0 },
    { question: "Which HTML tag is used to define an internal style sheet?", options: ["<style>", "<css>", "<script>", "<link>"], answer: 0 },
    { question: "Which is the correct CSS syntax?", options: ["body {color: black;}", "{body: color=black;}", "body: color=black;", "{body;color:black;}"], answer: 0 },
    { question: "How do you insert a comment in CSS?", options: ["/* this is a comment */", "// this is a comment", "<!-- this is a comment -->", "' this is a comment"], answer: 0 },
    { question: "Which property is used to change the background color?", options: ["background-color", "color", "bgcolor", "background"], answer: 0 },
    { question: "How do you make each word in a text start with a capital letter?", options: ["text-transform: capitalize;", "text-style: capitalize;", "text-decoration: capitalize;", "transform: capitalize;"], answer: 0 },
    { question: "Which property is used to change the font of an element?", options: ["font-family", "font-style", "text-style", "font-weight"], answer: 0 },
    { question: "How do you center-align text in CSS?", options: ["text-align: center;", "align: center;", "text-center: true;", "horizontal-align: center;"], answer: 0 },
    { question: "What property is used to create space inside the border of an element?", options: ["padding", "margin", "spacing", "border-space"], answer: 0 }
  ],  
  javascript: [
    { question: "What is the correct JavaScript syntax to change the content of the HTML element?", options: ["document.getElementById('demo').innerHTML = 'Hello World!'", "document.getElement('p').innerHTML = 'Hello World!'", "#demo.innerHTML = 'Hello World!'", "document.getElementByName('p').innerHTML = 'Hello World!'"], answer: 0 },
    { question: "Inside which HTML element do we put the JavaScript?", options: ["<javascript>", "<js>", "<scripting>", "<script>"], answer: 3 },
    { question: "How do you write 'Hello World' in an alert box?", options: ["msgBox('Hello World');", "alert('Hello World');", "msg('Hello World');", "alertBox('Hello World');"], answer: 1 },
    { question: "How do you create a function in JavaScript?", options: ["function = myFunction()", "function myFunction()", "function:myFunction()", "create myFunction()"], answer: 1 },
    { question: "How do you call a function named 'myFunction'?", options: ["call myFunction()", "call function myFunction()", "myFunction()", "execute myFunction()"], answer: 2 },
    { question: "How to write an IF statement in JavaScript?", options: ["if i = 5 then", "if i == 5 then", "if (i == 5)", "if i = 5"], answer: 2 },
    { question: "How does a WHILE loop start?", options: ["while i = 1 to 10", "while (i <= 10; i++)", "while (i <= 10)", "while i < 10"], answer: 2 },
    { question: "How does a FOR loop start?", options: ["for i = 1 to 5", "for (i <= 5; i++)", "for (i = 0; i <= 5; i++)", "for (i = 0; i <= 5)"], answer: 2 },
    { question: "What is the correct way to write a JavaScript array?", options: ["var colors = 'red', 'green', 'blue'", "var colors = 1 = ('red'), 2 = ('green'), 3 = ('blue')", "var colors = ['red', 'green', 'blue']", "var colors = (1:'red', 2:'green', 3:'blue')"], answer: 2 },
    { question: "How do you round the number 7.25 to the nearest integer?", options: ["Math.round(7.25)", "round(7.25)", "Math.rnd(7.25)", "rnd(7.25)"], answer: 0 }
  ]
};

let currentQuestionIndex = 0;
let selectedAnswers = [];
let questions = [];

// Load questions based on selected category
function startQuiz() {
  const category = document.getElementById("category").value;
  if (category) {
    questions = quizData[category];
    selectedAnswers = Array(questions.length).fill(null);
    currentQuestionIndex = 0;
    document.getElementById("quizSection").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");
    loadQuestion();
  } else {
    document.getElementById("quizSection").classList.add("hidden");
  }
}

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.querySelectorAll(".option");
  const currentQuestion = questions[currentQuestionIndex];
  
  questionEl.textContent = currentQuestion.question;
  optionsEl.forEach((option, index) => {
    option.textContent = currentQuestion.options[index];
    option.classList.remove("selected");
    if (selectedAnswers[currentQuestionIndex] === index) {
      option.classList.add("selected");
    }
  });
}

function selectOption(index) {
  selectedAnswers[currentQuestionIndex] = index;
  loadQuestion();
}

function nextQuestion() {
  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    showResult();
  }
}

function prevQuestion() {
  if (currentQuestionIndex > 0) {
    currentQuestionIndex--;
    loadQuestion();
  }
}

function showResult() {
  const quizEl = document.getElementById("quiz");
  const resultEl = document.getElementById("result");
  let score = 0;

  selectedAnswers.forEach((answer, index) => {
    if (answer === questions[index].answer) {
      score++;
    }
  });

  document.getElementById("score").textContent = `${score} / ${questions.length}`;
  quizEl.classList.add("hidden");
  resultEl.classList.remove("hidden");
}

function restartQuiz() {
  currentQuestionIndex = 0;
  selectedAnswers = [];
  questions = [];
  document.getElementById("result").classList.add("hidden");
  document.getElementById("quizSection").classList.remove("hidden");
  startQuiz();
}


