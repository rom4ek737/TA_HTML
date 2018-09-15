var count = 0;
var userNumber;
var randomNumber = Math.floor(Math.random() * Math.floor(5) + 1);
var playTheGame = confirm("Play the game?");
var bool = false;

//console.log(randomNumber);
if (playTheGame) {
  while(!bool) {
    userNumber = prompt("Please, enter the number from 1 to 5:");
    if (userNumber < 1 || userNumber > 5) {
      alert("Please, enter the valid number");
    }
    else {
      count ++;
     if (count < 3) {
      if (userNumber == randomNumber) {
        alert("Congratulations!You are winner!");
        bool = true;
     }
      }
      else {
        alert("Today is not your day.");
        bool = true;
      }
    }
  }
}
else {
  alert("Not today");
}