let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");

let nueGameBtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".message-paragraph");
let msg=document.querySelector("#msg");

let turnO=true;
// let turnX=true;

const winpatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetgame=()=>{
    turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}

boxes.forEach((box)=>{
    box.addEventListener('click',()=>{
        if(turnO===true){
            box.innerText="O";
            turnO=false;
            box.style.color="green";
        }
        else{
            box.innerText="X";
            turnO=true;
            box.style.color="red";
        }
        box.disabled=true;

        checkwinner();        
    })
})

const disabledBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const showwinnwr=(winnewr)=>{
    msg.innerText=`Well Done winner is ${winnewr}`;
    msgcontainer.classList.remove("hide");
    disabledBoxes();
}

const checkwinner=()=>{
    for(let pattern of winpatterns){
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText);

            let pos1=boxes[pattern[0]].innerText
            let pos2=boxes[pattern[1]].innerText
            let pos3=boxes[pattern[2]].innerText

            if(pos1 != "" && pos2 != "" && pos3 != ""){
                if(pos1===pos2 && pos2===pos3){
                    showwinnwr(pos1);
                }

            }
    }   
}


nueGameBtn.addEventListener("click",resetgame);
resetbtn.addEventListener("click",resetgame);