const b1 = document.getElementsByClassName("boxtext");

let turn = '';
let isgameover = false;
// Turn change condition.....

const changeTurn = ()=>{
    player1.addEventListener('click', ()=>{
       turn= "O";
      
        });
       player2.addEventListener('click', ()=>{
           turn= "X";
           });
 //return turn === "X"? "O": "X"
     return turn = ''
  
}
// winning Conditions
    const checkWin = ()=>{
       let boxtext = document.getElementsByClassName('boxtext');
        let wins = [
           [0, 1, 2],
           [3, 4, 5],
           [6, 7, 8],
           [0, 3, 6],  
           [1, 4, 7],
           [2, 5, 8],
           [0, 4, 8],
           [2, 4, 6]
        ]
        wins.forEach(e =>{
           if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && 
           (boxtext[e[2]].innerText === boxtext[e[1]].innerText) &&
            (boxtext[e[0]].innerText !== "") ){
               document.querySelector('.wincon').innerText = boxtext[e[0]].innerText + " Won"
               isgameover = true
            
            //    Disable();

               // document.querySelector(".line").style.transform = `translate(${e[3]}vw, ${e[4]}vw) rotate(${e[5]}deg)`
               // document.querySelector(".line").style.width = "50vw";
           }
            
           
       })
       
   }
   

   let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
   let boxtext = element.querySelector('.boxtext');
   element.addEventListener('click', ()=>{
       if(boxtext.innerText === ''){
           boxtext.innerText = turn;
           turn = changeTurn();
          
           checkWin();
           if (!isgameover){
               document.getElementsByClassName("wincon")[0].innerText  = "Turn for " + turn;
           } 
       }
   })
})

reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = changeTurn();
    isgameover = false
    // document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("wincon")[0].innerText = "Turn for " + turn;
    // document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})
function Disable()
{
    b1.disabled=true;
}
// function handleRestartGame() {
//     gameActive = true;
//     currentPlayer = "O";
//     gameState = ["", "", "", "", "", "", "", "", ""];
//     statusDisplay.innerHTML = currentPlayerTurn();
//     document.querySelectorAll(".cell").forEach((cell) => (cell.innerHTML = ""));
//   }
// $(document).ready(function(){
//     $(".reset").click(function(){
//       $("p").empty();
//     });
//     $(".reset").click(function(){
//         $("h2").reload(page);
//       });
//   });