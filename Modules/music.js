const root = document.getElementById("root")

    // Song title array 
    const songs = ['Picture Me Rolling - Tupac', 'Tupac Shakur Dear Mama', 'Thugz Mansion - Tupac', '2pac ft Outlawz High speed', '2Pac RL Hugger Until The End Of Time Letterbox Version']

        // Loopng through songs in array
    songs.map((val ) => {
        //console.log(index)
        //console.log(val)

        // Creating music card div
        const musicCard = document.createElement('div')
        musicCard.classList = 'music-card'
        root.appendChild(musicCard)

        // // inserting img tag
        const playBtn = document.createElement('img')
        playBtn.setAttribute('id', 'play')

        playBtn.src = '../images/circle-play-solid.svg'
        playBtn.alt = 'play'
        musicCard.appendChild(playBtn)

        // // inserting Audio Tag
        const audio = document.createElement('audio')
        audio.classList = 'audio'
        audio.src = `../songs/${val}.mp3`
        musicCard.appendChild(audio)

        // // Inserting span tag to hold song title
        const songTitle = document.createElement('span')
        songTitle.classList = 'song-title'
        songTitle.innerText = val
        musicCard.appendChild(songTitle)

            // Running functions to play Songs
        function playSong(){
                    musicCard.classList.add('play')
                    
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

    })

