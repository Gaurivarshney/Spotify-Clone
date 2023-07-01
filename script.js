console.log('welcome to spotify');

let songIndex = 0;
let audioElement = new Audio('asstes/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Warriyo-Mortals ", filePath: "asstes/1.mp3", coverPath: "asstes/1.jpg" },
    { songName: "Cielo-Huma-Huma", filePath: "asstes/2.mp3", coverPath: "asstes/2.jpg" },
    { songName: "DEAF KEV - Invincible", filePath: "asstes/3.mp3", coverPath: "asstes/3.jpg" },
    { songName: "Different Heaven", filePath: "asstes/4.mp3", coverPath: "asstes/4.jpg" },
    { songName: "Janji-Heros-Tonight-feat", filePath: "asstes/5.mp3", coverPath: "asstes/5.jpg" },
    { songName: " Rabba", filePath: " asstes/6.mp3", coverPath: "asstes/6.jpg" },
    { songName: "Bhula Dena ", filePath: "asstes/7.mp3", coverPath: "asstes/7.jpg" },
    { songName: "Tumahri Kasam ", filePath: "asstes/8.mp3", coverPath: "asstes/8.jpg" },
    { songName: "Meharma ", filePath: "asstes/9.mp3", coverPath: "asstes/9.jpg" },
    { songName: "Hamari Adhuri Kahani ", filePath: "asstes/10.mp3", coverPath: "asstes/10.jpg" },

]
songItems.forEach((element, i) => {

        element.getElementsByTagName("img")[0].src = songs[i].coverPath;
        element.getElementsByClassName("timespamp")[0].innerText = songs[i].songName;
    })
    //audioElement.play();

//Handle play/pause click

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})

const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-play-circle');
        element.classList.add('fa-pause-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `${index+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    })

})
document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 9) {
        songIndex = 0
    } else {
        songIndex += 1;
    }
    audioElement.src = `${index+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})
document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 0
    } else {
        songIndex -= 1;
    }
    audioElement.src = `${index+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');

})