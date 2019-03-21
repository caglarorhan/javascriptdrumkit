window.addEventListener('load', function(){
    loaded();
});



function loaded(){
    window.addEventListener('keydown', function(e){
        console.log(e.key)
        if(keyDrumMap.has(e.key)){
            console.log('Bu key sesi var');
            // Oyleyse calmaliyiz
        let newAudio = document.createElement('AUDIO');
        newAudio.src = wavWay + keyDrumMap.get(e.key)+'.wav';
        newAudio.play();
        }else{
            console.log('Bu key sesi tanimlanmamis.')
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


