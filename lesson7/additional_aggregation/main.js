/*
- Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів

{
    id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz',
    address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
            lat: '-37.3159',
            lng: '81.1496'
        }
    },
    phone: '1-770-736-8031 x56442',
    website: 'hildegard.org',
    company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets'
    }
}
*/

class User {
    constructor(id, fullName, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.fullName = fullName;
        this.username = username;
        this.email = email;
        this.address = {street: street, suite: suite, city: city, zipcode: zipcode, geo: {lat: lat, lng: lng}};
        this.phone = phone;
        this.website = website;
        this.company = {companyName: companyName, catchPhrase: catchPhrase, bs: bs};
    }
}

let user1 = new User(1, 'Leanne Graham', 'Bret', 'Sincere@april.biz',
    'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
    '1-770-736-8031 x56442', 'hildegard.org',
    'Romaguera-Crona', 'Multi-layered client-server neural-net', 'harness real-time e-markets');

console.log(user1);

/*
-  Створити функцію конструктор / клас  який описує об'єкт тегу
Поля :
- назва тегу ()
- опис його дій
- масив з атрибутами (2-3 атрибути максимум)
Кожен атрибут описати як окремий який буде містити
-назву атрибуту
-опис дії атрибуту
інформацію брати з htmlbook.ru

Таким чином описати теги
-a
-div
-h1
-span
-input
-form
-option
-select
Приклад результуючого об'єкту
{
    titleOfTag: 'area',
    action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
    attrs: [
        {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
        {/!*some props and values*!/},
        {/!*...*!/},
        {/!*...*!/},
    ]

}
*/

class Tag {
    constructor(titleOfTag, action, ...attrs) {
        this.titleOfTag = titleOfTag;
        this.action = action;
        this.attrs = [];

        for (let i = 0; i < attrs.length; i++) {
            this.attrs.push({titleOfAttr: attrs[i][0], actionOfAttr: attrs[i][1]});
        }
    }
}

let tagA = new Tag('a',
    `Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок.`,
    ['href', 'Задает адрес документа, на который следует перейти'],
    ['target', 'Имя окна или фрейма, куда браузер будет загружать документ.']
);

let tagDiv = new Tag('div',
    `Элемент <div> является блочным элементом и предназначен для выделения фрагмента документа.`,
    ['align', `Задает выравнивание содержимого тега <div>.`],
    ['title', 'Добавляет всплывающую подсказку к содержимому.']);

let tagH1 = new Tag('h1',
    `Тег <h1> представляет собой наиболее важный заголовок первого уровня`,
    ['align', 'Определяет выравнивание заголовка.']);

let tagSpan = new Tag('span',
    `Тег <span> предназначен для определения строчных элементов документа. `,
    ['class', 'Определяет имя класса, которое позволяет связать тег со стилевым оформлением.'],
        ['id', 'Указывает имя стилевого идентификатора.'],
        ['style', 'Применяется для определения стиля элемента с помощью правил CSS.']);

let tagInput = new Tag('input',
    `Тег <input> является одним из разносторонних элементов формы и позволяет создавать разные элементы интерфейса и обеспечить взаимодействие с пользователем. `,
    ['tabindex', 'Определяет порядок перехода между элементами с помощью клавиши Tab.'],
        ['placeholder', 'Выводит подсказывающий текст.'],
        ['checked', 'Предварительно активированный переключатель или флажок.']);

let tagForm = new Tag('form',
    `Тег <form> устанавливает форму на веб-странице. `,
    ['action', 'Адрес программы или документа, который обрабатывает данные формы.'],
        ['method', 'Метод протокола HTTP.']);

let tagOption = new Tag('option',
    `Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>. `,
    ['disabled', 'Заблокировать для доступа элемент списка.'],
        ['selected', 'Заранее устанавливает определенный пункт списка выделенным.'],
        ['value', 'Значение пункта списка, которое будет отправлено на сервер или прочитано с помощью скриптов.']);

let tagSelect = new Tag('select',
    `Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка.`,
    ['multiple', 'Позволяет одновременно выбирать сразу несколько элементов списка.'],
        ['size', 'Количество отображаемых строк списка.']);

console.log(tagA);
console.log(tagDiv);
console.log(tagH1);
console.log(tagSpan);
console.log(tagInput);
console.log(tagForm);
console.log(tagOption);
console.log(tagSelect);