// animation on scroll is a great library, https://michalsnik.github.io/aos/
const boxes = document.querySelectorAll('.box')

const reveal = () => {
  boxes.forEach((box) => {
    const triggerPoint = window.innerHeight - 150
    const boxTop = box.getBoundingClientRect().top
    if (boxTop < triggerPoint) {
      box.classList.add('active')
    } else {
      box.classList.remove('active')
    }
  })
}
reveal()
window.addEventListener('scroll', reveal)
