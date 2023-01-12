var rangeValue = document.querySelectorAll('#rangeValue')
var range = document.querySelectorAll('#range')
var progress = document.querySelectorAll('.progress')

for(let i = 0; i < 3; i++) {
  rangeValue[i].innerHTML = range[i].value + '%';

  range[i].oninput = function() {
    rangeValue[i].innerHTML = this.value + '%'
    progress[i].style.width = (this.value*85) / 100 + '%'
    if(this.value < 33) {
      progress[i].classList.add('red')
      progress[i].classList.remove('green')
      progress[i].classList.remove('orange')
    } else if(this.value < 66) {
      progress[i].classList.add('orange')
      progress[i].classList.remove('green')
      progress[i].classList.remove('red')
    } else {
      progress[i].classList.add('green')
      progress[i].classList.remove('red')
      progress[i].classList.remove('orange')
    }
  }

}

