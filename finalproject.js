var userText = document.getElementById("userInput").value;

document.getElementById("resultOne").innerHTML=userText;

function printResults(){

  // counts total number of words in string
  var userText = document.getElementById("userInput").value;
  var totalWord = 0;
  for(var i=0; i<userText.length; i++){
    if(userText[i] === " "){
      totalWord++;
    }
  }

  // counts number of sentences in string
  var totalSentence = 0;
  for(var i=0; i<userText.length; i++){
    if(userText[i] === "." || userText[i] === "?" || userText[i] === "!"){
      totalSentence++;
    }
  }

  // averages number of words per sentence
  var averageWords = (totalWord + 1) / totalSentence;

  // counts number of spaces in string
  var totalSpaces = 0;
  for (var i=0; i<userText.length; i++){
    if(userText[i] === " "){
      totalSpaces++;
    }
  }
  document.getElementById("resultOne").innerHTML = "There are " + totalWord +1 + " words in this text.";
  document.getElementById("resultTwo").innerHTML = "There are " + totalSentence + " sentences in this text.";
  document.getElementById("resultThree").innerHTML = "There is an average of " + averageWords.toFixed(2) + " words per sentence.";
  document.getElementById("resultFour").innerHTML = "There are " + totalSpaces + " spaces in this text.";
}
