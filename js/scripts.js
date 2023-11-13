document.addEventListener('DOMContentLoaded', function () {
  // Initial quote with vowels replaced by dashes
  var initialQuote = "Believe you can and you're halfway there. Theodore Roosevelt";
  var puzzleOutput = createPuzzle(initialQuote);

  // Display the initial puzzle
  document.getElementById('puzzleResult').textContent = puzzleOutput;
});

function createPuzzle(inputString) {
  var characters = inputString.split('');
  var vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];

  for (var i = 0; i < characters.length; i++) {
    if (vowels.indexOf(characters[i]) !== -1) {
      characters[i] = '-';
    }
  }

  var puzzleOutput = characters.join('');
  return puzzleOutput;
}

function revealAnswer() {
  var initialQuote = "Believe you can and you're halfway there. Theodore Roosevelt";
  document.getElementById('puzzleResult').textContent = initialQuote;
}

function resetPuzzle() {
  var initialQuote = "Believe you can and you're halfway there. Theodore Roosevelt";
  var puzzleOutput = createPuzzle(initialQuote);
  document.getElementById('puzzleResult').textContent = puzzleOutput;
}
