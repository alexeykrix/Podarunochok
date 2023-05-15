import './assets/scss/pages/main.scss'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let observer = null

const generateCards = () => {
  const cardTemplate = document.querySelector('#card-template')
  const container = document.querySelector('.catalog-grid')

  for (let i of Array(16)) {
    const card = cardTemplate.content.cloneNode(true);
    container.appendChild(card)
  }

  setTimeout(() => {
    ScrollTrigger.refresh()
  }, 0)
}

const createIntersectionObserver = () => {
  const end = document.querySelector('.catalog-loading')
  let timeout = null
  observer = new IntersectionObserver((e) => {
    const isIntersecting = e[0].isIntersecting
    if (isIntersecting) {
      if (timeout) return 
      timeout = setTimeout(() => {
        clearTimeout(timeout)
        timeout = null
        generateCards()
      }, 2000)
    }
  })

  observer.observe(end)

}

const init = () => {
  generateCards()
  createIntersectionObserver()
}

const startAnimation = () => {
  document.body.style.opacity = 1

  const headings = document.querySelectorAll('h1')
  headings.forEach(el => {
    gsap.from(el, {
      y: 20,
      opacity: 0,
      rotate: 5,
      transformOrigin: 'left center',
      duration: 1,
      delay: 0.2,
  
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom bottom',
      }
    })
  })

  const images = document.querySelectorAll('.hero-image__part')
  images.forEach((el, id) => {
    gsap.from(el, {
      y: '-100vh',
      rotate: 5,
      transformOrigin: 'left center',
      duration: 1,
      delay: 0.3 + id * 0.05,
    })
  })


  const buttons = document.querySelectorAll('.catalog-filters__list .btn')
  buttons.forEach((el, id) => {
    gsap.from(el, {
      x: 15,
      opacity: 0,
      rotate: 5,
      transformOrigin: 'left center',
      duration: 0.6,
      delay: 0.2 + id * 0.05,
  
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom bottom',
      }
    })
  })


}


document.addEventListener('DOMContentLoaded', init)
document.fonts.ready.then( () => {
  startAnimation()
})
