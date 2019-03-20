// Declaring variables for ease of reference
var table = document.getElementById("wordTable");
var madLib = document.getElementById("madLib");
var madLibTitle = document.getElementById("madLibTitle");

// A function that saves the word entered by the user in a table cell
function getWord(rowNumber){
  // Generates a list of the cells in the row the button is in
  var rowCells = table.rows[rowNumber].cells;
  // Saves the first and cell in the row as a variable
  var wordType = rowCells[0].innerText.toLowerCase()
  //Declaring local array that contains all vowels
  var vowels = ["a", "e", "i", "o", "u"];
  //Declaring a boolean that gauges if the word type starts with a vowel or not
  var startWithVowel = vowels.includes(wordType.charAt(0));
  // Checks if the first letter of wordType is a vowel to make sure the prompt has the correct article
  if (startWithVowel == true) {
    // Prompts user for a word, using the word type in the first cell in the row (AN)
    var word = prompt("Please enter an " + wordType);
  } else {
    // Prompts user for a word, using the word type in the first cell in the row (A)
    var word = prompt("Please enter a " + wordType);
  }
  // As long as there is something in the text box, this will run
  if (word != null) {
    // Saves the entered word in the second cell in the row
    rowCells[1].innerText = word;
  }
}

// A function that makes the Mad Lib based on the words in the table
function makeMadLib(){
  //Declaring local array for adding words into Mad Lib
  var array = [];
  // Iterates through the rows of table starting at the second row, adding each user-entered word into an array
  for (var i = 1, row; row = table.rows[i]; i++) {
    array.push(row.cells[1]);
  }
  // Reveals Mad Lib title
  madLibTitle.textContent = "Late Night Infomercial";
  // Uses a preset story and adds the words in as they were listed on table from top to bottom
  madLib.textContent = "Welcome again to the "+array[0].textContent+" shopping channel! I'm your host, "+array[1].textContent+", and today we'll be looking at the newest product that's all the rage. The "+array[2].textContent+" "+array[3].textContent+" can do anything! Need something to wash your "+array[4].textContent+"? It will never be "+array[5].textContent+". Tired of "+array[6].textContent+" your "+array[7].textContent+"? Well, it can do that do! This thing can even do your taxes! This "+array[8].textContent+" product can be yours for the low, low price of "+array[9].textContent+" dollars. Hurry and call now, before this product is gone for good! You'll be "+array[10].textContent+" you did!";
  // Gives the div tag the Mad Lib and its title are in the "show" class to make it appear
  document.getElementById("story").className = "show";
  // Gives the generate button the "hide" class to hide it after the button is clicked
  document.getElementById("generateButton").className = "hide";
}
