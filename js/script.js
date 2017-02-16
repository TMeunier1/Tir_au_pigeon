var board = document.getElementById("board");
var pigeon = document.createElement("div");
pigeon.id = "pigeon";
board.appendChild(pigeon);


setInterval (function () {
    pigeon.style.left = Math.floor(Math.random() * board.clientWidth) + "px";
    pigeon.style.top = Math.floor(Math.random() * board.clientHeight) + "px";
    },1000);
    
pigeon.addEventListener("click", function(event){
    board.removeChild(pigeon);
});
