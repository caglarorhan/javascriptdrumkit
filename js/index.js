window.addEventListener('load', function(){
    loaded();
});



function loaded(){
    window.addEventListener('keydown', function(e){
        //console.log(e.key + ' key pressed!');
        playTheSound(e.key)

    })

    document.querySelectorAll("div.key").forEach(function(elem){
        elem.addEventListener('click', function (e) {

            let thatKey = e.target.dataset.key? e.target.dataset.key : e.target.parentNode.dataset.key;
            //console.log(thatKey+ ' key clicked.');
            playTheSound(thatKey);

        });

    })
}

function playTheSound(theKey){
    if(keyDrumMap.has(theKey)){
        //console.log('This key exist on our Map');
        // Lets play the sound
        let newAudio = document.createElement('AUDIO');
        //newAudio.id = theKey;
        newAudio.src = wavWay + keyDrumMap.get(theKey)+'.wav';
        newAudio.play();
        newAudio.addEventListener('ended', function(newAudio){
            document.querySelector(`.key[data-key=${theKey}]`).classList.remove('playing');
            newAudio =null;
        });
        newAudio.addEventListener('play',function(){
            if(document.querySelector(`.key[data-key=${theKey}]`).style.webkitAnimationPlayState=='running'){
                document.querySelector(`.key[data-key=${theKey}]`).classList.remove('playing');
            }
                document.querySelector(`.key[data-key=${theKey}]`).classList.add('playing');


        });


    }else{
        console.log('This key does not exist on our Map.')
    }
}


const wavWay = './wav/';
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


