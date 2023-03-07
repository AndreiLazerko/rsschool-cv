const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationLinks = document.querySelectorAll('.navigation__link');
const mainTop = document.querySelector('.main-top');

burger.addEventListener('click', () => {
  burger.classList.toggle('burger_active');
  navigation.classList.toggle('navigation_active');
  document.body.classList.toggle('lock');
  mainTop .classList.toggle('main-top-active')
})

navigationLinks.forEach(navigationLink => {
  navigationLink.addEventListener("click", ()=>{
    if(burger.classList.contains('burger_active')){
      document.body.classList.remove('lock');
      burger.classList.remove('burger_active');
      navigation.classList.remove('navigation_active')
      mainTop .classList.remove('main-top-active')
    }
  });
  
});