//Кнопка активности "В корзину"
const btnAdd = document.querySelectorAll(`.offers__btn-add`);

const addBasket = (btn) => {
    if (!btn.classList.contains('offers__btn-add--active')) {
        btn.textContent = `Добавлено`
    } else {
        btn.textContent = `В корзину`
    }
    btn.classList.toggle(`offers__btn-add--active`);
}


btnAdd.forEach((btn) => {
    btn.addEventListener(`click`, (e) => {
        addBasket(btn);
        const basketClasses = document.querySelectorAll(`.offers__btn-add--active`);
        const basketCount = document.querySelector(`.header__el-ico--basket-count`);
        basketCount.textContent = basketClasses.length
    })
});
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

