const progresses = document.querySelectorAll('.progress-container')

progresses.forEach(progress => {
    
  const items = progress.querySelectorAll('.progress-item')

  items.forEach(item => item.addEventListener('click', () => {
    for (i of items) {
      i.classList.remove('current-item')
    }
    event.target.classList.add('current-item')
  }))

});