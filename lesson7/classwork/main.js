/*
- Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

function Car(model, manufacturer, year, maxSpeed, engine) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engine = engine;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    };

    this.info = function () {
        console.group(`Info about ${this.model}`);
        for (let key in this) {
            if (typeof this[key] !== 'function' && typeof this[key] !== 'object') {
                console.log(`${key} - ${this[key]}`);
            } else if (typeof this[key] === 'object') {
                for (let carElementKey in this[key]) {
                    console.log(`${carElementKey} - ${this[key][carElementKey]}`);
                }
            }
        }
        console.groupEnd();
    };

    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    };

    this.changeYear = function (newValue) {
        this.year = newValue;
    }

    this.addDriver = function (driver) {
        this.driver = driver;
    }
}

let carMazda = new Car('Mazda RX-7', 'Mazda', 2002, 250, 1.3);

let driverIvanov = {
    driverName: 'Ivan',
    surname: 'Ivanov',
    experience: 5
}

carMazda.drive();
carMazda.info();
carMazda.increaseMaxSpeed(20);
carMazda.changeYear(2000);
carMazda.addDriver(driverIvanov);
carMazda.info();

/*- (Те саме, тільки через клас)
Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
максимальна швидкість, об'єм двигуна. додати в об'єкт функції:

-- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
-- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
-- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
-- changeYear (newValue) - змінює рік випуску на значення newValue
-- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car*/

class Machine {
    constructor(model, manufacturer, year, maxSpeed, engine) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engine = engine;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} км/год`);
    }

    info() {
        console.group(`Info about ${this.model}`);
        for (let machineKey in this) {
            console.log(`${machineKey} - ${this[machineKey]}`);
        }
        console.groupEnd();
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
    }

    addDriver(driver) {
        this.driver = driver;
    }
}

let carZaz = new Machine('ZAZ Vida', 'ZAZ', 2012, 170, 1.399);

carZaz.drive();
carZaz.info();
carZaz.increaseMaxSpeed(40);
carZaz.changeYear(2015);
carZaz.addDriver('Indiana Johns');
carZaz.info();

/*
-створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
    За допомоги циклу знайти яка попелюшка повинна бути з принцом.
    Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку*/

class Cinderella {
    constructor(girlName, age, footSize) {
        this.girlName = girlName;
        this.age = age;
        this.footSize = footSize;
    }
}

let groupOfCinderella = [
    new Cinderella('Diana', 20, 38),
    new Cinderella('Kate', 18, 35),
    new Cinderella('Anna', 28, 40),
    new Cinderella('Lily', 18, 33),
    new Cinderella('Sofia', 19, 37),
    new Cinderella('Elizabeth', 24, 39),
    new Cinderella('Inessa', 22, 34),
    new Cinderella('Matilda', 30, 41),
    new Cinderella('Julia', 25, 36),
    new Cinderella('Jasmine', 21, 37)
];

class Prince {
    constructor(princeName, age, findShoe) {
        this.princeName = princeName;
        this.age = age;
        this.findShoe = findShoe;
    }
}

let princeJohn = new Prince('John', 24, 35);
let princeLouis = new Prince('Louis', 30, 36);

let findFiancee = (prince, cinderellas) => {
    for (let cinderella of cinderellas) {
        if (prince.findShoe === cinderella.footSize) {
            return (`Prince ${prince.princeName} found his love - ${cinderella.girlName}`);
        }
    }
}

console.log(findFiancee(princeJohn, groupOfCinderella));
console.log(findFiancee(princeLouis, groupOfCinderella));

console.log(groupOfCinderella.find(girl => girl.footSize === princeJohn.findShoe));
console.log(groupOfCinderella.find(girl => girl.footSize === princeLouis.findShoe));