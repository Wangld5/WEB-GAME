var count = 0;
var sign = 0;
var current = 0;
//the main function
window.onload = function(){
    document.getElementById("S_E").onclick = StartOrStop;
    button = document.getElementsByClassName("hole");
}
//calculate the time
var clock = 31;
function _time(){
    clock--;
    document.getElementById("time").value = clock;
    time_value = setTimeout(_time, 1000);
    if(clock == 0){
        clearInterval(time_value);
        document.getElementById("result").value = "Game Over";
        document.getElementById("show").textContent = "Game is over. Your score is "+document.getElementById("score").value;
        sign = 0;
        button[current].checked = false;
    }
}
//judge whether the game is start
function StartOrStop(){
    if(sign == 0){
        document.getElementById("contain").innerHTML = "";
        create_button();
        sign = 1;
        count = 0;
        clock = 31;
        Random();
        document.getElementById("show").innerHTML = "";
        document.getElementById("score").value = count;
        document.getElementById("result").value = "Playing";
        document.getElementById("time").value = clock;
        _time();
    }
    else{
        document.getElementById("show").textContent = "Game is over. Your score is "+document.getElementById("score").value;
        sign = 0;
        clock = 0;
        document.getElementById("result").value = "Game over";
        clearInterval(time_value);
        button[current].checked = false;
    }
}
//provide random value
function Random(){
    if(clock!=0){
        current = Math.round(Math.random()*60-1);
        button[current].checked = true;
    }
}
//deal with the count
function button_react(event){
    if(clock!=0){
        if(before == true){
            count++;
            this.checked = false;
            Random();
        }
        else{
            if(count!=0)
                count--;
            this.checked = false;
            button[current].checked = false;
            Random();
        }
        document.getElementById("score").value = count;
    }
    else{
        this.checked = false;
    }
}
//check the button before clicked
function before_click(event){
    before = this.checked;
}
//create button;
function create_button(){
    var Contain = document.getElementById("contain");
    for(var i=0; i<60; i++){
        var NewButton = document.createElement("input");
        NewButton.setAttribute("type","radio");
        NewButton.className = "hole";
        NewButton.addEventListener("click", button_react);
        NewButton.addEventListener("mouseover", before_click);
        Contain.appendChild(NewButton);
    }
}