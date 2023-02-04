const btns = document.querySelectorAll('.btns')

btns.forEach(btn => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('active')
  })
});
