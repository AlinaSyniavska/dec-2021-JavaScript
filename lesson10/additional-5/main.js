/*
- Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.*/

let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');

let images = document.getElementsByClassName('slides')[0].getElementsByTagName('img');

let i = 0;

btnNext.onclick = function(){
    images[i].style.display = 'none';
    i++;
    if(i >= images.length){
        i = 0;
    }
    images[i].style.display = 'block';
}

btnPrev.onclick = function(){
    images[i].style.display = 'none';
    i = i - 1;
    if(i < 0){
        i = images.length - 1;
    }
    images[i].style.display = 'block';
}
