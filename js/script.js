let playerscore = 0;
let computerscore = 0;
const playerscore_span = document.getElementById("player-score");
const computerscore_span = document.getElementById("computer-score");
const scoreboard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function getComputerChoice(){
	const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertword(letter){
	if (letter === "r") return "Rock";
	if (letter === "p") return "Paper";
	return "Scissors"; 
}

function wins(playerChoice,ComputerChoice)
{
    playerscore++;
	playerscore_span.innerHTML = playerscore; 
	computerscore_span.innerHTML = computerscore;
	const smallplayerword = "player" .fontsize(3).sup();
	const smallcompword = "comp" .fontsize(3).sup( );
	result_p.innerHTML = `${convertword(playerChoice)}${smallplayerword}  beats  ${convertword(ComputerChoice)}${smallcompword} . you win !`;
}

function lose(playerChoice,ComputerChoice)
{
	computerscore++;
	playerscore_span.innerHTML = playerscore; 
	computerscore_span.innerHTML = computerscore;
	const smallplayerword = "player" .fontsize(3).sup();
	const smallcompword = "comp" .fontsize(3).sup( );
	result_p.innerHTML = `${convertword(playerChoice)}${smallplayerword}  loses  ${convertword(ComputerChoice)}${smallcompword} . you lost !`;
}

function draw(playerChoice,ComputerChoice)
{
	
	const smallplayerword = "player" .fontsize(3).sup();
	const smallcompword = "comp" .fontsize(3).sup( );
	result_p.innerHTML = `${convertword(playerChoice)}${smallplayerword}  equals  ${convertword(ComputerChoice)}${smallcompword} . Its a draw !`;

}

function game(playerChoice){
   const ComputerChoice = getComputerChoice();
 switch(playerChoice + ComputerChoice)
 {
  case "rs":
  case "pr":
  case "sp":
    wins(playerChoice,ComputerChoice);
    break;
  case "rp":
  case "ps":
  case "sr":
    lose(playerChoice,ComputerChoice);
    break;
  case "rr":
  case "pp":
  case "ss":
    draw(playerChoice,ComputerChoice);
    break;
 }

}



function main(){
	rock_div.addEventListener('click',function()
	{
	  game("r");	
	})

	paper_div.addEventListener('click',function()
	{
		game("p");	
	})

	scissors_div.addEventListener('click',function()
	{
		game("s");
	})
}
main();




