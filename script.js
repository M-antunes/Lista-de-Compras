const inputItem = document.querySelector('#input1');
const inputQuantity = document.querySelector('#input2');
const addToList = document.querySelector('#btn');
const msg = document.querySelector('#msg');
const list = document.querySelector('#list');


function itemRemove()


addToList.addEventListener('click', (e) => {
   
    if(inputItem.value === '' || inputQuantity.value === '') {
        msg.classList.add('msg');
        msg.innerHTML = 'Adicione um item';
        setTimeout(() => msg.remove(), 4000);
    }
    else {
       let li = document.createElement('li');
       li.appendChild(document.createTextNode(`${inputItem.value} :  ${inputQuantity.value}`))

       list.appendChild(li);
    
        inputItem.value = '';
        inputQuantity.value = '';
    }

})
