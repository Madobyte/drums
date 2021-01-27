function drumSet() {
    const section = document.createElement('section');
    section.id = "drum-kit";
    document.body.prepend(section)
    for (element in data) {
        const drumEl = document.createElement('div');
        drumEl.classList.add(data[element].name);
        drumEl.classList.add("drum");
        drumEl.innerText = data[element].name;
        const drumKit = document.getElementById('drum-kit');
        drumKit.appendChild(drumEl);
    }
}

/* Another way to play */
/* function playDrum(e) {
    const audio = document.createElement('audio')
    const source = document.createElement('source')
    source.src = data[e.code].sound;
    source.type = "audio/wasaasasasasasv";
    audio.appendChild(source);
    audio.play();
} */

function playDrum(e) {
    console.log(e.code)
    if ( data.hasOwnProperty(e.code) ) {
        const audio = document.createElement('audio')
        audio.src = data[e.code].sound;
        audio.load();
        audio.play();
    }
}

const data = {
    'KeyA': {name: 'boom', sound: './assets/sounds/boom.wav'},
    'KeyS': {name: 'clap', sound: './assets/sounds/clap.wav'},
    'KeyD': {name: 'hihat', sound: './assets/sounds/hihat.wav'},
    'KeyF': {name: 'kick', sound: './assets/sounds/kick.wav'},
    'KeyG': {name: 'openhat', sound: './assets/sounds/openhat.wav'},
    'KeyH': {name: 'ride', sound: './assets/sounds/ride.wav'},
    'KeyJ': {name: 'snare', sound: './assets/sounds/snare.wav'},
    'KeyK': {name: 'tink', sound: './assets/sounds/tink.wav'},
    'KeyL': {name: 'tom', sound: './assets/sounds/tom.wav'}
}

drumSet();
document.addEventListener('keydown', playDrum)