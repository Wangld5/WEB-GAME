var S_flag = 0;
var E_flag = 0;
var path = [0,0,0,0,0];
var Lose = 0;
var cheat = 0;

function addListener(){
    var _wall = document.getElementsByClassName("wall");
    var _path = document.getElementsByClassName("path");
    for(var i=0; i<5; i++){
        _wall[i].addEventListener('mouseover', error);
        _wall[i].addEventListener('mouseout', reset);
        _path[i].addEventListener('mouseover', record);
    }
    var Start = document.getElementById("start");
    var End = document.getElementById("end");
    Start.addEventListener('mouseover', begin);
    End.addEventListener('mouseover', over);
}

function error(event){
    if(S_flag == 1 && E_flag == 0){
        if(Lose!=1){
            event.target.className += " error";
        }
        document.getElementById("result").textContent = "You Lose!!";
        Lose = 1;
        S_flag = 0;
    }
}

function reset(event){
    event.target.className = "wall";
}

function record(event){
    if(event.target.id == "path_1") path[0] = 1;
    if(event.target.id == "path_2") path[1] = 1;
    if(event.target.id == "path_3") path[2] = 1;
    if(event.target.id == "path_4") path[3] = 1;
    if(event.target.id == "path_5") path[4] = 1;
}

function begin(event){
    if(S_flag == 0){
        document.getElementById("result").textContent = "Have a try";
        E_flag = 0;
        Lose = 0;
        cheat = 0;
        for(var i = 0; i < 5; i++){
            path[i] = 0;
        }
    }
    S_flag = 1;
}

function judge(event){
    for(var i=0; i<5; i++){
        if(path[i] == 0) return false;
    }
    return true;
}

function over(event){
    E_flag = 1;
    if(Lose!=1){
        if(judge(event)){
            document.getElementById("result").textContent = "You Win!!";
        }
        else{
            document.getElementById("result").textContent = "Don't cheat, You should start from 'S' and arrive at 'E'";
        }
    }
    else{
        document.getElementById("result").textContent = "Don't cheat, You should start from 'S' and arrive at 'E'";
    }
    S_flag = 0;
}



window.onload = function(){
    addListener();
}
