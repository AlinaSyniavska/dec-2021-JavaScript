/*
- Імітуємо наповнення інтернет магазину товарами :
    Створити форму з наступними полями :
    - назва товару
- кількість товару
- ціна товару
- картинка товару (посилання з інтернету)
Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
    До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар
*/

let key = 'cartProducts';

let container = document.getElementsByClassName('cart')[0];

let createCart = function (k) {
    let productsFromLocalStorage = JSON.parse(localStorage.getItem(k));

    // console.log(productsFromLocalStorage);

    if (productsFromLocalStorage) {
        productsFromLocalStorage.forEach((productItem, index) => {
            let productContainer = document.createElement('div');
            productContainer.classList.add('product');

            let title = document.createElement('p');
            title.innerHTML = `Назва: <strong>${productItem.title}</strong>`;
            let number = document.createElement('p');
            number.innerHTML = `Кількість: <strong>${productItem.number}</strong>`;
            let price = document.createElement('p');
            price.innerHTML = `Ціна: <strong>${productItem.price}</strong>`;

            productContainer.append(title, number, price);
            container.appendChild(productContainer);

            let btnRemoveProduct = document.createElement('button');
            btnRemoveProduct.classList.add('btn__remove');
            btnRemoveProduct.innerText = 'Видалити';

            productContainer.append(title, number, price, btnRemoveProduct);
            container.appendChild(productContainer);

            btnRemoveProduct.onclick = function (e) {
                // console.log(index);
                let removed = productsFromLocalStorage.splice(index, 1);
                localStorage.setItem(key, JSON.stringify(productsFromLocalStorage));
                container.innerHTML = '';
                createCart(key);
                // document.location.reload();
            }
        });
    }
}

createCart(key);

let btnContainer = document.createElement('div');
btnContainer.classList.add('btn_container');
let btnClearCart = document.createElement('button');
btnClearCart.classList.add('btn__clear');
btnClearCart.innerText = 'Видалити все';

btnContainer.appendChild(btnClearCart);
document.body.append(btnContainer);

btnClearCart.onclick = function () {
    localStorage.removeItem(key);
    createCart(key);
    document.location.reload();
}
