const monthBtn = document.querySelector('.btns .month')
const yearBtn = document.querySelector('.btns .year')
const monthAmount = document.querySelectorAll('.card .month')
const yearAmount = document.querySelectorAll('.card .year')

monthBtn.addEventListener('click', () => {
  monthBtn.classList.add('active')
  yearBtn.classList.remove('active')

  monthAmount.forEach (month => {
    month.style.display = 'block'
  })
  yearAmount.forEach (year => {
    year.style.display = 'none'
  })
})

yearBtn.addEventListener('click', () => {
  monthBtn.classList.remove('active')
  yearBtn.classList.add('active')

  monthAmount.forEach (month => {
    month.style.display = 'none'
  })
  yearAmount.forEach (year => {
    year.style.display = 'block'
  })
})
