//1. Initial states 
var num;
var turn = 1;
var gameOver = false;

var filled = [false, false, false, false, false, false, false, false, false];
var symbol = ['', '', '', '', '',, '', '', ''];
var winner = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];

//2. NewGame 

var n = document.getElementById("new");
n.addEventListener("click", newGame);

function newGame() {
	document.location.reload();
}

//3. Get square number 
document.getElementById("board").addEventListener("click", function(e) {
	boxClick(e.target.id);
});

function boxClick(numId) {
	var box = document.getElementById(numId);
	
	switch(numId) {
		case "square1": num = 1;
					    break;
		case "square2": num = 2;
						break;
		case "square3": num = 3;
						break;
		case "square4": num = 4;
						break;
		case "square5": num = 5;
						break;
		case "square6": num = 6;
						break;
		case "square7": num = 7;
						break;
		case "square8": num = 8;
						break;
		case "square9": num = 9;
						break;
	}

	//Marking the squares 

	if(gameOver == false){
		if(filled[num-1] == false) {
			if(turn%2 != 0) {
				box.innerText = 'X';
				symbol[num-1] = 'X';
			}
			else {
				box.innerText = 'O';
				symbol[num-1] = 'O';
			}
			turn++;
			filled[num-1] = true;
			
			//5. Winner check 
			var s = symbol[num-1];
			for(var j=0; j < winner.length; j++) {
				if((symbol[winner[j][0]] == s) && (symbol[winner[j][1]] == s) && (symbol[winner[j][2]] == s)) {
					alert("GAME OVER! PLAYER '" + s + "' WINS!");
					gameOver = true;
				}
			}
			
			//draw condition 
			if(turn > 9 && gameOver != true) {
				alert("GAME OVER! IT IS A DRAW!");
				gameOver = true;
			}
		}
		else {
			alert("This box is already filled. Please click on another one.")
		}
	}
	else {
		alert("Game is over. Please click on the New Game button to start again.");
	}
}
