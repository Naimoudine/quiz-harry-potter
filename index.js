// revoir l'ui et le faire passer dans le w3c

import { db } from "./db/db.js";

// let body = document.querySelector('body');
let stylesheet = document.querySelector("link");
let homeContainer = document.querySelector(".container-home");
let quizContainer = document.querySelector(".container-quiz");
let resultContainer = document.querySelector(".container-score");
let playBtn = document.querySelector(".playButton");
let image = document.querySelector("img");
let answersBtn = document.querySelectorAll(".answer");
let nextBtn = document.querySelector(".next");

let currentAnwsers;
let currentQuestionIndex = 0;
let correctAnswersCount = 0;

function initQuiz() {
  handleProgress(limitQuestion(db), currentQuestionIndex);
  displayImage(
    displayQuestion(limitQuestion(db), currentQuestionIndex),
    currentQuestionIndex
  );
  displayAnswers(displayQuestion(limitQuestion(db), currentQuestionIndex));
  handleAnswerClick(currentAnwsers);
  disableBtn(nextBtn);
  stylesheet.href = "./style/quiz.css";
  homeContainer.style.display = "none";
}

function limitQuestion(db) {
  let questions = [];
  for (let i = 0; i < 10; i++) {
    questions.push(db[i]);
  }
  return questions;
}

function handleProgress(arr, index) {
  if (currentQuestionIndex <= arr.length - 1) {
    let progress = document.querySelector("header p");
    progress.innerText = `Question ${index + 1}/${arr.length}`;

    let progressBar = document.querySelector(".upper-bar");
    progressBar.style.width = `${((index + 1) / arr.length) * 100}%`;
  }
}

/**
 *
 * @param {Array} arr L'array qui contient toutes nos questions
 * @param {Number} index L'index de la question actuelle
 * @returns
 */
function displayQuestion(arr, index) {
  let currentQuestion = document.querySelector(".mainQuestion");
  //boucle sur l'array des question afin d'insérer le texte de la question actuelle dans le h1
  if (currentQuestionIndex <= arr.length - 1) {
    for (let i = 0; i < arr.length; i++) {
      currentQuestion.innerText = arr[index].question.text;
      return arr[index];
    }
  }
}

/**
 *
 * @param {Array} arr L'array avec les réponses à la questions actuelle
 * @returns un array qui a ses éléments qui changent d'index constamment de manière au hasard
 */
