/*-створити форму з інпутами для name та age.
    При відправці форми записати об'єкт в localstorage*/

let container = document.createElement('div');
let form1 = document.createElement('form');
form1.setAttribute('name', 'f1');

let lblName = document.createElement('label');
lblName.setAttribute('for', 'userName')
lblName.innerText = 'Enter name';
let userName = document.createElement('input');
userName.setAttribute('type', 'text');
userName.setAttribute('id', 'userName');

let lblAge = document.createElement('label');
lblAge.setAttribute('for', 'userAge')
lblAge.innerText = 'Enter age';
let userAge = document.createElement('input');
userAge.setAttribute('type', 'number');
userAge.setAttribute('id', 'userAge');

let btnSend = document.createElement('input');
btnSend.setAttribute('type', 'button');
btnSend.setAttribute('value', 'SEND');

form1.append(lblName, userName, lblAge, userAge, btnSend);
container.appendChild(form1);
document.body.appendChild(container);

let saveUserInfo = (key, userName, userAge) => {
    let user = {
        userName: userName,
        userAge: userAge
    }
    localStorage.setItem(key, JSON.stringify(user));
}

btnSend.addEventListener('click', () => {
    saveUserInfo('key', userName.value, userAge.value);
    userName.value = '';
    userAge.value = '';
});

document.body.appendChild(document.createElement('hr'));

/*
-створити форму з інпутами для model,type та volume автівки.
    при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.*/

let containerCarForm = document.createElement('div');
let carForm = document.createElement('form');
carForm.setAttribute('name', 'fCar');

let nameInputs = ['model', 'type', 'volume'];
let typeInputs = ['text', 'text', 'number'];
let nameLabels = ['Model', 'Type', 'Volume'];

for (let i = 0; i < nameLabels.length; i++) {
    let label = document.createElement('label');
    label.innerText = nameLabels[i];
    label.style.display = 'block';
    label.style.width = '200px';
    let input = document.createElement('input');
    input.setAttribute('type', typeInputs[i]);
    input.setAttribute('name', nameInputs[i]);
    label.appendChild(input);
    carForm.append(label, document.createElement('br'));
}

let btnSaveCar = document.createElement('button');
btnSaveCar.innerText = 'SAVE CAR';

containerCarForm.appendChild(carForm);
containerCarForm.appendChild(btnSaveCar);
document.body.appendChild(containerCarForm);

let saveCar = (key, carModel, carType, carVolume) => {
    let carsFromLocalStorage = JSON.parse(localStorage.getItem(key)) || [];

    carsFromLocalStorage.push([carModel, carType, carVolume]);

    localStorage.setItem(key, JSON.stringify(carsFromLocalStorage));
}

btnSaveCar.addEventListener('click', () => {
    saveCar('myCar', document.forms.fCar.model.value, document.forms.fCar.type.value, document.forms.fCar.volume.value);
    document.forms.fCar.model.value = '';
    document.forms.fCar.type.value = '';
    document.forms.fCar.volume.value = '';
})
