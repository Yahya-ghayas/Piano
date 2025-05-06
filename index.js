const keys = document.querySelectorAll(".key");

keys.forEach(key => {
    key.addEventListener("click", () => playNote(key.dataset.note));
});

document.addEventListener("keydown", e => {
    const keyMap = {
        "a": "C",
        "s": "D",
        "d": "E",
        "f": "F",
        "g": "G",
        "h": "A",
        "j": "B"
    };
    const note = keyMap[e.key.toLowerCase()];
    if (note) playNote(note);
});

function playNote(note) {
    const audio = new Audio(`sound/${note}.mp3`);
    audio.play();

    
    const key = [...keys].find(k => k.dataset.note === note);
    if (key) {
        key.classList.add("playing");
        setTimeout(() => key.classList.remove("playing"), 150);
    };
};