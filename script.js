function drumSet() {
    const title = document.createElement('h2');
    title.innerText = 'Drums by madobyte';
    const section = document.createElement('section');
    section.id = "drum-kit";
    document.body.prepend(section);
    document.body.prepend(title);
    for (element in data) {
        const drumEl = document.createElement('button');
        drumEl.classList.add(data[element].name);
        drumEl.classList.add("drum");
        drumEl.addEventListener('click', playDrum)
        drumEl.innerText = `${data[element].key} \n ${data[element].name}`
        const drumKit = document.getElementById('drum-kit');
        drumKit.appendChild(drumEl);
    }
}

function playDrum(e) {
    /* Keydown event */
    if ( data.hasOwnProperty(e.code) ) {
        const audio = document.createElement('audio')
        audio.src = data[e.code].sound;
        const targetButton = document.querySelector(`.${data[e.code].name}`)
        targetButton.classList.add('playing');
        if (!audio) return;
        audio.currentTime = 0;
        audio.play();

    } 
    /* Mouse click event */
    for(element in data) {
        const dataName = Object.values(data[element])[1];
        const dataSound = Object.values(data[element])[2];
        const className = e.target.classList[0];
        if (dataName === className) {
            const audio = document.createElement('audio')
            audio.src = dataSound;
            const targetButton = document.querySelector(`.${e.target.classList[0]}`)
            targetButton.classList.add('playing')
            if (!audio) return;
            audio.currentTime = 0;
            audio.play();
        }
    }
}

function removeClass(e) {
    e.target.classList.remove('playing')
}

const data = {
    'KeyA': {key: 'A', name: 'boom', sound: './assets/sounds/boom.wav'},
    'KeyS': {key: 'S', name: 'clap', sound: './assets/sounds/clap.wav'},
    'KeyD': {key: 'D', name: 'hi-hat', sound: './assets/sounds/hihat.wav'},
    'KeyF': {key: 'F', name: 'kick', sound: './assets/sounds/kick.wav'},
    'KeyG': {key: 'G', name: 'open-hat', sound: './assets/sounds/openhat.wav'},
    'KeyH': {key: 'H', name: 'ride', sound: './assets/sounds/ride.wav'},
    'KeyJ': {key: 'J', name: 'snare', sound: './assets/sounds/snare.wav'},
    'KeyK': {key: 'K', name: 'tink', sound: './assets/sounds/tink.wav'},
    'KeyL': {key: 'L', name: 'tom', sound: './assets/sounds/tom.wav'}
}


drumSet();
document.addEventListener('keydown', playDrum);

const keys = document.querySelectorAll('.drum');
keys.forEach(key => key.addEventListener('transitionend',  removeClass));

