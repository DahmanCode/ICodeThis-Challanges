const togglesImg = document.querySelectorAll('#toggle')

togglesImg.forEach(toggleImg => toggleImg.addEventListener('click', () => {
  const card = toggleImg.parentElement.firstElementChild
  card.classList.toggle('active')
}))