const root = document.getElementById("root")

    // Song title array 
    const songs = ['Picture Me Rolling - Tupac', 'Tupac Shakur Dear Mama', 'Thugz Mansion - Tupac', '2pac ft Outlawz High speed']


    for(let i = 0; i < songs.length; i++){
        console.log(songs[i])

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
        audio.classList = 'audio'
        audio.src = `../songs/${songs[i]}.mp3`
        musicCard.appendChild(audio)

        // Inserting span tag to hold song title
        const songTitle = document.createElement('span')
        songTitle.classList = 'song-title'
        songTitle.innerText = songs[i]
        musicCard.appendChild(songTitle)

            // Running functions to play Songs
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