function randomAnswers(arr) {
  //Boucle sur l'array de notre réponse en partant de la fin pour que ce soit bien random
  for (let i = arr.length - 1; i > 0; i--) {
    //Crée un index  aléatoire entre 0 et 4
    const randomIndex = Math.floor(Math.random() * (i + 1));
    //crée un array temporaire et y assigne un autre array avec la méthode destructive afin d'y mélanger les éléments.
    [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
  }
  return arr;
}

function displayImage(obj, index) {
  console.log(obj);
  if (index <= 9) {
    image.src = obj.question.img;
  }
}

/**
 *
 * @param {*} obj L'object qui contient la question actuelle et ses réponses;
 */
function displayAnswers(obj) {
  if (currentQuestionIndex <= 9) {
    currentAnwsers = obj.answers;
  }

  let randomizedAnswers = randomAnswers(currentAnwsers);

  //boucle sur les réponses et mes buttons pour insérer dans chaque buttons une réponses
  for (let i = 0; i < answersBtn.length; i++) {
    for (let j = 0; j < randomizedAnswers.length; j++) {
      // if(obj.question.type ==="images") {
      //     answersBtn[i].style.background = `url("${randomizedAnswers[i].img}") center/cover no-repeat`;
      //     answersBtn[i].classList.add('answerBtn');
      // } else {
      //     answersBtn[i].innerText = randomizedAnswers[i].text;
      // }
      answersBtn[i].innerText = randomizedAnswers[i].text;
    }
  }
}

//permet de récupère les autres éléments enfants
function getSiblings(currentElement) {
  //Pour récupérer les éléments frères
  let siblings = [];

  //si il n'y a pas de parent on retourne un array vide
  if (!currentElement.parentNode) {
    return siblings;
  }

  //premier enfant
  let sibling = currentElement.parentNode.firstChild;

  //récupéré les élements frères
  while (sibling) {
    if (sibling.nodeType === 1 && sibling !== currentElement) {
      siblings.push(sibling);
    }
    sibling = sibling.nextSibling;
  }
  return siblings;
}

function disableBtn(btn) {
  btn.setAttribute("disabled", "");
  btn.style.opacity = "40%";
}

function removeDisable(btn) {
  btn.removeAttribute("disabled");
  btn.style.opacity = "100%";
}

function handleAnswerClick() {
  answersBtn.forEach((btn) => {
    btn.addEventListener("click", () => {
      let currentAnwser = btn.innerText;
      let correctAnswer = currentAnwsers.filter((answer) => answer.result)[0];
      console.log(btn);

      if (currentAnwser) {
        if (currentAnwser !== correctAnswer.text) {
          btn.classList.add("wrong");
          getSiblings(btn)
            .filter((sibling) => sibling.innerText === correctAnswer.text)[0]
            .classList.add("correct");
          getSiblings(btn)
            .filter((sibling) => sibling.innerText === correctAnswer.text)[0]
            .setAttribute("disabled", "");
          getSiblings(btn)
            .filter((sibling) => sibling.innerText !== correctAnswer.text)
            .forEach((btn) => disableBtn(btn));
        } else {
          btn.classList.add("correct");
          getSiblings(btn).forEach((btn) => disableBtn(btn));
          correctAnswersCount++;
        }
      }

      if (currentQuestionIndex === 9) {
        nextBtn.innerText = `Resultat`;
      }

      removeDisable(nextBtn);
    });
  });
}

function showResult(data, count) {
  let score = document.querySelector(".final-score");
  let msg = document.querySelector(".final-msg");

  console.log(msg, count);

  stylesheet.href = "./style/result.css";
  resultContainer.style.display = "flex";
  quizContainer.style.display = "none";

  score.innerText = `${count}/${data.length}`;

  if (count < 4) {
    msg.innerHTML = `Un moldu qui participe à un quiz de sorcier ?  <br />
            Merci d’avoir participé à ce quiz.
            <br />
            Oubliettes!`;
  } else if (count >= 4 && count < 7) {
    msg.innerHTML = `Bravo, tu as suffisamment de connaissances en magie pour identifier des détraqueurs mais tu es dépourvu(e) de pouvoir  car tu es un cracmol.<br>
            Merci d’avoir participé à ce quiz.
            `;
  } else {
    msg.innerHTML = `Félicitations, tu es un véritable sorcier !<br>
            L’univers Harry Potter ne semble pas avoir de secrets pour toi.
            Vérifie tes courriers, ta lettre d’admission ne saurait tarder.<br>
            Merci d’avoir participé à ce quiz.  
            `;
  }
}

playBtn.addEventListener("click", () => {
  initQuiz();
  homeContainer.style.display = "none";
  quizContainer.style.display = "block";
});

nextBtn.addEventListener("click", (e) => {
  currentQuestionIndex++;
  handleProgress(limitQuestion(db), currentQuestionIndex);
  displayImage(
    displayQuestion(limitQuestion(db), currentQuestionIndex),
    currentQuestionIndex
  );
  displayAnswers(displayQuestion(limitQuestion(db), currentQuestionIndex));

  answersBtn.forEach((btn) => {
    removeDisable(btn);
    btn.classList.remove("correct");
    btn.classList.remove("wrong");
  });

  disableBtn(nextBtn);

  if (e.currentTarget.innerText.toUpperCase() === "RESULTAT") {
    showResult(limitQuestion(db), correctAnswersCount);
  }
});
