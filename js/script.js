var board = document.getElementById("board");
var pigeon = document.createElement("div");
pigeon.className = "pigeon";
board.appendChild(pigeon);


pigeon.style.left = Math.floor(Math.random() * board.style.width) +"%";
pigeon.style.top = Math.floor(Math.random() * board.style.height) +"%";
