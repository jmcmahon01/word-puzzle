document.addEventListener('DOMContentLoaded', function () {
  // Initial quote with vowels replaced by dashes
  let initialQuote = "Believe you can and you're halfway there. Theodore Roosevelt";
  let puzzleOutput = createPuzzle(initialQuote);

  // Display the initial puzzle
  document.getElementById('puzzleResult').textContent = puzzleOutput;
});

function createPuzzle(inputString) {
  let characters = inputString.split('');
  let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (let i = 0; i < characters.length; i++) {
    if (vowels.indexOf(characters[i]) !== -1) {
      characters[i] = '-';
    }
  }

  let puzzleOutput = characters.join('');
  return puzzleOutput;
}

function revealAnswer() {
  let initialQuote = "Believe you can and you're halfway there. Theodore Roosevelt";
  document.getElementById('puzzleResult').textContent = initialQuote;
}

function resetPuzzle() {
  let initialQuote = "Believe you can and you're halfway there. Theodore Roosevelt";
  let puzzleOutput = createPuzzle(initialQuote);
  document.getElementById('puzzleResult').textContent = puzzleOutput;
}
