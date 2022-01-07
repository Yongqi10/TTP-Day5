const addRowBtn = document.querySelector('.add-row');
const content = document.querySelector('.content');



addRowBtn.addEventListener('click', function() {
    const newRow = document.createElement('div');
    newRow.setAttribute('class','row');
    const numOfCol = document.querySelector('.row').querySelectorAll('.box');

    for(let i = 0; i < numOfCol.length; i++)
    {
        const newColumn = document.createElement('div');
        newColumn.setAttribute('class','col-sm border border-dark box white');
        newRow.appendChild(newColumn);
    }
    
    content.appendChild(newRow);
});

console.log(content.children) 



const addCol = document.querySelector('.add-col');

addCol.addEventListener('click', function () {

    for(let i = 0; i < content.children.length;i++)
    {
        const newColumn = document.createElement('div');
        newColumn.setAttribute('class','col-sm border border-dark box white');
        content.children[i].appendChild(newColumn);
        console.log(i);
    }


});