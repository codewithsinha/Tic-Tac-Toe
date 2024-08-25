let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".reset");
let msgcontainer = document.querySelector(".msg-container");
let newgame = document.querySelector("#newbtn");
let msg = document.querySelector("#msg");
//two players: playerX & playero


let turnO = true;

const winnerpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];
const resetgame = () => {
    turnO = true;
    enableboxes();
    msgcontainer.classList.add("hide");

}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("a box was clicked");

        if (turnO === true) {
            box.innerText = ("O");
            turnO = false;
        }
        else {
            box.innerText = ("X");
            turnO = true;
        }
        box.disabled = true;
        checkwinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
};

const showwinner =(winner) => {
    msg.innerText = `Congratulations, Winner is  ${winner}`;
    msgcontainer.classList.remove("hide");
    disableboxes();
}

const checkwinner = () => {
    for (let pattern of winnerpatterns) {
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                console.log("winner", val1);
                showwinner(val1);
            }
        }

    }
};

newgame.addEventListener("click", resetgame);
resetbtn.addEventListener("click", resetgame);