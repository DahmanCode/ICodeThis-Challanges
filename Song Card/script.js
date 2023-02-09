const music  = document.querySelector('#audio')
const playBtn = document.querySelector('.play-btn')

playBtn.addEventListener('click', () => {
  if(playBtn.className.includes('pause')) {
    music.pause()
  } else {
    music.play()
    music.loop = true
  }
  playBtn.classList.toggle('pause')
})

console.log(music)