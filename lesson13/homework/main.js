console.log('start');
setTimeout(() => {
    let counter = 1;
    console.log(`${counter}: Прокинутися`);
    setTimeout(() => {
        counter++;
        console.log(`${counter}: Ранкова гігієна`);
        setTimeout(() => {
            counter++;
            console.log(`${counter}: Чашка кави`);
            setTimeout(() => {
                counter++;
                console.log(`${counter}: Сніданок для малят`);
                setTimeout(() => {
                    counter++;
                    console.log(`${counter}: Час на виконання ДЗ`);
                }, 1000)
            }, 4000)
        }, 3000)
    }, 2000)
}, 1000)
console.log('end');


new Promise((resolve, reject) => {
    let counter = 0;
    setTimeout(() => {
        counter++;
        console.log(`${counter}: Прогулянка`);
        resolve(counter);
    }, 1000)
})
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log(`${counter}: Обід для малят`);
                resolve(counter);
            }, 2000)
        })
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log(`${counter}: Час 2 на виконання ДЗ`);
                resolve(counter);
            }, 3000)
        })
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log(`${counter}: Чашка чаю`);
                resolve(counter);
            }, 4000)
        })
    })
.then(counter => {
    new Promise((resolve, reject) => {
        setTimeout(()=>{
            counter++;
            console.log(`${counter}: Спілкування`);
            resolve(counter);
        }, 1000)
    })
})