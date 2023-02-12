var userBtn = document.querySelectorAll('.userImg')

userBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    var user = btn.getAttribute('data-user')

    document.getElementById(user).style.display = 'block'
  })
})

var closeBtn = document.querySelectorAll('#close')

closeBtn.forEach(btn => {
  btn.addEventListener('click', () => {
    var user = btn.closest('.card-container').style.display = 'none'
  })
})

window.addEventListener('click', (e) => {
  if (e.target.className === 'card-container') {
    e.target.style.display = 'none'
  }
})