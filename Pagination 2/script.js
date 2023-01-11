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

// Another Way

// const listy = document.getElementById('listy');
// const prevBtn = document.getElementById('prev');
// const nextBtn = document.getElementById('next');

// const edgeNumbers = 3;
// const numberOfItems = 14;
// let currentActiveIdx = 8;
// let prevIsDot = false;

// for (let i = 0; i < numberOfItems; i++) {
//     const li = document.createElement('li');

//     if (i === currentActiveIdx) {
//         li.classList.add('active');
//     }

//     li.innerText = i + 1;

//     listy.appendChild(li);
// }

// const listEls = document.querySelectorAll('#listy li');

// // initial call to create the dots
// resetDots();

// // add click event to all lis
// listEls.forEach((el, idx) => {
//     el.addEventListener('click', () => {
//         currentActiveIdx = idx;
//         setActive(el);
//     });
// });


// prevBtn.addEventListener('click', () => {
//     if (currentActiveIdx <= 0) {
//         return;
//     }

//     currentActiveIdx--;

//     setActive(listEls[currentActiveIdx]);
// });

// nextBtn.addEventListener('click', () => {
//     if (currentActiveIdx >= listEls.length - 1) {
//         return;
//     }

//     currentActiveIdx++;

//     setActive(listEls[currentActiveIdx]);
// });

// function setActive(el) {
//     removeActive();
//     el.classList.add('active');

//     if (currentActiveIdx === 0) {
//         prevBtn.disabled = true;
//     } else {
//         prevBtn.disabled = false;
//     }

//     if (currentActiveIdx === numberOfItems - 1) {
//         nextBtn.disabled = true;
//     } else {
//         nextBtn.disabled = false;
//     }

//     resetDots();
// }

// function removeActive() {
//     listEls.forEach((el, idx) => {
//         el.classList.remove('active')
//     });
// }

// function resetDots() {
//     console.log(currentActiveIdx);
//     listEls.forEach((el, idx) => {
        
//         if (prevIsDot) {
//             el.style.display = 'none';
//             prevIsDot = false;
//         } else {
//             el.style.display = 'flex';
//         }

//         if (idx < edgeNumbers || idx > numberOfItems - (edgeNumbers + 2) || (idx > currentActiveIdx - 3 && idx < currentActiveIdx + 2)) {
//             el.innerText = idx + 1;
//         } else {
//             el.innerText = '...';
//             prevIsDot = true;
//         }
//     })
// }