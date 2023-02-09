//Кнопка активности "В корзину"
const btnAdd = document.querySelectorAll(`.offers__btn-add`);

btnAdd.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
        e.preventDefault();
        btn.classList.toggle(`offers__btn-add--active`);
    })
})

// Pop-up reg/in 

const regBtn = document.querySelector(`.header__reg-or-in`);
const popUp = document.querySelector(`.pop-up`);
const closeBtn = document.querySelector(`.pop-up__close`);

const openPopUp = (block) => {
    block.classList.toggle(`pop-up--open`);
}

document.addEventListener(`click`, (e) => {
    if (e.target == closeBtn || e.target == popUp || e.target == regBtn) {
        openPopUp(popUp);
    }
})

