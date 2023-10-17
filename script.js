const pianoKeys = document.querySelectorAll(".piano-keys .key");

let allKeys = [];
let audio = new Audio("");

const playTune = (key) => {
    audio.src = `tunes/${key}.wav`; //routes specific key sound to the current key;
    audio.play();
    //console.log(allKeys);

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active"); // removes key pressed down after 150;
    }, 150);
}

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
    console.log(key.dataset.key);
});

const pressedKey = (e) => {
    if (allKeys.includes(e.key)) playTune(e.key);
}

document.addEventListener("keydown", pressedKey);