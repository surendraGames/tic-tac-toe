const arr=[1,2,3,4,5];
let boxes=document.querySelectorAll(".item");
let reset=document.querySelector(".btn-reset");


let turnFlag=true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

const resetAllData=()=>{
    turnFlag=true;
    boxes.forEach((item)=>{
        item.innerHTML=""
    })
}

const checkWinner=()=>{
    for(let pattern of winPatterns) {
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;

        if(p1!="" && p2!="" && p3!="" && p1==p2 && p2==p3){
            console.log("winner",p1,p2,p3);
            
            setTimeout(() => {
                alert("Player "+p1 + " is winner");
                resetAllData();
            }, 100);
            

            break;
        }

        
    }
}

boxes.forEach((item)=>{
    item.addEventListener("click",()=>{
        turnFlag?item.innerHTML="X":item.innerHTML="O";
        turnFlag=!turnFlag;
        checkWinner();
        // console.log("called box item", item.innerText);
    })
})

reset.addEventListener("click",()=>{
    turnFlag=true;
    resetAllData();
    alert("Reset Successfully!")
})