`use strict`;

//Кнопка активности "В корзину"
const btnAdd = document.querySelectorAll(`.offers__btn-add`);

btnAdd.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
        e.preventDefault();
        btn.classList.toggle(`offers__btn-add--active`);
    })
})