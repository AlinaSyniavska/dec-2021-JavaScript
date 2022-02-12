/*- Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]*/

let divideString = (str, n) => {
    let subStrArray = [];

    for (let i = 0; i < str.length; i = i + n) {
        subStrArray.push(str.substr(i, n));
    }
    return subStrArray;
}

console.log(divideString('наслаждение', 3));
console.log(divideString('fragmentation', 5));

/*
- Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе: данні до знака равлика(@),
наявність равлика, крапку яка знаходиться не менше ніж на 2 символ далі після равлика,
функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)

Протестувати на значеннях

someemail@gmail.com
someeMAIL@gmail.com
someeMAIL@i.ua
some.email@gmail.com

Примітка
Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні".
Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
=========================================================================================================
1. Проверку соответствия стандартам email-корреспонденции: выделение локальной части адреса, наличие “собачки” ( @ )
и доменного имени с точкой ( . )
2. Подсчет символов: в локальной части допускается не более 64 знаков
3. Проверку правильного размещения точек ( . ) и “собачек” ( @ )
4. Проверку правильного размещения специальных символов: ? “ # $ % & ` * + – _  . / | \ ^ {} ~
(они могут использоваться только в середине локальной части адреса, но не в начале или конце)
*/

let checkEmail = email => {
    let localName = email.split('@')[0];
    let domName = email.split('@')[1];
    let domWithEt = email.slice(email.indexOf('@'));

    if (!email.includes('@')) {
        printEmailError(1);
        return false;
    }

    if (email.split('@').length > 2) {
        printEmailError(5);
        return false;
    }

    if (!domName.includes('.')) {
        printEmailError(2);
        return false;
    }

    if (localName.length > 64) {
        printEmailError(3);
        return false;
    }

    if (domWithEt.indexOf('.') - domWithEt.indexOf('@') <= 2) {
        printEmailError(4);
        return false;
    }

    if (email.startsWith('@') || email.endsWith('@')) {
        printEmailError(6);
        return false;
    }

    if(!checkSymbol(localName)){
        printEmailError(7);
        return  false;
    }

    printEmailError(0);
    return true;
}

let printEmailError = indexError => {
    switch (indexError) {
        case 0:
            console.log('Електронна адреса пройшла валідацію');
            break;
        case 1:
            console.log('Помилка валідації електронної адреси.\nЕлектронна адреса не містить спец. символа "@"');
            break;
        case 2:
            console.log('Помилка валідації електронної адреси.\nЕлектронна адреса не містить символа "." в доменному імені');
            break;
        case 3:
            console.log('Помилка валідації електронної адреси.\nЛокальна частина електронної адреси містить більш ніж 64 символи');
            break;
        case 4:
            console.log('Помилка валідації електронної адреси.\nКрапка "." в назві електронної адреси повинна знаходитися ' +
                'не менше ніж на 2 символи далі після равлика "@"');
            break;
        case 5:
            console.log('Помилка валідації електронної адреси.\nЕлектронна адреса повинна містити лише один спец. символ @');
            break;
        case 6:
            console.log('Помилка валідації електронної адреси.\nЕлектронна адреса не повинна починатися або закінчуватися спец. символом @');
            break;
        case 7:
            console.log('Помилка валідації електронної адреси.\nСпеціальні символи ? “ \' # $ % & ` * + – _  . / | \\ ^ {} ~\n' +
                'можуть використовуватися лише в середині локальної частини адреси, але не на початку і не вкінці');
            break;
        default:
            console.log('Помилка валідації електронної адреси');
    }

    return true;
}

function checkSymbol(str) {
    let specialSymbols = ['?', '"', "\'", '#', '$', '%', '&', '`', '*', '+', '–', '_', '.', '/', '|', '\\', '^', '{', '}', '~'];
    let counterSymbols = 0;

    specialSymbols.forEach(symbol => {
        if (str.startsWith(symbol || str.endsWith(symbol))) {
            counterSymbols++;
        }
    })

    return counterSymbols <= 0;
}

checkEmail('\\someemail@gmail.com');
checkEmail('someemail@gmail.com');
checkEmail('someeMAIL@gmail.com');
checkEmail('someeMAIL@i.ua');
checkEmail('some.email@gmail.com');

/*
- є масив
відсортувати його в спадаючому порядку за кількістю елементів в полі modules*/

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

coursesArray.sort((a, b) => b.modules.length - a.modules.length);
console.log(coursesArray);

/*
- Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
    let symb = "о", str = "Астрономия это наука о небесных объектах";
document.writeln(count(str, symb)) // 5
*/

let symb = "о";
let str = "Астрономия это наука о небесных объектах";

let count = (str, stringsearch) => {
    let letters = str.toLowerCase().split('');
    let counter = 0;

    letters.forEach(letter => {
        if(letter === stringsearch){
            counter++;
        }
    })

    return counter;
}

console.log(count(str, symb));
console.log(count(str, 'т'));

/*
- Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
    let str = "Сила тяжести приложена к центру масс тела";
document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
*/

let str2 = "Сила тяжести приложена к центру масс тела";

let cutString = (str, n) => str.split(' ').splice(0, n).join(' ');

console.log(cutString(str2, 5));
console.log(cutString(str2, 3));
console.log(cutString('Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые', 2));