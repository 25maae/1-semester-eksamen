"use strict";

/* Spil logik for at flytte en figur (dodger) rundt i et spilområde ved hjælp af piletasterne. */
const dodger = document.getElementById("dodger");
const game = document.getElementById("spil");
const dodgerBredde = 100;
const dodgerHojde = 100;

dodger.style.left = "625px"; // Start i midten horisontalt
dodger.style.bottom = "400px"; // Start i midten vertikalt

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }
  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
  console.log(e.key); // Viser hvilken tast der er trykket
});

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  if (left > 0) {
    dodger.style.left = `${left - 30}px`;
    dodger.style.transform = "scaleX(-1)"; // Vend billedet horisontalt
    playSoundOnMovement();
    tjekKollision();
  } else {
    visProevIgenSkearm();
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);
  const gameWidth = game.offsetWidth; // Få bredden af spilområdet

  if (left < gameWidth - dodgerBredde) {
    // Sørg for at dodger ikke går ud af højre kant
    dodger.style.left = `${left + 30}px`;
    dodger.style.transform = "scaleX(+1)"; // Vend billedet horisontalt
    playSoundOnMovement();
    tjekKollision();
  } else {
    visProevIgenSkearm();
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);
  const gameHeight = game.offsetHeight;

  if (bottom < gameHeight - dodgerHojde) {
    // Sørg for at dodger ikke går ud af toppen
    dodger.style.bottom = `${bottom + 30}px`;
    dodger.style.transform = "rotate(-90deg)"; // rotér billedet vertikalt
    playSoundOnMovement();
    tjekKollision();
  } else {
    visProevIgenSkearm();
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 30}px`;
    dodger.style.transform = "rotate(90deg)"; // rotér billedet vertikalt
    playSoundOnMovement();
    tjekKollision();
  } else {
    visProevIgenSkearm();
  }
}

// Afspiller lyd ved bevægelse
const moveSound = document.getElementById("movementSound");

function playSoundOnMovement() {
  moveSound.currentTime = 0;
  moveSound.volume = 0.1;
  moveSound.play();
}

// Afspiller lyd ved kollation
const gameoverSound = document.getElementById("gameoverSound");

function playSoundOnGameOver() {
  gameoverSound.currentTime = 0;
  gameoverSound.volume = 0.1;
  gameoverSound.play();
}

// Tilføj event listener til knappen for at navigere tilbage start siden
document.getElementById("tilbage").addEventListener("click", function () {
  window.location.href = "../index.html";
});

// Funktion til at vise "Prøv igen" skærm
function visProevIgenSkearm() {
  const proevIgenSkearm = document.getElementById("proevIgenSkearm");
  proevIgenSkearm.style.display = "flex";
  playSoundOnGameOver();
}

// ELEMENTER
const moent = document.getElementById("moent");
const scoreElement = document.getElementById("point");
let score = 0;

// Opdater point
function opdaterPoint() {
  score += 10;
  scoreElement.textContent = score;
  playSoundOnPoint();
}

// Flyt mønt til tilfældig position
function flytMoent() {
  const spilBredde = game.offsetWidth;
  const spilHoejde = game.offsetHeight;

  const randomX = Math.floor(Math.random() * (spilBredde - 50));
  const randomY = Math.floor(Math.random() * (spilHoejde - 50));
  moent.style.left = `${randomX}px`;
  moent.style.bottom = `${randomY}px`;
}

// Initialisér mønt ved start
flytMoent();
function tjekKollision() {
  const dodgerReaction = dodger.getBoundingClientRect();

  // ---- TJEK KOLLISION MED VÆGGE ----
  const veage = document.getElementsByClassName("veag");

  for (let veag of veage) {
    const veagReaction = veag.getBoundingClientRect();
    if (
      dodgerReaction.left < veagReaction.right &&
      dodgerReaction.right > veagReaction.left &&
      dodgerReaction.top < veagReaction.bottom &&
      dodgerReaction.bottom > veagReaction.top
    ) {
      visProevIgenSkearm();
      return true; // Kollision med væg
    }
  }

  // ---- TJEK KOLLISION MED MØNT ----
  const moentReaction = moent.getBoundingClientRect();
  if (
    dodgerReaction.left < moentReaction.right &&
    dodgerReaction.right > moentReaction.left &&
    dodgerReaction.top < moentReaction.bottom &&
    dodgerReaction.bottom > moentReaction.top
  ) {
    opdaterPoint();
    flytMoent();
  }

  return false;
}
