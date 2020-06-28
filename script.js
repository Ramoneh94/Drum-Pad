const white_keys = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
// top pads assigned to keys on the bottom board.
const black_keys = ['a', 's', 'd', 'f', 'g'];
// i assign the bottom pads to keys on the keyboard
let keys = document.querySelectorAll('.key');
let whitekeys = document.querySelectorAll(".key.white");
let blackkeys = document.querySelectorAll(".key.black");
let keyPress = document.getElementById("key");
// not sure if this variable does anything "let color"
// This didn't work original because you just handed in an array and tried to treat it like
// an integer.  Just pass in keys.length to send the length of the array as an integer
let color = generateRandomColors(keys.length);

// this is supposed to make the key attached to the note
keys.forEach(key => {
        key.addEventListener("click", () => playNote(key));
    })
    // this selects the note when the key is down
document.addEventListener('keydown', e => {
    // Only use constant variables for global variables.  SInce they only remain in the scope
    // of this function, it's considered good convention to use normal variable declaration

    if (e.repeat) return

    let key = e.key;

    window.console.log(key);

    let whiteKeyIndex = white_keys.indexOf(key);
    let blackKeyIndex = black_keys.indexOf(key);

    if (whiteKeyIndex > -1) playNote(whitekeys[whiteKeyIndex]);
    if (blackKeyIndex > -1) playNote(blackkeys[blackKeyIndex]);

})

// this is supposed to play the note when the key is pressed.
function playNote(key) {
    // Retrieve audio based on note selected
    let noteAudio = document.getElementById(key.dataset.note);
    // currentTime restarts sound when key is pressed. Used for repeat pressing.
    noteAudio.currentTime = 0;
    noteAudio.play();
    key.classList.add('active');
    key.style.backgroundColor = getRandomColor();
    // Remove the active class after audio is finished
    noteAudio.addEventListener('ended', () => {
        key.classList.remove('active');
        key.style.backgroundColor = "black";
    })

}

// Don't clear the console.  You want to either remove the errors, or allow them to be seen.
//console.clear();

/** 
This main function is supposed to select and change each individual pad. 
*/

// This isn't selecting what you want because it's not specific enough.  I'm still unsure of what you want "pads" to be, but I went through and put an empty .pads class on the keys, so it should get them all.
let pads = document.querySelectorAll(".pad"); // I use "piano" to select all of the pads. Doesnt work.

// You can select all of a specific element without using any particular selector (i.e. a period or hashtag).  This will retrieve all <audio> elements on a page
let snare = document.querySelector("audio"); // using "audio" works for some reason.

function getRandomInteger() {
    return Math.floor(Math.random() * 255);
}

// this is supposed to get the pad
function getRandomColor() {
    // Try not to declare a function inside another function.  It gets confusing.
    // I moved getRandomInteger() outside of this function and put it above.
    return `rgb(${getRandomInteger()}, ${getRandomInteger()}, ${getRandomInteger()})`;
}

// this is supposed to change the pad when pressed and play a sound. the color stops when the sound is gone.
// Technically, this function doesn't do anything and it doesn't do anything on a number of levels for several reasons.
// 1st, snare is an array of audio elements, so you can't treat them as an individual with the pause() and play() methods.
// Second, above on the document.addEventListener keydown and the keys.addEventListener click function actually covers everything you're trying to do in the pads function, here.  So we'll just move the randomizing color function into the playNote function to achieve the same result with less code.
/*
pads.forEach(pad =>
    pad.addEventListener("keydown", () => {
        function changeColorBack() {
            snare.removeEventListener("ended", changeColorBack);
            pad.style.backgroundColor = "initial";
        }

        pad.style.backgroundColor = getRandomColor();
        window.console.log(getRandomColor());
        snare.pause();
        snare.time = 0;
        snare.play();
        snare.addEventListener("ended", changeColorBack);
    })
);
*/

/**
The follow code, anything below this line does nothing. Yet, if I remove it, the entire thing is broken. No idea why. 
*/

// does nothing.
// There is no "cheese", so it will do nothing to "cheese".  I think this is already handled elsewhere, anyway
/*
function changeColors(color) {
    for (let index = 0; index < cheese.length; index++) {
        cheese[index].style.background = color;
    }
}
*/
// does nothing.
// It did nothing because the color variable wasn't given anything originally, it should work, now.
function pickColor() {
    //Math.floor(Math.random() * 6 + 1)
    let random = Math.floor(Math.random() * color.length);
    return color[random];

}

// does nothing.
// This works now, explanation in the variable declaration at the top of the page.
function generateRandomColors(num) {
    let arr = []
    for (let index = 0; index < num; index++) {
        arr.push(randomColor())
    }
    return arr;
}

// does nothing.
// This appears to be working now.
function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}