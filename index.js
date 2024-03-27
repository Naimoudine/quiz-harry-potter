// revoir l'ui et le faire passer dans le w3c

import { db } from './db/db.js';

let answersBtn = document.querySelectorAll('.answer');
let nextBtn = document.querySelector('.next');
let body = document.querySelector('body');
let stylesheet = document.querySelector('link');

let currentAnwsers;
let currentQuestionIndex = 0;
let correctAnswersCount = 17;


function initQuestionPage() {
    handleProgress(db, currentQuestionIndex);
    displayAnswers(displayQuestion(db, currentQuestionIndex));
    handleAnswerClick(currentAnwsers);
    disableBtn(nextBtn);
    stylesheet.href = "./style/questions.css";
    handleLayout(displayQuestion(db, currentQuestionIndex));
}

function handleProgress(arr, index) {
    if(currentQuestionIndex <= 19) {
        let progress = document.querySelector("header p");
        progress.innerText = `Question ${index + 1}/${arr.length}`;
    
        let progressBar = document.querySelector('.upper-bar');
        progressBar.style.width = `${(index + 1) / arr.length * 100}%`;
    }
}

function handleLayout(obj) {
    let image = document.querySelector(".img");
    console.log(obj.question.type)
    if(obj.question.type === "images" || obj.question.type === "text") {
        image.style.display = "none";
    } else {
        image.style.display = "block";
        image.style.background = `url(${obj.question.img}) center/cover`
    }
}

/**
 * 
 * @param {Array} arr L'array qui contient toutes nos questions
 * @param {Number} index L'index de la question actuelle
 * @returns 
 */
function displayQuestion(arr, index) {
    let currentQuestion = document.querySelector("h1");
    //boucle sur l'array des question afin d'insérer le texte de la question actuelle dans le h1
    if(currentQuestionIndex <= 19) {
        for(let i = 0; i < arr.length; i++) {
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
    for(let i = arr.length - 1; i > 0; i--) {
        //Crée un index  aléatoire entre 0 et 4
        const randomIndex = Math.floor(Math.random() * (i + 1));
        //crée un array temporaire et y assigne un autre array avec la méthode destructive afin d'y mélanger les éléments.
        [arr[i], arr[randomIndex]] = [arr[randomIndex], arr[i]];
    }
    return arr;
}

/**
 * 
 * @param {*} obj L'object qui contient la question actuelle et ses réponses;
 */
function displayAnswers(obj) {
    currentAnwsers = obj.answers;

    let randomizedAnswers = randomAnswers(currentAnwsers);

    //boucle sur les réponses et mes buttons pour insérer dans chaque buttons une réponses
    for(let i = 0; i < answersBtn.length; i++) {
        for(let j = 0; j < randomizedAnswers.length; j++) {
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

function getSiblings(currentElement) {
    //Pour récupérer les éléments frères
    let siblings = [];

    //si il n'y a pas de parent on retourne un array vide
    if(!currentElement.parentNode) {
        return siblings;
    }

    //premier enfant
    let sibling = currentElement.parentNode.firstChild;

    //récupéré les élements frères
    while(sibling) {
        if(sibling.nodeType === 1 && sibling !== currentElement) {
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
    answersBtn.forEach(btn => {
        btn.addEventListener('click', () => {
            console.log("clicked");
            let currentAnwser = btn.innerText;
            let correctAnswer = currentAnwsers.filter(answer => answer.result)[0];
            console.log(btn)

            if(currentAnwser) {
                if(currentAnwser !== correctAnswer.text) {
                    btn.classList.add("wrong");
                    getSiblings(btn).filter(sibling => sibling.innerText === correctAnswer.text)[0].classList.add("correct");
                    getSiblings(btn).filter(sibling => sibling.innerText === correctAnswer.text)[0].setAttribute("disabled", "");
                    getSiblings(btn).filter(sibling => sibling.innerText !== correctAnswer.text).forEach(btn => disableBtn(btn));
                } else {
                    btn.classList.add("correct");
                    getSiblings(btn).forEach(btn => disableBtn(btn));
                    correctAnswersCount++;
                }
            }

            if(currentQuestionIndex === 19) {
                nextBtn.innerText = `Resultat`;
            }

            removeDisable(nextBtn);
        })
    })
}

function initResultPage(data, counter) {
    stylesheet.href = "./style/result.css"
    body.innerHTML = `<div class="container-score">
    <div>
        <h1>Ton score</h1>
        <h2>${counter}/${data.length}</h2>
        <p>
            Bravo, tu es un véritable sorcier ! <br />
            L'univers de Harry Potter ne semble pas avoir de secrets pour toi.
            <br />
            Vérifie ton courrier, ta lettre d'admission ne saurait tarder.
        </p>
        <img
            src="./assets/Images/result.gif"
            alt="10 points pour gryffondor! Public en joie "
        />
        </div>
        <a class="button" href="./index.html">Menu</a>
    </div>`
}

nextBtn.addEventListener('click', (e) => {
    currentQuestionIndex++;
    handleProgress(db, currentQuestionIndex);
    displayAnswers(displayQuestion(db, currentQuestionIndex));
    handleLayout(displayQuestion(db, currentQuestionIndex));

    answersBtn.forEach(btn => {
        removeDisable(btn);
        btn.classList.remove("correct");
        btn.classList.remove("wrong");
    });

    disableBtn(nextBtn);

    if(e.currentTarget.innerText.toUpperCase() === "RESULTAT") {
        initResultPage(db, correctAnswersCount);
    }

});

initQuestionPage();