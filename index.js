var drumLength = document.querySelectorAll(".drum").length;

for (var i = 0; i < drumLength; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        play(this.innerHTML);
    })
}

document.addEventListener("keypress",function(event){
    play(event.key);
})

function play(key) {
    var audio;
    if (key == 'w')
        audio = new Audio("sounds/crash.mp3");
    else if (key == 'a')
        audio = new Audio("sounds/kick-bass.mp3");
    else if (key == 's')
        audio = new Audio("sounds/snare.mp3");
    else if (key == 'd')
        audio = new Audio("sounds/tom-1.mp3");
    else if (key == 'j')
        audio = new Audio("sounds/tom-2.mp3");
    else if (key == 'k')
        audio = new Audio("sounds/tom-3.mp3");
    else if (key == 'l')
        audio = new Audio("sounds/tom-4.mp3");

    audio.play();

}