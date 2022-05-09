var clicked = false;
function onClick(ballId) {
    document.getElementById("1").style.backgroundColor = "#252e37";
    document.getElementById("2").style.backgroundColor = "#252e37";
    document.getElementById("3").style.backgroundColor = "#252e37";
    document.getElementById("4").style.backgroundColor = "#252e37";
    document.getElementById("5").style.backgroundColor = "#252e37";
    document.getElementById(ballId).style.backgroundColor = "#fb7413";
    document.getElementById("num").innerHTML = ballId;
    clicked = true;
}

function submit() {
    if (clicked) {
        document.getElementById("rating").style.display = "none";
        document.getElementById("thanks").style.display = "flex";
        document.getElementById("card").style.animation = "bounce 0.4s 1"
    }
}