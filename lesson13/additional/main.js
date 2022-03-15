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

let saveCart = (key, title, number, price) => {
    let productsFromLocalStorage = JSON.parse(localStorage.getItem(key)) || [];

    productsFromLocalStorage.push({title, number, price});

    localStorage.setItem(key, JSON.stringify(productsFromLocalStorage));
}

bntSave.addEventListener('click', (e) => {
    e.preventDefault();

    if(form.productTitle.value === '' || form.productNumber.value === '' || form.productPrice.value === ''){
        alert('Fill all fields!')
        return;
    }

    saveCart('cartProducts', form.productTitle.value, form.productNumber.value, form.productPrice.value);
    form.productTitle.value = '';
    form.productNumber.value = '';
    form.productPrice.value = '';
})

let anchor = document.createElement('a');
anchor.href = 'list.html';
anchor.classList.add('link');
anchor.innerText = 'На сторінку товарів';

document.body.appendChild(anchor);



