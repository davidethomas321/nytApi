
let mainSection = document.getElementById('main');
let gameSection = document.getElementById('game');
let playButton = document.getElementById('startGame');

// Objective: Display the question in the game section
// Procedure:
//  Create a function
//  Grab the boxes that display certain information
//  populate those boxes with the data
//  add the option events
const displayQuestion = (questionData) => {
    console.log(questionData)
    const categoryElement = document.getElementById('category');
    const questionElement = document.getElementById('question');
    const options = document.querySelectorAll('.answer');
  
    categoryElement.innerText = questionData.category;
    questionElement.innerText = questionData.question;
  
    let answers = questionData.incorrect_answers.map(answer => ({
      text: answer,
      isCorrect: false
    }));
  
    answers.push({
      text: questionData.correct_answer,
      isCorrect: true
    })
  
    for (var i = answers.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = answers[i];
      answers[i] = answers[j];
      answers[j] = temp;
    }
  
    for (let i = 0; i < answers.length; i++) {
      let selected = options[i];
      selected.innerText = answers[i].text;
      selected.addEventListener('click', (event) => {
        event.target.style.backgroundColor = answers[i].isCorrect ? "blue" : "red";
        event.target.style.color = 'white';
      });
    }
  
  
  }

const getQuestion = () => {
  const url = 'https://opentdb.com/api.php?amount=1&category=18&type=multiple';
  fetch(url)
    .then(response => response.json())
    .then(data => {
      displayQuestion(data.results[0])
      // TODO: Pass data to a function that displays the information
    })
    .catch(error => {
      console.log(error);
    });
}

const playGame = (event) => {
  mainSection.style.display = "none";
  gameSection.style.display = "block";
  // TODO: Get the first question.
  getQuestion();
}

playButton.addEventListener('click', playGame);
nextButton.addEventListener('click', (event) => {
    // Reset the coloring of the options
    // Grab a new question
  
    const options = document.querySelectorAll('.answer');
    options.forEach(option => {
      option.style.color = "#000";
      option.style.backgroundColor = "#fff";
    });
  
    getQuestion();
  })