var board = document.getElementById("board");
var pigeon = document.createElement("div");
pigeon.className = "pigeon";
board.appendChild(pigeon);
pigeon.style.left = Math.floor(Math.random() * board.clientWidth) + "px";
pigeon.style.top = Math.floor(Math.random() * board.clientHeight) + "px";

setInterval (function () {
    pigeon.style.left = Math.floor(Math.random() * board.clientWidth) + "px";
    pigeon.style.top = Math.floor(Math.random() * board.clientHeight) + "px";
},1000);

pigeon.addEventListener("click", function(event){
    board.removeChild(this);
});

setInterval (function() {
    pigeon = document.createElement("div");
    board.appendChild(pigeon);
    pigeon.className = "pigeon";
    pigeon.style.left = Math.floor(Math.random() * board.clientWidth) + "px";
    pigeon.style.top = Math.floor(Math.random() * board.clientHeight) + "px";
}, 5000)
