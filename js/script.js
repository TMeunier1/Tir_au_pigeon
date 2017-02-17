var board = document.getElementById("board");

setInterval (function() {
    var pigeon = document.createElement("div");
    pigeon.className = "pigeon";
    board.appendChild(pigeon);
    pigeon.style.left = Math.floor(Math.random() * board.clientWidth) + "px";
    pigeon.style.top = Math.floor(Math.random() * board.clientHeight) + "px";
    setInterval (function () {
        pigeon.style.left = Math.floor(Math.random() * board.clientWidth) + "px";
        pigeon.style.top = Math.floor(Math.random() * board.clientHeight) + "px";
    },1000);

    board.addEventListener("click", function(event){
        var coordonneesH = event.clientX;
        var coordonneesV = event.clientY;
        var pigeonRect = pigeon.getBoundingClientRect();
        console.log(coordonneesH, coordonneesV, pigeonRect);
        if (coordonneesH <= pigeonRect.left + 200 && coordonneesH >= pigeonRect.left - 200 && coordonneesV <= pigeonRect.top + 200 && coordonneesV >= pigeonRect.top - 200) {
            board.removeChild(pigeon);
        }
        });
}, 3000);
