let boxes = document.querySelectorAll(".box");
let btns = document.querySelectorAll(".new-reset-btns");
let para = document.querySelector(".msg");
let count = 0;
let winningPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

let turnX = true;
function disabledAllButtons(){
    for(box of boxes){
        // box.innerText = "";
        box.disabled = true;
    }
}
function enabledAllButtons(){
    for(box of boxes){
        box.innerText = "";
        box.disabled = false;
        para.classList.add("hide");
    }
}
function checkWinner(count){
    if(count === 9){
        para.innerText = "the  game was drawn!";
        para.classList.remove("hide");
    }
    for(pattern of winningPatterns){
        let val1 = boxes[pattern[0]].innerText;
        let val2 = boxes[pattern[1]].innerText;
        let val3 = boxes[pattern[2]].innerText;

        if(val1 !== "" && val2 !== "" && val3 !== ""){
            if(val1 === val2 && val1 === val3){
                para.innerText = `congratulations the winner is ${val1}`;
                para.classList.remove("hide");
                disabledAllButtons();
            }
        }

    }
}
boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        count++;
        if(turnX){
            box.innerText = "x";
            turnX = false;
        }
        else{
            box.innerText = "o";
            turnX = true;
        }
        box.disabled = true;
        checkWinner(count);    
    })
})
btns.forEach((btn)=>{
    btn.addEventListener("click",()=>{
        enabledAllButtons();

    })
})