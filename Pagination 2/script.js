let spans = document.querySelectorAll('span')

let currentValue = 1

spans.forEach(span => span.addEventListener('click', () => {
  for(i of spans) {
    i.classList.remove('active')      
  }
  event.target.classList.add('active')
}))

$(document).ready(function() {
  $('.next').click(function() {
    $('.paginations').find('.pageNb.active').next().addClass('active')
    $('.paginations').find('.pageNb.active').prev().removeClass('active')
  })
})

$(document).ready(function() {
  $('.prev').click(function() {
    $('.paginations').find('.pageNb.active').prev().addClass('active')
    $('.paginations').find('.pageNb.active').next().removeClass('active')
  })
})