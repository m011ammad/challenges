"use strict";
const clear = document.querySelector('.clear');
const date  = document.querySelector('.date');
const list  = document.querySelector('.list');
const input = document.querySelector('.input');
const add   = document.querySelector('.add-task');
let itemsDone     = document.querySelectorAll('.item-done');
const itemsText   = document.querySelectorAll('.item-text');
const itemsDelete = document.querySelectorAll('.item-delete');
let idCounter = 101;
let dataList = [];

function addToDo(text) {
    const item = `  <li>
                        <span class="item-done material-icons">crop_square</span>
                        <span class="item-text"> ${text} </span>
                        <span class="item-delete material-icons">delete</span>
                    </li>`;
    list.insertAdjacentHTML('beforeend', item);
}

// ! clear
clear.addEventListener('click', e => {
    // remove all li
    list.querySelectorAll("li").forEach(v => {
        v.remove();
    })
})

// ! date
let todayDate = new Date().toISOString().split("T")[0];
date.innerHTML = todayDate;

// ! add item
add.addEventListener('click', e => {
    // get input value
    let inputValue = input.value;
    // add input value and create li html codes
    addToDo(inputValue);
    // clear input
    input.value = '';
    // update data list
    dataList.push({
        name: inputValue,
        id: idCounter,
        done: false,
        trash: false
    })
    idCounter++;
})

// ! done item
itemsDone.forEach((value, index) => {
    value.addEventListener('click', e => {
        if(value.innerHTML == "done") {
            value.innerHTML = "crop_square";
            itemsText[index].style.textDecoration = "none";
        } else {
            value.innerHTML = "done";
            itemsText[index].style.textDecoration = "line-through";
        }
    })
})

// ! delete item
itemsDelete.forEach(v => {
    v.addEventListener('click', () => {
        v.closest('li').remove();
    })
})