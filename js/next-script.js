const rules = document.getElementById("rules-button");
console.log(rules);
rules.addEventListener("click",()=>{
    const rules_container = document.getElementById("rules-container");
    console.log(rules_container);
    rules_container.style.display = "block";
});

const cross_btn = document.getElementById("cross");
cross_btn.addEventListener("click",()=>{
    const rules_container = document.getElementById("rules-container");
    rules_container.style.display = "none";
});
 
const play_again = document.getElementById("play-again-btn");
play_again.addEventListener("click",()=>{
    location.href="/";
});
