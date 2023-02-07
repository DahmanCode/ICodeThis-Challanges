let currentMusic = 0

const music  = document.querySelector('#audio')
const seekbar = document.querySelector('.seek-bar')
const songName = document.querySelector('.music-name')
const artistName = document.querySelector('.artist-name')
const image = document.querySelector('.cover')
const currentTime = document.querySelector('.current-time')
const musicDuration = document.querySelector('.song-duration-time')
const playBtn = document.querySelector('.play-btn')
const forwardBtn = document.querySelector('.forward-btn')
const backwardBtn = document.querySelector('.backward-btn')

const musicList = document.querySelectorAll('.music')

musicList.forEach(musicEl => {
  
  musicEl.addEventListener('click', () => {
    for(i of musicList) {
      i.classList.remove('active')
    }
    musicEl.classList.add('active')
    musicEl.classList.add('stic')
  })
  
});

  for(let j = 0; j < musicList.length; j++) {

    musicList[j].addEventListener('click', () => {
      setMusic(j)
      playMusic()
    })
  }


playBtn.addEventListener('click', () => {
  if(playBtn.className.includes('pause')) {
    music.pause()
    for(i of musicList) {
      i.classList.remove('stic')
    }
  } else {
    music.play()
    for(i of musicList) {
      i.classList.add('stic')
    }
  }
  playBtn.classList.toggle('pause')
})

// setup music

const setMusic = (i) => {
  seekbar.value = 0
  let song = songs[i]
  currentMusic = i
  music.src = song.path

  songName.innerHTML = song.name
  artistName.innerHTML = song.artist
  image.src = `${song.cover}`

  currentTime.innerHTML = '00 : 00'
  setTimeout(() => {
    seekbar.max = music.duration
    musicDuration.innerHTML = formatTime(music.duration)
  }, 300)
}

setMusic(1)

const formatTime = (time) => {
  let min = Math.floor(time / 60)
  if(min < 10) {
    min = `0${min}`
  }
  let sec = Math.floor(time % 60)
  if(sec < 10) {
    sec = `0${sec}`
  }
  return `${min} : ${sec}`
}

// seek bar

setInterval(() => {
  seekbar.value = music.currentTime
  currentTime.innerHTML = formatTime(music.currentTime)
  if(Math.floor(music.currentTime) == Math.floor(seekbar.max)) {
    forwardBtn.click()
  }
}, 500)

seekbar.addEventListener('change', () => {
  music.currentTime = seekbar.value
})

const playMusic = () => {
  music.play()
  playBtn.classList.add('pause')
}

// forward and backward button

moveToMusic = (i) => {
  for(j of musicList) {
    j.classList.remove('active')
  }
  musicList[i].classList.add('active')
  musicList[i].classList.add('stic')
}

forwardBtn.addEventListener('click', () => {

  if(currentMusic >= songs.length - 1) {
    currentMusic = 0
  } else {
    currentMusic++
  }
  moveToMusic(currentMusic)
  setMusic(currentMusic)
  playMusic()
  
})

backwardBtn.addEventListener('click', () => {

  if(currentMusic <= 0) {
    currentMusic = songs.length - 1
  } else {
    currentMusic--
  }

  moveToMusic(currentMusic)
  setMusic(currentMusic)
  playMusic()

})


