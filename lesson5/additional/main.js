/*
- Дано натуральное число n. Выведите все числа от 1 до n.
*/

let printNaturalNumber = (stop, start = 1) => {
    let natural = start;
    console.log(natural);

    if (natural === stop) {
        console.log('---------------- END');
        return;
    }

    natural++;
    printNaturalNumber(stop, natural);
}

printNaturalNumber(4);
printNaturalNumber(10);

/*
- Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания,
если A < B, или в порядке убывания в противном случае.
*/

let printRange = (a, b) => {
    if (a < b) {
        for (let i = a; i <= b; i++) {
            console.log(i);
        }
    } else {
        for (let i = a; i >= b; i--) {
            console.log(i);
        }
    }
    console.log('---------------- END');
}

printRange(0, 3);
printRange(15, 10);
printRange(-3, -13);

/*-   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
  EXAMPLE:
  foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
  foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
  foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]*/

let foo = (arr, i) => {
    if (i !== arr.length && i !== arr.length - 1) {
        let swap1 = arr[i];
        let swap2 = arr[i + 1];

        arr[i] = swap2;
        arr[i + 1] = swap1;
    }

    return arr;
}


console.log(foo([9, 8, 0, 4], 0)); // ==> [ 8, 9, 0, 4 ]
console.log(foo([9, 8, 0, 4], 1)); // ==> [ 9 ,0, 8, 4 ]
console.log(foo([9, 8, 0, 4], 2)); // ==> [ 9, 8, 4, 0 ]
console.log(foo([0, 1, 2, 3], 3)); // ==> [ 9, 8, 4, 0 ]

console.log('---------------------');

/*
- Створити функцію яка буде переносити елементи зі значенням 0 у кінець масиву.
Зберігаючи при цьому порядок не нульових значень.
Довжина масиву від 2 до 100
EXAMPLE:
[1,0,6,0,3] => [1,6,3,0,0]
[0,1,2,3,4] => [1,2,3,4,0]
[0,0,1,0]   => [1,0,0,0]*/

let moveZero = arr => {
    let counter = 0;
    let tempArr = [];
    let i = 0;
    for (let arrElement of arr) {
        if (arrElement === 0) {
            counter++;
        } else {
            tempArr[i] = arrElement;
            i++;
        }
    }

    for (let j = 0, k = tempArr.length; j < counter; j++, k++) {
        tempArr[k] = 0;
    }

    return arr = tempArr;
}

console.log(moveZero([1, 0, 6, 0, 3]));
console.log(moveZero([0, 1, 2, 3, 4]));
console.log(moveZero([0, 0, 1, 0]));
console.log(moveZero([10, 0, 9, 0, 8, 0]));

