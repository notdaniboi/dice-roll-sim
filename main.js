let outputEl = document.getElementById("output");

document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  let selection = document.getElementById("menu").value;

  if (selection === "roll-once") {
    rollOnce();
  } else if (selection === "roll-five") {
    roll5Times();
  } else if (selection === "role-n") {
    rollNTimes();
  } else if (selection === "snake-eyes") {
    snakeEyes();
  }
}

function rollOnce() {
  let die1 = Math.floor(Math.random() * 6) + 1;
  let die2 = Math.floor(Math.random() * 6) + 1;
  let total = die1 + die2;

  let pEl = document.createElement("p");
  pEl.innerHTML = `${die1},${die2} (sum: ${total})`;
  outputEl.appendChild(pEl);
}

function roll5Times() {
  for (let i = 0; i < 5; i++) {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const total = die1 + die2;

    let pEl = document.createElement("p");
    pEl.innerHTML = `${i + 1}, ${die1}, ${die2}, (sum: ${total})`;
    outputEl.appendChild(pEl);
  }
}

function rollNTimes() {
  for (let i = 0; i < n; i++) {
    const rollResult = Math.floor(Math.random() * 6) + 1;

    let pEl = document.createElement("p");
    pEl.innerHTML = `${i + 1}: ${rollResult}`;
    outputEl.appendChild(pEl);
  }
}

function snakeEyes() {
  let attempts = 0;
  while (true) {
    const die1 = Math.floor(Math.random() * 6) + 1;
    const die2 = Math.floor(Math.random() * 6) + 1;
    const total = die1 + die2;
    attempts++;

    let pEl = document.createElement("p");
    pEl.innerHTML = `${attempts} ${die1}, ${die2}`;
    outputEl.appendChild(pEl);

    if (die1 === 1 && die2 === 1) {
      `Snake eyes! It took ${attempts}`;
      break;
    }
  }
}
