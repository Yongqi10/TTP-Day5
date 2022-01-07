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

const removeRowBtn = document.querySelector('.del-row');


removeRowBtn.addEventListener('click', function () {
    //remove last row
    let last = content.children.length - 1;
    content.removeChild(content.children[last]);
    
});


const addCol = document.querySelector('.add-col');

addCol.addEventListener('click', function () {

    for(let i = 0; i < content.children.length;i++)
    {
        const newColumn = document.createElement('div');
        newColumn.setAttribute('class','col-sm border border-dark box white');
        content.children[i].appendChild(newColumn);
    }
});

const removeColBtn = document.querySelector('.del-col');

removeColBtn.addEventListener('click', function () {

    let totalRow = content.children.length;
    //content children = row, row children col
    //get the col for last row
    let lastCol = content.children[totalRow - 1].children.length - 1;
    console.log(lastCol);
    for(let i = 0; i < totalRow;i++)
    {
        let row = content.children[i];
        row.removeChild(row.children[lastCol])
    }
   

});
