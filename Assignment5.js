
function giveAllBoxClick(){
    let givingColor = document.querySelectorAll('.box');
    const givingColorByClick =document.querySelector('#givingColorByClick');

    for(let i = 0; i < givingColor.length; i++)
    {
        givingColor[i].addEventListener('click',function(e) {
    
            e.target.style.backgroundColor = givingColorByClick.options[givingColorByClick.selectedIndex].value;
        
        });
    }
    
}

function ChangeAllWhiteTOAnotherColor() {
    let givingColor = document.querySelectorAll('.box');
    const changeAllIfIsWhite = document.querySelector('#changeAllIfIsWhite');
    const changeColor = document.querySelector('.changeColor');

    changeColor.addEventListener('click', function() {

      for(let i = 0; i < givingColor.length; i++)
      {
           if(givingColor[i].style.backgroundColor === '')
            {
                givingColor[i].style.backgroundColor = changeAllIfIsWhite.options[changeAllIfIsWhite.selectedIndex].value;
            }
    
     }   

    });

}

function changeAllBoxColor()
{
    let givingColor = document.querySelectorAll('.box');
    const changeAll = document.querySelector('#changeAll');
    const changeAllColor = document.querySelector('.changeAllColor');

    changeAllColor.addEventListener('click', function() {

      for(let i = 0; i < givingColor.length; i++)
      {
        givingColor[i].style.backgroundColor = changeAll.options[changeAll.selectedIndex].value
      }   

    });
}

const addRowBtn = document.querySelector('.add-row');
const content = document.querySelector('.content');
giveAllBoxClick();
ChangeAllWhiteTOAnotherColor();
changeAllBoxColor();

addRowBtn.addEventListener('click', function() {



    const newRow = document.createElement('div');
    newRow.setAttribute('class','row');
    //if on row in the content add on row to it
    if(content.children.length == 0)
    {
        const newColumn = document.createElement('div');
        newColumn.setAttribute('class','col-sm border border-dark box white');
        newRow.appendChild(newColumn);
    }
    else
    {
        const numOfCol = document.querySelector('.row').querySelectorAll('.box');
        for(let i = 0; i < numOfCol.length; i++)
        {
            const newColumn = document.createElement('div');
            newColumn.setAttribute('class','col-sm border border-dark box white');
            newRow.appendChild(newColumn);
        }
    }
    content.appendChild(newRow);
    giveAllBoxClick();
    ChangeAllWhiteTOAnotherColor();
});

const removeRowBtn = document.querySelector('.del-row');


removeRowBtn.addEventListener('click', function () {
    //remove last row
    if(content.children.length == 0)
    {
        return;
    }
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
    giveAllBoxClick();
    ChangeAllWhiteTOAnotherColor();
    
});

const removeColBtn = document.querySelector('.del-col');

removeColBtn.addEventListener('click', function () {
    let totalRow = content.children.length;
    if(content.children[totalRow - 1].children.length == 0)
    {
        return;
    }

    //content children = row, row children col
    //get the col for last row
    let lastCol = content.children[totalRow - 1].children.length - 1;
    for(let i = 0; i < totalRow;i++)
    {
        let row = content.children[i];
        row.removeChild(row.children[lastCol])
    }
    
});







 







