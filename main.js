function createCards(){
	var gameBoard = document.getElementById("game-board");

	for(i=0; i<4; i++){
		var myDiv = document.createElement('div');
		gameBoard.appendChild(myDiv);
		myDiv.className = 'card';
	}
}

createCards();

var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay =[];

var cardElement = document.getElementsByClassName("card");


function createBoard(){
	
	for (var i = 0; i < cards.length; i++) {

		  // this will set the card's 'data-card' to be the element of the array
		  // data — attributes are meant to store data about an element that is not
		  // tied to a style,
		  // i.e., 'king'.
		  
		  cardElement[i].setAttribute('data-card', cards[i]);
		  cardElement[i].addEventListener('click', isTwoCards);
	}
}

createBoard();

//checks to see if there are cards in play
function isTwoCards() {
	if (this.getAttribute('data-card') == "king"){
   this.innerHTML = '<img src="king.png" alt="King of Diamond" />';
} else if (this.getAttribute('data-card') == "queen"){
	this.innerHTML = '<img src="queen.png" alt="Queen of Heart" />';
}

  // add card to array of cards in play
  // 'this' hasn't been covered in this pre-work, but
  // for now, just know it gives you access to the card the user clicked on
  cardsInPlay.push(this.getAttribute('data-card'));

  // if you have two cards in play, check for a match
  if (cardsInPlay.length === 2) {

    // pass the cardsInPlay as an argument to the isMatch function
    isMatch(cardsInPlay);

    // clear cards in play array for your next try
    cardsInPlay = [];

  }

}

	var matchDiv = document.createElement("div");
	document.getElementById("game-board").appendChild(matchDiv);
	matchDiv.style.textAlign = "center";
	matchDiv.style.clear = "both";

function isMatch(cardsInPlayArray){


	if (cardsInPlayArray[0] === cardsInPlayArray[1]){
		matchDiv.innerHTML = "<h3>Matched</h3>";

	} else {
		console.log("No match");
		matchDiv.innerHTML = "<h3>No Matched!</h3>";
	}
	

 	// delay 5 seconds before clearing div
 	
	setTimeout(function() {
  
	for(i=0; i < cardElement.length;i++){
		cardElement[i].innerHTML = " ";
		matchDiv.innerHTML = " ";
	}
	}, 2000);
	

}
