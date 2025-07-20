let boxes = document.querySelectorAll(".box");
let player1 = true;

boxes.forEach(function (box) {
    box.addEventListener("click", function () {
        if (box.innerText !== "") return; // prevent overwriting

        if (player1) {
            box.innerText = "X";
            player1 = false;
        } else {
            box.innerText = "O";
            player1 = true;
        }

        box.disabled = true; // prevent clicking again
        checkWinner();
    });
});

function checkWinner() {
    // Get all box values
    let box1 = boxes[0].innerText;
    let box2 = boxes[1].innerText;
    let box3 = boxes[2].innerText;
    let box4 = boxes[3].innerText;
    let box5 = boxes[4].innerText;
    let box6 = boxes[5].innerText;
    let box7 = boxes[6].innerText;
    let box8 = boxes[7].innerText;
    let box9 = boxes[8].innerText;

    // Winning conditions
    if (box1 !== "" && box1 === box2 && box2 === box3) win(box1);
    else if (box4 !== "" && box4 === box5 && box5 === box6) win(box4);
    else if (box7 !== "" && box7 === box8 && box8 === box9) win(box7);
    else if (box1 !== "" && box1 === box4 && box4 === box7) win(box1);
    else if (box2 !== "" && box2 === box5 && box5 === box8) win(box2);
    else if (box3 !== "" && box3 === box6 && box6 === box9) win(box3);
    else if (box1 !== "" && box1 === box5 && box5 === box9) win(box1);
    else if (box3 !== "" && box3 === box5 && box5 === box7) win(box3);
}


function win(player) {
    alert("Player " + player + " wins!");
    resetGame();
}

function resetGame() {
    boxes.forEach(function (box) {
        box.innerText = "";
        box.disabled = false;
    });
    player1 = true;
}
