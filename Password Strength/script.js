// ===== Implementing show/hide toggle ===== //

function toggle() {
  let password = document.getElementById("password");
  let eye = document.getElementById("toggle");

  if (password.getAttribute("type") == "password") {
    password.setAttribute("type", "text");
    eye.style.color = "#0bb881";
  }

  else {
    password.setAttribute("type", "password");
    eye.style.color = "#1d1d1d";
  }
}

// ===== Criteria for strong password ===== //

let parameters = {
  count: false,
  letters: false,
  numbers: false,
  special: false
}
let strengthBar = document.getElementById("strength-bar");
let msg = document.getElementById("msg");

function strengthChecker() {
  let password = document.getElementById("password").value;
  parameters.letters = (/[A-Za-z]+/.test(password))? true: false;
  parameters.numbers = (/[0-9]+/.test(password))?
  true: false;
  parameters.special = (/[!\"$%&/()=?@#~`\\.\';:+=^*_-]+/.test(password))?
  true: false;
  parameters.count = (password.length > 7)?
  true: false;
  
  // ===== Implementing strength bar ===== //

  let barLength = Object.values(parameters).filter(value => value);

  strengthBar.innerHTML = "";

  for (let i in barLength) {
    let span = document.createElement("span");
    span.classList.add("strength");
    strengthBar.appendChild(span);
  }

  // ===== Changing bar color based on password strength ===== //

  let spanRef = document.getElementsByClassName("strength");
  const background = document.getElementById('background')

  const length = spanRef.length
  const blurValue = 16 - length * 4
  background.style.filter = `blur(${blurValue}px)`

  for (let i = 0; i < spanRef.length; i++) {
    switch(spanRef.length - 1) {
      case 0:
        spanRef[i].style.background = "#ff3e36";
        spanRef[i].style.boxShadow = "0 0 20px 2px rgb(255, 62, 54)"
        background.style.filter = `blur(${blurValue}px)`
        msg.textContent = "Your password is very weak";
        msg.style.color = "#ff3e36";
        break;
      case 1:
        spanRef[i].style.background = "#ff691f";
        spanRef[i].style.boxShadow = "0 0 20px 2px rgb(255, 105, 31)"
        background.style.filter = `blur(${blurValue}px)`
        msg.textContent = "Your password is weak";
        msg.style.color = "#ff691f";
        break;
      case 2:
        spanRef[i].style.background = "#ffda36";
        spanRef[i].style.boxShadow = "0 0 20px 2px rgb(255, 218, 54)"
        background.style.filter = `blur(${blurValue}px)`
        msg.textContent = "Your password is good";
        msg.style.color = "#ffda36";
        break;
      case 3:
        spanRef[i].style.background = "#0be881";
        spanRef[i].style.boxShadow = "0 0 20px 2px rgb(11, 232, 129)"
        background.style.filter = `blur(${blurValue}px)`
        msg.textContent = "Your password is strong";
        msg.style.color = "#0be881";
        break;
      }
  }

}