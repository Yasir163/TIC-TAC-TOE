console.log("welcome to the game")
let music = new Audio("clicking.mp3")
let turnchange = new Audio("turn.mp3")
let gameover = new Audio("end.mp3")
let isgameover = false;

let turn = "X";

const changeTurn = () =>{

    return turn === 'X'?'0':"X";
}
//  check winner
const checkWin = () =>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ]
    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[1]].innerText === boxtext[e[2]].innerText)&& (boxtext[e[0]].innerText !== "" )){
            document.querySelector('.info').innerHTML = boxtext[e[0]].innerText + " won"
            isgameover = true
            document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width="150px";
        }
    })
}

// game logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',() =>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn()
            turnchange.play();
            checkWin();
            if(!isgameover){
            document.getElementsByClassName('info')[0].innerHTML = "Turn for" + turn;
            }
        }
    })
})
let reset = document.getElementsByClassName("reset");
reset[0].addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText= ""
    });
    turn = "X";
    isgameover=false;
    document.getElementsByClassName("info")[0].innerHTML = "Turn for" + turn;
    document.querySelector('.imgbox').getElementsByTagName("img")[0].style.width="0px";

})