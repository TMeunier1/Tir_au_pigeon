var board = document.getElementById("board");
var pigeon = document.createElement("div");
pigeon.id = "pigeon";
board.appendChild(pigeon);

console.log("plop", board);
pigeon.style.left = Math.floor(Math.random() * board.clientWidth) + "px";
pigeon.style.top = Math.floor(Math.random() * board.clientHeight) + "px";
