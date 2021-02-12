/**Array com os itens inicias para a lista.
 * 
 * Array with the initial items for the list.
 */
const shopItems = [
    {
        id: 1,
        name: 'Arroz',
        type: 'kg',
        quantity: 1,
        isChecked: false
    },
    {
        id: 2,
        name: 'Feijão',
        type: 'kg',
        quantity: 1,
        isChecked: false
    },
    {
        id: 3,
        name: 'Macarrão',
        type: 'kg',
        quantity: 1,
        isChecked: false
    }
]

window.onload = () => {
    onInit();
}
/**Disparada ao iniciar a aplicação. Responsável por colocar os itens iniciais na tela. 
 * 
 * Fired when the application is started. Responsible for adding the initial items on the screen. */
function onInit() {
    shopItems.forEach((item) => {
        addElement(item)
    })
}
/**
 * Exibe o erro.
 * 
 * Show error.
 * @param {String} message 
 */
function showError(message) {
    let msg = document.querySelector('#msg');
    msg.innerHTML = message;
    setTimeout(() => msg.innerHTML = '', 4000);
}
/**Disparada ao clicar no botão 'Adicionar à Lista'. 
 * Fired when clicking the 'Adicionar à Lista' button.
 */
function btnClicked() {

    let inputItem = document.querySelector('#input1');
    let inputQuantity = document.querySelector('#input2');
    let inputType = document.querySelector('#input3');

    if (inputItem.value === '') {
        showError('Adicionar um Item');
        return;
    }
    if (inputQuantity.value === '') {
        showError('Adicionar uma Quantidade');
        return;
    }
    if (inputType.value === '') {
        showError('Adicionar um Tipo');
        return;
    }

    addNewItem(inputItem.value, inputType.value, inputQuantity.value);
    inputItem.value = '';
    inputQuantity.value = '';
    inputType.value = '';
}
/**Responsável por inserir os itens do usuário no array.
 * 
 *  Responsible for inserting the items from the user into the array.  
 *  @param {String} name
 * @param {string} type
 * @param {number} quantity
 * */
function addNewItem(name, type, quantity) {
    let index = shopItems.length - 1;
    let newItem = {
        id: index >= 0 ? shopItems[index].id + 1 : 1,
        name: name,
        type: type,
        quantity: quantity,
        isChecked: false
    }
    shopItems.push(newItem);
    addElement(newItem);
}
/**Responsável por receber os itens do usuário.
 * 
 *  Responsible for receiving new items from the user.  */
function addElement(item) {

    let li = document.createElement('li');
    li.appendChild(document.createTextNode(`#${item.id} ${item.name} : ${item.quantity} ${item.type}`))
    li.id = item.id;
    li.onclick = (e) => removeElement(e, item.id);
    let list = document.querySelector('#list');
    list.appendChild(li);
}
/**Responsável por remover os itens da lista.
 * 
 *  Responsible for removing items from the list.  */
function removeElement(element, id) {
    element.target.remove();
    let index = shopItems.findIndex((item) => item.id == id)
    shopItems.splice(index, 1)
}