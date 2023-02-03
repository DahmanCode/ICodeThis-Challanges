let toggles = document.getElementsByClassName('toggle');
let content = document.getElementsByClassName('content');
let icons = document.getElementsByClassName('icon');

for (let i=0; i<toggles.length; i++) {
  toggles[i].addEventListener('click', () => {
    if (parseInt(content[i].style.height) != content[i].scrollHeight) {
      content[i].style.height = content[i].scrollHeight + "px";
      toggles[i].style.color = "#0084e9";
      toggles[i].parentElement.classList.add('active')
      icons[i].classList.remove('plus');
      icons[i].classList.add('minus');
    }
    
    else {
      content[i].style.height = "0px";
      toggles[i].style.color = "#111130";
      toggles[i].parentElement.classList.remove('active')
      icons[i].classList.remove('minus');
      icons[i].classList.add('plus');
    }

    for (let j=0; j<content.length; j++) {
      if (j !== i) {
        content[j].style.height = "0px";
        toggles[j].style.color = "#111130";
        toggles[j].parentElement.classList.remove('active')
        icons[j].classList.remove('minus');
        icons[j].classList.add('plus');
      }
    }
  })
}
