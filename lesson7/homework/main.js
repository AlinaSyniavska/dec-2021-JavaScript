/*- Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
створити пустий масив, наповнити його 10 об'єктами new User(....)*/

function User(id, userName, surname, email, phone) {
    this.id = id;
    this.userName = userName;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let users = [
    new User(1, 'Alina', 'Syniavska', 'alina@gmail.com', 30660203448),
    new User(7, 'Viktoria', 'Back', 'viki@gmail.com', 30660101012),
    new User(13, 'Ivan', 'Ivanov', 'iva@gmail.com', 30664539002),
    new User(2, 'Mary', 'Stuart', 'MSt@gmail.com', 30666638220),
    new User(4, 'Anton', 'Pavlov', 'ntn@gmail.com', 30661902454),
    new User(10, 'Peter', 'Romanov', 'ptr@gmail.com', 30664676036),
    new User(9, 'Lily', 'Jolly', 'lijo@gmail.com', 30668888880),
    new User(12, 'John', 'Smith', 'jsmith@gmail.com', 30663335513),
    new User(3, 'Harry', 'Sasex', 'hsas@gmail.com', 30662505259),
    new User(11, 'Sam', 'Black', 'sam@gmail.com', 30667419630),
];

console.log(users);

/*
- Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
*/

let usersPairId = users.filter(user => !(user.id % 2));
console.log(usersPairId);

/*
- Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
*/

let usersSortId = users.sort((curId, nextId) => curId.id - nextId.id);
console.log(usersSortId);

/*- створити клас для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
створити пустий масив, наповнити його 10 об'єктами Client*/

class Client {
    constructor(id, clientName, surname, email, phone, order) {
        this.id = id;
        this.clientName = clientName;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clients = [
    new Client(1, 'Alina', 'Syniavska', 'alina@gmail.com', 30660203448, ['tea', 'coffee']),
    new Client(7, 'Viktoria', 'Back', 'viki@gmail.com', 30660101012, ['fruits']),
    new Client(13, 'Ivan', 'Ivanov', 'iva@gmail.com', 30664539002, ['milk', 'butter', 'sugar']),
    new Client(2, 'Mary', 'Stuart', 'MSt@gmail.com', 30666638220, ['apples', 'bananas']),
    new Client(4, 'Anton', 'Pavlov', 'ntn@gmail.com', 30661902454, ['eggs']),
    new Client(10, 'Peter', 'Romanov', 'ptr@gmail.com', 30664676036, ['powder', 'lipstick', 'nail', 'body cream', 'soap']),
    new Client(9, 'Lily', 'Jolly', 'lijo@gmail.com', 30668888880, ['salad', 'sausage']),
    new Client(12, 'John', 'Smith', 'jsmith@gmail.com', 30663335513, ['pizza']),
    new Client(3, 'Harry', 'Sasex', 'hsas@gmail.com', 30662505259, ['biscuits']),
    new Client(11, 'Sam', 'Black', 'sam@gmail.com', 30667419630, ['eggplant', 'pepper', 'tomato']),
];

console.log(clients);

/*
- Взяти масив (Client [] з попереднього завдання).
Відсортувати його по кількості товарів в полі order по зростанню. (sort)*/

let clientsSortOrder = clients.sort((curOrder, nextOrder) => curOrder.order.length - nextOrder.order.length);





