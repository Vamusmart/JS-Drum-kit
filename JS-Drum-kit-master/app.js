//Assign a sound to a variable


let boom = new Audio ('./sounds/boom.wav')
let clap = new Audio ('./sounds/clap.wav')
let hihat = new Audio ('./sounds/hihat.wav')
let kick = new Audio ('./sounds/kick.wav')
let openhat = new Audio ('./sounds/openhat.wav')
let ride = new Audio ('./sounds/ride.wav')
let snare = new Audio ('./sounds/snare.wav')
let tom = new Audio ('./sounds/tom.wav')
let tink = new Audio ('./sounds/tink.wav')


document.addEventListener('keypress', () =>{
let key = event.key;

// Play drum by keyboard press
if(key == "g"){boom.load(),boom.play()}
else if(key == "a"){clap.load(),clap.play()}
else if(key == "s"){hihat.load(),hihat.play()}
else if(key == "d"){kick.load(),kick.play()}
else if(key == "f"){openhat.load(),openhat.play()}
else if(key == "h"){ride.load(),ride.play()}
else if(key == "j"){snare.load(),snare.play()}
else if(key == "k"){tom.load(),tom.play()}
else if(key == "l"){tink.load(),tink.play()}
});


// Play music by mouse click
const g=()=>{boom.load(),boom.play()}
const a=()=>{clap.load(),clap.play()};
const s=()=>{hihat.load(),hihat.play()};
const d=()=>{kick.load(),kick.play()};
const f=()=>{openhat.load(),openhat.play()};
const h=()=>{ride.load(),ride.play()};
const j=()=>{snare.load(),snare.play()};
const k=()=>{tom.load(),tom.play()};
const l=()=>{tink.load(),tink.play()};