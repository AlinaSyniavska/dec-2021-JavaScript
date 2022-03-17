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

let form = document.forms.productForm;
let bntSave = form.getElementsByTagName('button')[0];
let productId = 0;

let saveCart = (key, title, number, price, img) => {
    let productsFromLocalStorage = JSON.parse(localStorage.getItem(key)) || [];
    let lastId;

    if (!productsFromLocalStorage.length) {
        productId = 1;
    } else {
        lastId = Math.max(...productsFromLocalStorage.map(item => item.productId));
        productId = lastId + 1;
    }

    productsFromLocalStorage.push({productId, title, number, price, img});

    localStorage.setItem(key, JSON.stringify(productsFromLocalStorage));
}

bntSave.addEventListener('click', (e) => {
    let urlProduct = 'https://freepngimg.com/thumb/apricot/133567-apricot-fruit-slice-download-hq-thumb.png';
    e.preventDefault();

    if (form.productTitle.value === '' || form.productNumber.value === '' || form.productPrice.value === '') {
        alert('Fill all fields!')
        return;
    }

    saveCart('cartProducts', form.productTitle.value, form.productNumber.value, form.productPrice.value, form.productImg.value || urlProduct);
    form.productTitle.value = '';
    form.productNumber.value = '';
    form.productPrice.value = '';
    form.productImg.value = '';
})

let anchor = document.createElement('a');
anchor.href = 'list.html';
anchor.classList.add('link');
anchor.innerText = 'На сторінку товарів';

document.body.appendChild(anchor);



