const MusicCard = () => {

    return `
    <div class="music-card">
    <img id="play" src="./images/circle-play-solid.svg" alt="play"> 
    <audio class="audio" src=""></audio>
    <span class="song-title"> Picture Me Rolling - Tupac </span>
    </div>
    `
}



const Library = () => {

    return `
    <h3>Songs Library</h3>
    ${MusicCard()}
    ${MusicCard()}
    ${MusicCard()}
`
}

document.getElementById("root").innerHTML = Library()

const musicCard = document.querySelector(".music-card")
const playbtns = document.querySelectorAll("#play")
const songTitle = document.querySelector(".song-title")
const audio = document.querySelector(".audio")


// Song title array 
const songs = ['Picture Me Rolling - Tupac', 'Tupac Shakur Dear Mama', 'Thugz Mansion - Tupac', '2pac ft Outlawz High speed']

// Keep track on songs 
let songIndex = 3

// load song Info
loadSong(songs[songIndex])

function loadSong(song){
    songTitle.innerText = song
    audio.src = `../songs/${song}.mp3`
}
function playSong(){
    musicCard.classList.add('play')
    console.log("playin")
    audio.play()
}
function pauseSong(){
    musicCard.classList.remove('play')
    audio.pause()
}


Array.from(playbtns).map(playbtn => {
    playbtn.addEventListener("click", () => {
        const isPlaying = musicCard.classList.contains('play')

        if(isPlaying){
            pauseSong()
        }
        else{
            playSong()
        }

       })
})