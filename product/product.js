import '../assets/scss/pages/product.scss'

const galleryThumbs = document.querySelectorAll('.gallery-thumbs__btn')

galleryThumbs.forEach(el => {
  el.addEventListener('click', e => {
    galleryThumbs.forEach(thumb => thumb.classList.remove('-active'))
    el.classList.add('-active')
  })
})

document.addEventListener('DOMContentLoaded', () => [
  document.fonts.ready.then( () => {
    document.body.style.opacity = '1'
  })
])