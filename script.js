function calculateScore(callback) {
  const answers = {
    q1: document.getElementById("q1").value.trim(),
    q2: document.getElementById("q2").value.trim(),
    q3: document.getElementById("q3").value.trim(),
  };

  const score = callback(answers);
  document.getElementById("score-output").textContent = `Your Score: ${score}/3`;
}

function strictScoring(answers) {
  let score = 0;
  if (answers.q1 === "4") score++;
  if (answers.q2.toLowerCase() === "paris") score++;
  if (answers.q3 === "let") score++;
  return score;
}

function lenientScoring(answers) {
  let score = 0;
  if (answers.q1 == 4) score++; 
  if (answers.q2.toLowerCase().includes("par")) score++; 
  if (["let", "var", "const"].includes(answers.q3)) score++;
  return score;
}

function checkStrictScore() {
  calculateScore(checkscore);
}


