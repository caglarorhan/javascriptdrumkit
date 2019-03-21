window.addEventListener('load', function(){
    loaded();
});



function loaded(){
    window.addEventListener('keydown', function(e){
        console.log(e.key)
        if(keyDrumMap.has(e.key)){
            console.log('This key exist on our Map');
            // Lets play the sound
        let newAudio = document.createElement('AUDIO');
        newAudio.src = wavWay + keyDrumMap.get(e.key)+'.wav';
        newAudio.play();
        }else{
            console.log('This key does not exist on our Map.')
        }
    })
}

let wavWay = './wav/';
let keyDrumMap = new Map();

//keyDrumMap.set(soundKey, soundFile);
keyDrumMap.set('a', 'clap');
keyDrumMap.set('s', 'hihat');
keyDrumMap.set('d', 'kick');
keyDrumMap.set('f', 'openhat');
keyDrumMap.set('g', 'boom');
keyDrumMap.set('h', 'ride');
keyDrumMap.set('j', 'snare');
keyDrumMap.set('k', 'tom');
keyDrumMap.set('l', 'tink');


