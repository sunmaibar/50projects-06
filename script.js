const boxes = document.querySelectorAll('.box')

window.addEventListener('scroll', checkBox)

function checkBox() {
  const triBottom = (window.innerHeight / 5) * 4

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triBottom) {
      box.classList.add('show')
    } else {
      box.classList.remove('show')
    }
  })
}
