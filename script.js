const inputItem = document.querySelector('#input1');
const inputQuantity = document.querySelector('#input2');
const inputType = document.querySelector('#input3');
const addToList = document.querySelector('#btn');
const msg = document.querySelector('#msg');
const list = document.querySelector('#list');


function showError(message) {
    msg.innerHTML = message;
    setTimeout(() => msg.innerHTML = '', 4000);
}

   
addToList.addEventListener('click', (e) => {
   
    if(inputItem.value === '') { 
        showError('Adicionar um Item');
        return;
    }
    if(inputQuantity.value === '') {
        showError('Adicionar uma Quantidade');
        return;
    } 
    if(inputType.value === '') {
       showError('Adicionar um Tipo');
       return;
    }
   
    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`${inputItem.value} :  ${inputQuantity.value} ${inputType.value}`))

    li.addEventListener('click', (e) => {
        e.target.remove();
    })

    list.appendChild(li);

    inputItem.value = '';
    inputQuantity.value = '';
    inputType.value = '';

})
