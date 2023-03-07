const thumbnails = document.querySelector('.thumbnails')
const thumbnailItems = document.querySelectorAll('.thumbnail__item')

thumbnails.addEventListener('click', e => {
  const thumbnailItem = e.target.closest('.thumbnail__item')

  if(!thumbnailItem) return

  thumbnailItems.forEach((item) => {
    if(item === thumbnailItem){
      item.classList.add('thumbnail__active');
    }
    else{
      item.classList.remove('thumbnail__active');
    }
  })
})