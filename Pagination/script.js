const divs = document.querySelectorAll('div.pagination')

divs.forEach(div => {
  const divsEl = div.querySelectorAll('div')

  divsEl.forEach(divEl => {
    const spans = divEl.querySelectorAll('span')

    spans.forEach(span => span.addEventListener('click', () => {
      for(i of spans) {
        i.classList.remove('active')      
      }
      event.target.classList.add('active')
    }))

  })

});