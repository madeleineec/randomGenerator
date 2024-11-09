let executeButton = document.getElementById("executeButton");
let outputParagraph = document.getElementById("outputText");
let inputElement = document.getElementById("myInput");

var descriptions = ["super snazzy", "ugly", "gorgeous", "fun", "much improved", "so-so", "insanely amazing", "magical", "kinda nasty", "one-of-a-kind", "strange", "questionable"];

executeButton.addEventListener("click", function(){
	var currentInputText = inputElement.value;
	restyle();
	generate(currentInputText);
});

function restyle() {
	var box1 = document.getElementById('box1');
	var box2 = document.getElementById('box2');
	var box3 = document.getElementById('box3');
	var box4 = document.getElementById('box4');

	var color1 = getRandomColor();
	var color2 = getRandomColor();
	var color3 = getRandomColor();
	var color4 = getRandomColor();

	box1.style.backgroundColor = color1;
	box2.style.backgroundColor = color2;
	box3.style.backgroundColor = color3;
	box4.style.backgroundColor = color4;
}

function getRandomColor() {
	var randomR = Math.floor(Math.random() * 256);
	var randomG = Math.floor(Math.random() * 256);
	var randomB = Math.floor(Math.random() * 256);
	
	return "rgb(" + randomR + "," + randomG + "," + randomB + ")";
}

function generate(userInput) {
	var randomIndex = Math.floor(Math.random()* descriptions.length);
	console.log(randomIndex);
	var selectedDescription = descriptions[randomIndex];
	outputParagraph.innerText = "Hope you like your " + selectedDescription + " color palette, " + userInput + "!";
}