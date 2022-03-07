/*
Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
*** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан*/

/*document.onmouseup = function() {
    let selection = window.getSelection(); // это объект Selection
    // let selection = document.getSelection();
    let selectedText = selection.toString().toUpperCase(); // это строка  (Выделенный текст)

    // console.log(selection);
    console.log(selectedText);
}*/


document.onmouseup = function () {
//create variable from selection
    let selection = window.getSelection();
    if (selection.rangeCount) {
        let range = selection.getRangeAt(0).cloneRange();
        let newNode = document.createElement("b");

        //wrap selection in tags
        range.surroundContents(newNode);

        //return the user selection
        selection.removeAllRanges();
        selection.addRange(range);
    }
}


