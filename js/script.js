function setLocalStorage(){
    const human_score = document.getElementById("human-score");
    const computer_score = document.getElementById("computer-score");
    
    if(localStorage.getItem("computer-score" == null)){
        localStorage.setItem("computer-score",0);
    }  
    computer_score.innerHTML = localStorage.getItem("computer-score");
    if(localStorage.getItem("human-score" == null)){
        localStorage.setItem("humam-score",0);
    }   
    human_score.innerHTML = localStorage.getItem("human-score")
};

const rules = document.getElementById("rules-button");
rules.addEventListener("click",()=>{
    const rules_container = document.getElementById("rules-container");
    console.log(rules_container);
    rules_container.style.display = "block";
})

const next = document.getElementById("next-button");
next.addEventListener("click",()=>{
    location.href='next.html';
})

const cross = document.getElementById("cross");
cross.addEventListener("click",()=>{
    const rule_text = document.getElementById("rules-container");
    rule_text.style.display = "none";
});

const rock = document.getElementById("rock-btn");

const paper = document.getElementById("paper-btn");

const scissor = document.getElementById("scissors-btn");

const spcClick = () =>{
    const spc = document.getElementsByClassName('spc-selection')[0];
    const spc_game = document.getElementsByClassName('spc-game')[0];   
    console.log(spc);
    spc.style.transform = "translate(-60%,50px)"
    spc_game.style.display= "flex";
}

const rockClick = () =>{
    const human_spc = document.getElementById("human-input");
    const computer_spc = document.getElementById("computer-input");
    human_spc.innerHTML = `<button class="rock"><img src="./images/icons8-fist-67.png" alt="Rock"/></button>`;
    const num = Math.floor(Math.random()*3);
    const result = document.getElementById("result-output");
    const human_score = document.getElementById("human-score");
    const computer_score = document.getElementById("computer-score"); 
    console.log(num);
    if(num == 0){
        computer_spc.innerHTML = `<button class="rock"><img src="./images/icons8-fist-67.png" alt="Rock"/></button>`;
        result.innerHTML = "TIE UP<br><button id='play-again-btn' class='replay-btn'>REPLAY</button>";
    }
    else if(num == 1){
        computer_spc.innerHTML = `<button class="paper"><img src="./images/icons8-hand-64.png" alt="Paper"/></button>`;
        result.innerHTML = "YOU LOST AGAINST PC<br><button id='play-again-btn'>PLAY AGAIN</button>";
        
        if(localStorage.getItem("computer-score" == null)){
            localStorage.setItem("computer-score",1);
        }
        else{
            localStorage.setItem("computer-score",parseInt(localStorage.getItem("computer-score")) + 1);
        }
        computer_score.innerHTML = localStorage.getItem("computer-score");
    }
    else{
        computer_spc.innerHTML = `<button class="scissors"><img src="./images/icons8-finger.png" alt="Scissors"/></button>`;        
        result.innerHTML = "YOU WIN AGAINST PC<br><button id='play-again-btn'>PLAY AGAIN</button>";
        const next = document.getElementById("next-button");
        const rules = document.getElementById("rules-button");
        next.style.display = "block";
        rules.style.right = "10%";

        if(localStorage.getItem("human-score" == null)){
            localStorage.setItem("human-score",1);
        }
        else{
            localStorage.setItem("human-score",parseInt(localStorage.getItem("human-score")) + 1);
        }   
        human_score.innerHTML = localStorage.getItem("human-score");        
    }

    const play_again = document.getElementById('play-again-btn');
    console.log(play_again);
    const spcSelection = () => {
        const spc = document.getElementsByClassName('spc-selection')[0];
        const spc_game = document.getElementsByClassName('spc-game')[0];    
        spc.style.transform = "unset";
        spc_game.style.display= "none";
    }

    play_again.addEventListener("click",spcSelection);    

    
}

