let users = [
    {
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
},
    {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
},
    {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
},
    {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
},
    {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
},
    {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
},
    {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
},
    {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
},
    {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
},
    {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
},
    {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}
];

/*- З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.*/

let addressArray = users.map(item => item.address);
console.log(addressArray);

/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement.
    Всі данні в одному блоці.*/

let usersContainer = document.createElement('div');
document.body.appendChild(usersContainer);
for (const user of users) {
    let userBlock = document.createElement('div');
    userBlock.innerText = `Name: ${user.name[0].toUpperCase().concat(user.name.slice(1))}
                            Age: ${user.age}
                            Status: ${user.status}
                            Address: ${user.address.country}, ${user.address.city}, ${user.address.street}, ${user.address.houseNumber}`;

    usersContainer.appendChild(userBlock);
    usersContainer.appendChild(document.createElement('br'));
}
document.body.appendChild(document.createElement('hr'));

/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement,
    розділивши всі властивості по своїм блокам (div>div*4)*/

let usersContainer2 = document.createElement('div');
document.body.appendChild(usersContainer2);
for (const user of users) {
    let userBlockSplit = document.createElement('div');

    let userName = document.createElement('div');
    userName.innerText = `Name: ${user.name[0].toUpperCase().concat(user.name.slice(1))}`;
    let userAge = document.createElement('div');
    userAge.innerText = `Age: ${user.age}`;
    let userStatus = document.createElement('div');
    userStatus.innerText = `Status: ${user.status}`;
    let userAddress = document.createElement('div');
    userAddress.innerText = `Address: ${user.address.country}, ${user.address.city}, ${user.address.street}, ${user.address.houseNumber}`;

    userBlockSplit.append(userName, userAge, userStatus, userAddress);
    usersContainer2.appendChild(userBlockSplit);
    usersContainer2.appendChild(document.createElement('br'));
}
document.body.appendChild(document.createElement('hr'));

/*- За допомоги циклу проітерувати  масив users, записати кожного юзера в свій блок за допомоги document.createElement,
    розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості*/

let usersContainer3 = document.createElement('div');
document.body.appendChild(usersContainer3);
for (const user of users) {
    let userBlockSplit = document.createElement('div');

    let userName = document.createElement('div');
    userName.innerText = `Name: ${user.name[0].toUpperCase().concat(user.name.slice(1))}`;
    let userAge = document.createElement('div');
    userAge.innerText = `Age: ${user.age}`;
    let userStatus = document.createElement('div');
    userStatus.innerText = `Status: ${user.status}`;
    let userAddress = document.createElement('div');
    userAddress.innerText = 'ADDRESS: ';

    let country = document.createElement('div');
    country.innerText = `country: ${user.address.country}`;
    let city = document.createElement('div');
    city.innerText = `city: ${user.address.city}`;
    let street = document.createElement('div');
    street.innerText = `street: ${user.address.street}`;
    let houseNumber = document.createElement('div');
    houseNumber.innerText = `houseNumber: ${user.address.houseNumber}`;

    userAddress.append(country, city, street, houseNumber);
    userBlockSplit.append(userName, userAge, userStatus, userAddress);
    usersContainer3.appendChild(userBlockSplit);
    usersContainer3.appendChild(document.createElement('br'));
}
document.body.appendChild(document.createElement('hr'));

/*
- є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
    створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того,
    що знаходиться на сторінці.
    Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
*/

let h2List = document.getElementsByTagName('h2');

let containerOfList = document.getElementById('content');
containerOfList.innerText = 'Содержание: ';

let list = document.createElement('ol');
containerOfList.appendChild(list);

for (const item of h2List) {
    let li = document.createElement('li');
    li.innerText = item.innerText;
    list.appendChild(li);
}

/*
-Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
    При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
    Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
*/

let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];

let counterRules = 0;

for (const rule of rules) {
    let containerRule = document.createElement('div');
    containerRule.classList.add('rule', `rule${++counterRules}`);

    let titleRule = document.createElement('h2');
    titleRule.innerText = rule.title;
    let bodyRule = document.createElement('p');
    bodyRule.innerText = rule.body;

    containerRule.append(titleRule, bodyRule);
    document.body.appendChild(containerRule);
}
