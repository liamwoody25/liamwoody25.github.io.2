const BurgerToggle = document.querySelector('.ham-burger')
const offScreen = document.querySelector('.left-screen-menu');


function hamBurgerMenu() {
  if (BurgerToggle.classList.toggle('active')) {
    offScreen.classList.toggle('active');
  } else {
    offScreen.classList.toggle('active');
  }
}

BurgerToggle.addEventListener('click', function(){
  hamBurgerMenu()
})