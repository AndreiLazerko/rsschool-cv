const btnEducations = document.querySelectorAll('.education__item');
const overlayYears = document.querySelectorAll('.overlay_year');



btnEducations.forEach(btnEducation => {
  btnEducation.addEventListener('click', () => {
    console.log(btnEducation.dataset.year);
    overlayYears.forEach(overlayYear =>{
      if(btnEducation.dataset.year === overlayYear.dataset.overlay){
        overlayYear.classList.add('overlay_active');
      }
    })
  })
});

overlayYears.forEach(overlayYear => {
  overlayYear.addEventListener('click', event => {
  const targer = event.target;
  if(targer === overlayYear || targer.closest('.modal__close')) {
    overlayYear.classList.remove('overlay_active')
  }
  
});
})
