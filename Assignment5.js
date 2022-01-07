const addRowBtn = document.querySelector('.add-row');
const content = document.querySelector('.content');
const allRow = document.querySelectorAll('.row');
const numOfCol = document.querySelector('.row').querySelectorAll('.box');

console.log(numOfCol.length);

addRowBtn.addEventListener('click', function() {
    const newRow = document.createElement('div');
    newRow.setAttribute('class','row');


    for(let i = 0; i < numOfCol.length; i++)
    {
        const newColumn = document.createElement('div');
        newColumn.setAttribute('class','col-sm border border-dark box white');
        newRow.appendChild(newColumn);
    }

    content.appendChild(newRow);
});



