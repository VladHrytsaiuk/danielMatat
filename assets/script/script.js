// switching slider on main

function choiceFirstSlider() {
    document.getElementById("main-vertical-sliders-1").style.display = "block";
    document.getElementById("main-vertical-sliders-2").style.display = "none";
    document.getElementById("underline_sliders").style.transform = "translateX(-60px)";
};

function choiceSecondSlider() {
    document.getElementById("main-vertical-sliders-2").style.display = "block";
    document.getElementById("main-vertical-sliders-1").style.display = "none";
    document.getElementById("underline_sliders").style.transform = "translateX(60px)";
};



// const video_players = document.getElementsByClassName("plyr__video-embed");
// console.log(video_players)

// for (let i = 0; i < video_players.length; i++) {
//     // create_player(video_players[i].getAttribute('id'))
//     new Plyr(video_players[i].getAttribute('id'), {
//         controls: ['play-large'],
//     });
// }

const players = Array.from(document.querySelectorAll('.plyr__video-embed')).map((p) => new Plyr(p, {
    controls: ['play-large', 'play', 'progress', 'current-time', 'mute'],
}));


const players_small = Array.from(document.querySelectorAll('.plyr__video-embed-small')).map((p) => new Plyr(p, {
    controls: ['play-large'],
}));