const paperClick = () =>{
    const human_spc = document.getElementById("human-input");
    const computer_spc = document.getElementById("computer-input");
    human_spc.innerHTML = `<button class="paper"><img src="./images/icons8-hand-64.png" alt="Paper"/></button>`;
    const human_score = document.getElementById("human-score");
    const computer_score = document.getElementById("computer-score"); 
    const num = Math.floor(Math.random()*3);
    const result = document.getElementById("result-output");
    console.log(num);
    if(num == 0){
        computer_spc.innerHTML = `<button class="paper"><img src="./images/icons8-hand-64.png" alt="Paper"/></button>`;
        result.innerHTML = "TIE UP<br><button id='play-again-btn' class='replay-btn'>REPLAY</button>";
    }
    else if(num == 1){
        computer_spc.innerHTML = `<button class="rock"><img src="./images/icons8-fist-67.png" alt="Rock"/></button>`;
        result.innerHTML = "YOU WIN AGAINST PC<br><button id='play-again-btn'>PLAY AGAIN</button>";
        const next = document.getElementById("next-button");
        const rules = document.getElementById("rules-button");
        next.style.display = "block";
        rules.style.right = "10%";        
        if(localStorage.getItem("human-score" == null)){
            localStorage.setItem("human-score",1);
        }
        else{
            localStorage.setItem("human-score",parseInt(localStorage.getItem("human-score")) + 1);
        }   
        human_score.innerHTML = localStorage.getItem("human-score");
    }
    else{
        computer_spc.innerHTML = `<button class="scissors"><img src="./images/icons8-finger.png" alt="Scissors"/></button>`;        
        result.innerHTML = "YOU LOST AGAINST PC<br><button id='play-again-btn'>PLAY AGAIN</button>";
        if(localStorage.getItem("computer-score" == null)){
            localStorage.setItem("computer-score",1);
        }
        else{
            localStorage.setItem("computer-score",parseInt(localStorage.getItem("computer-score")) + 1);
        }
        computer_score.innerHTML = localStorage.getItem("computer-score");       
    }

    const play_again = document.getElementById('play-again-btn');
    console.log(play_again);
    const spcSelection = () => {
        const spc = document.getElementsByClassName('spc-selection')[0];
        const spc_game = document.getElementsByClassName('spc-game')[0];    
        spc.style.transform = "unset";
        spc_game.style.display= "none";
    }

    play_again.addEventListener("click",spcSelection);     

}


const scissorClick = () =>{
    const human_spc = document.getElementById("human-input");
    const computer_spc = document.getElementById("computer-input");
    const human_score = document.getElementById("human-score");
    const computer_score = document.getElementById("computer-score"); 
    human_spc.innerHTML = `<button class="scissors"><img src="./images/icons8-finger.png" alt="Scisssors"/></button>`;
    const num = Math.floor(Math.random()*3);
    const result = document.getElementById("result-output");
    console.log(num);
    if(num == 0){
        computer_spc.innerHTML = `<button class="scissors"><img src="./images/icons8-finger.png" alt="Scissor"></button>`;
        result.innerHTML = "TIE UP<br><button id='play-again-btn' class='replay-btn'>REPLAY</button>";
    }
    else if(num == 1){
        computer_spc.innerHTML = `<button class="paper"><img src="./images/icons8-hand-64.png" alt="Paper"/></button>`;
        result.innerHTML = "YOU WIN AGAINST PC<br><button id='play-again-btn'>PLAY AGAIN</button>";
        const next = document.getElementById("next-button");
        const rules = document.getElementById("rules-button");
        next.style.display = "block";
        rules.style.right = "10%";
        if(localStorage.getItem("human-score" == null)){
            localStorage.setItem("human-score",1);
        }
        else{
            localStorage.setItem("human-score",parseInt(localStorage.getItem("human-score")) + 1);
        }   
        human_score.innerHTML = localStorage.getItem("human-score");
    }
    else{
        computer_spc.innerHTML = `<button class="rock"><img src="./images/icons8-fist-67.png" alt="Rock"/></button>`;     
        result.innerHTML = "YOU LOST AGAINST PC<br><button id='play-again-btn'>PLAY AGAIN</button>";
        if(localStorage.getItem("computer-score" == null)){
            localStorage.setItem("computer-score",1);            
        }
        else{
            localStorage.setItem("computer-score",parseInt(localStorage.getItem("computer-score")) + 1);
        }
        computer_score.innerHTML = localStorage.getItem("computer-score");
    }

    const play_again = document.getElementById('play-again-btn');
    console.log(play_again);
    const spcSelection = () => {
        const spc = document.getElementsByClassName('spc-selection')[0];
        const spc_game = document.getElementsByClassName('spc-game')[0];    
        spc.style.transform = "unset";
        spc_game.style.display= "none";
    }
    play_again.addEventListener("click",spcSelection);
}


rock.addEventListener("click",spcClick)
rock.addEventListener("click",rockClick);
paper.addEventListener("click",spcClick);
paper.addEventListener("click",paperClick);
scissor.addEventListener("click",spcClick);
scissor.addEventListener("click",scissorClick);


