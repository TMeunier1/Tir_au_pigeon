var board = document.getElementById("board");
var pigeon = document.createElement("div");
pigeon.className = "pigeon";
board.appendChild(pigeon);

var pigeonRandom = function(){
    var position = Math.floor(Math.random() * board.length );
    return board[position];
};
pigeonRandom(pigeon);
