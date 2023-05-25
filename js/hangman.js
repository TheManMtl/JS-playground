$(document).ready(function() {
    var words = ['hangman', 'javascript', 'jquery', 'programming', 'openai'];
    var chosenWord;
    var wordArray;
    var incorrectGuesses = 0;
    var maxIncorrectGuesses = 6;
  
    function initializeGame() {
      chosenWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
      wordArray = chosenWord.split('').map(function() { return '_'; });
      incorrectGuesses = 0;
      updateWordDisplay();
      updateIncorrectGuesses();
      $('#letterInput').val('');
      $('#letterInput').focus();
      resetHangman();
    }
  
    function updateWordDisplay() {
      $('#word').text(wordArray.join(' '));
    }
  
    function updateIncorrectGuesses() {
      $('#incorrectGuesses').text(incorrectGuesses);
    }
  
    function handleGuess() {
      var letter = $('#letterInput').val().toUpperCase();
      $('#letterInput').val('');
  
      if (!letter.match(/^[A-Z]$/)) {
        alert('Please enter a valid letter.');
        return;
      }
  
      if (wordArray.indexOf(letter) !== -1) {
        alert('You have already guessed that letter.');
        return;
      }
  
      var letterIndex = chosenWord.indexOf(letter);
      if (letterIndex === -1) {
        incorrectGuesses++;
        updateIncorrectGuesses();
        animateHangman(incorrectGuesses);
        if (incorrectGuesses === maxIncorrectGuesses) {
          alert('Game over! The word was: ' + chosenWord);
          initializeGame();
        }
      } else {
        while (letterIndex !== -1) {
          wordArray[letterIndex] = letter;
          letterIndex = chosenWord.indexOf(letter, letterIndex + 1);
        }
        updateWordDisplay();
        if (wordArray.indexOf('_') === -1) {
          alert('Congratulations! You guessed the word: ' + chosenWord);
          initializeGame();
        }
      }
    }
  
    function animateHangman(wrongGuesses) {
      $('.hangman-piece:nth-child(' + wrongGuesses + ')').css('opacity', '1');
    }
  
    function resetHangman() {
      $('.hangman-piece').css('opacity', '0');
    }
  
    $('#guessButton').click(handleGuess);
    $('#letterInput').keypress(function(event) {
      if (event.which === 13) {
        handleGuess();
      }
    });
  
    initializeGame();
  });
  