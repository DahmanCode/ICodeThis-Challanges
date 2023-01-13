const body = document.querySelector('body')
const container = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')


btns.forEach(btn => {
  btn.addEventListener("click", () => {
    container.classList.toggle('active')
    const popupMessage = document.createElement('div')
    
    popupMessage.classList.add('popup')
    popupMessage.classList.toggle('active')

    let plan = btn.parentElement.children[0].innerHTML
    popupMessage.innerHTML = `
      <h2>Thanks For Subscribing</h2>
      <h3>Yor Plan : <strong>${plan}</strong></h3>
      <p>The operation has completed successfully</p>
      <button class="close">OK, Close</button>
      `
    popupMessage.children[3].addEventListener("click", () => {
      popupMessage.style.display = 'none'
      container.classList.remove('active')
    })
    body.appendChild(popupMessage)
  })
})
          