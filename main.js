let firstcard = getRandomCard();
let secondcard = getRandomCard();
let  sum = firstcard + secondcard;
let hasBlackjack = false;
let isAlive = true;
let message = ""
let cards = [firstcard, secondcard];


let messageEl = document.getElementById('message-el');
let cardsEl = document.getElementById('cards-el');
let sumEl = document.getElementById('sum-el');


function getRandomCard() {
	return Math.floor(Math.random() *13) + 1
}



function outGame() {
	alert('Oops!!You are out of game, you can not draw new card');
}

function hitJackpot() {
	alert('Congrat! You hit a jackpot')
}

function newCard() {

	if (sum < 21) {
		let card = getRandomCard();
		sum += card
		cards.push(card);
		sumEl.textContent = summ + sum;
		cardsEl.textContent = mon ;

		for ( i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
   

	}else if (sum === 21){
		hitJackpot()
	}else {
		outGame();
	}
	
}


function startGame() {
	// body...

	mon = "Cards: "
	summ = "Sum: "
	sum = firstcard + secondcard;
	cards = [firstcard, secondcard];
	sumEl.textContent = summ + sum;
	cardsEl.textContent = mon 

	for ( i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}
   

	

	if (sum <= 20) {
		message = "Do you want to draw a new card?"
		messageEl.textContent = message;
		 } else if (sum === 21 ) {
		message = "wohoo! you have hit a blackjack";
		hasBlackjack = true;
		messageEl.textContent = message;
		
	}else {
		message = "You are out of the game"
		isAlive = false;
		messageEl.textContent = message;
		
	}
}



function resetBtn() {
	message = "Wanna play a round?";
	hasBlackjack = true;
	messageEl.textContent = message;
	mon = "Cards: "
	summ = "Sum: "
	cards = 0
	sum = 0
	cardsEl.textContent = mon + cards
	sumEl.textContent = summ + sum;
}