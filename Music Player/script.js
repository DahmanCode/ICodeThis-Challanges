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

playBtn.addEventListener('click', () => {
  if(playBtn.className.includes('pause')) {
    music.pause()
  } else {
    music.play()
  }
  playBtn.classList.toggle('pause')
})

// setup music

const setMusic = (i) => {
  seekbar.value = 0
  let song = songs[i]
  currentMusic = i
  music.src = song.path
  console.log(song)

  songName.innerHTML = song.name
  artistName.innerHTML = song.artist
  image.src = `${song.cover}`

  currentTime.innerHTML = '00 : 00'
  setTimeout(() => {
    seekbar.max = music.duration
    musicDuration.innerHTML = formatTime(music.duration)
  }, 300)
}

setMusic(0)

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
}, 500)

seekbar.addEventListener('change', () => {
  music.currentTime = seekbar.value
})

const playMusic = () => {
  music.play()
  playBtn.classList.remove('pause')
}

// forward and backward button

forwardBtn.addEventListener('click', () => {

  if(currentMusic >= songs.length - 1) {
    currentMusic = 0
  } else {
    currentMusic++
  }

  setMusic(currentMusic)
  playBtn.click()
  
})

backwardBtn.addEventListener('click', () => {

  if(currentMusic <= 0) {
    currentMusic = songs.length - 1
  } else {
    currentMusic--
  }

  setMusic(currentMusic)
  playBtn.click()

})