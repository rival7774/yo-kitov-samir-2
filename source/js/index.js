const popup = document.querySelector('.popup') || document.querySelector('.feedback');
const popupClose = popup.querySelector('.popup__close');
const popupOpen = document.querySelector('.slider-banner__info__btn');
const checkboxAgreement = popup.querySelector('#agreement');
const submitPopup = popup.querySelector('.feedback__form__submit');
const buttonNav = document.querySelector('.header__button-nav');

const POPUP_ACTIVE = 'popup--active';
const MENU_ACTIVE = 'header__button-nav--active';

// закрытие и открытие попапа
if (popupOpen) {
  popupOpen.addEventListener('click', () => {
    if (popup) {
      popup.classList.add(POPUP_ACTIVE);
    }
  });
}

if (popup) {
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && popup.classList.contains(POPUP_ACTIVE)) {
      closePopup();
    }
  });
}

if (popupClose) {
  popupClose.addEventListener('click', (e) => {
    if (popup) {
      e.preventDefault();
      closePopup();
    }
  });
}

popup.addEventListener('click', function (event) {
  if (event.target === popup) {
    closePopup();
  }
});

// активировать кнопку формы
checkboxAgreement.addEventListener('click', switchDisabled);

// переключить бургер меню
buttonNav.addEventListener('click', switchMenu);

// функции
function closePopup() {
  popup.classList.remove(POPUP_ACTIVE);
}

function switchDisabled() {
  submitPopup.disabled = !submitPopup.disabled;
}

function switchMenu(e) {
  const target = e.target;

  target.classList.toggle(MENU_ACTIVE);
}

