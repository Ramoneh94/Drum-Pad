const white_keys = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const black_keys = ['a', 's', 'd', 'f', 'g']
let keys = document.querySelectorAll('.key')
let piano = document.querySelectorAll(".black", ".white")
const whitekeys = document.querySelectorAll(".key.white")
const blackkeys = document.querySelectorAll(".key.black")
const keyPress = document.getElementById("key");
let color = generateRandomColors(keys);

keys.forEach(key => {
    key.addEventListener("click", () => playNote(key))
})

document.addEventListener('keydown', e => {
    if (e.repeat) return
    const key = e.key
    const whiteKeyIndex = white_keys.indexOf(key)
    const blackKeyIndex = black_keys.indexOf(key)

    if (whiteKeyIndex > -1) playNote(whitekeys[whiteKeyIndex])
    if (blackKeyIndex > -1) playNote(blackkeys[blackKeyIndex])

})

// all keys
keyPress.addEventListener("keydown", function() {
    color = generateRandomColors(piano);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    for (let index = 0; index < piano.length; index++) {
        piano[index].style.background = color[index];
        piano[index].style.display = "block";
    }

})

for (let index = 0; index < piano.length; index++) {
    // add initial colors to squares
    piano[index].style.background = color[index];

    //add.click listeners to squares
    piano[index].addEventListener("keydown", function name() {
        let clickedcolor = this.style.background;
        if (clickedcolor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedcolor);
            resetButton.textContent = "Play Again?";
            h1.style.background = clickedcolor;

        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";

        }
    });
}


function playNote(key) {
    const noteAudio = document.getElementById(key.dataset.note)
    noteAudio.currentTime = 0
    noteAudio.play()
    key.classList.add('active')
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active')
    })
}

function changeColors(color) {
    for (let index = 0; index < piano.length; index++) {
        piano[index].style.background = color;
    }
}

function pickColor() {
    //Math.floor(Math.random() * 6 + 1)
    let random = Math.floor(Math.random() * color.length);
    return color[random];

}

function generateRandomColors(num) {
    let arr = []
    for (let index = 0; index < num; index++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}