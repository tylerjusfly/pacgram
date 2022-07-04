// const MusicCard = () => {

//     return `
//     <div class="music-card">
//     <img id="play" src="./images/circle-play-solid.svg" alt="play"> 
//     <audio class="audio" src=""></audio>
//     <span class="song-title"> Picture Me Rolling - Tupac </span>
//     </div>
//     `
// }
// const Library = () => {
//     return `
//     <h3>Songs Library</h3>
//     ${MusicCard()}
//     ${MusicCard()}
//     `
// }



// document.getElementById("root").innerHTML = Library()

const root = document.getElementById("root")
// const musicCards = document.querySelectorAll(".music-card")
// const playbtns = document.querySelectorAll("#play")
// const songTitle = document.querySelector(".song-title")
//const audio = document.querySelector(".audio")

    // Song title array 
    const songs = ['Picture Me Rolling - Tupac', 'Tupac Shakur Dear Mama', 'Thugz Mansion - Tupac', '2pac ft Outlawz High speed']


    for(let i = 0; i < songs.length; i++){
        console.log(songs[i])
        //songTitle.innerText = songs[i]
        // Creating music card div
        const musicCard = document.createElement('div')
        musicCard.classList = 'music-card'
        root.appendChild(musicCard)

        // inserting img tag
        const playBtn = document.createElement('img')
        playBtn.setAttribute('id', 'play')
        //imgTag.classList = 'play'
        playBtn.src = '../images/circle-play-solid.svg'
        playBtn.alt = 'play'
        musicCard.appendChild(playBtn)

        // inserting Audio Tag
        const audio = document.createElement('audio')
        const songTitle = document.createElement('span')
        songTitle.classList = 'song-title'
        audio.classList = 'audio'
        songTitle.innerText = songs[i]
        audio.src = `../songs/${songs[i]}.mp3`
        musicCard.appendChild(audio)
        musicCard.appendChild(songTitle)
        //loadSong(songs[i])

            // Running functions
        function playSong(){
                    musicCard.classList.add('play')
                    console.log("playin")
                    audio.play()
                }
        function pauseSong(){
            musicCard.classList.remove('play')
            audio.pause()
         }
     
        //  mother function
            playBtn.addEventListener("click", () => {
        const isPlaying = musicCard.classList.contains('play')

        if(isPlaying){
            pauseSong()
        }
        else{
            playSong()
        }

       })
    }



