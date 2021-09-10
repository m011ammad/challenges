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
    itemsDone = document.querySelectorAll(".item-done");
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

// ! done , delete
list.addEventListener('click', e => {
    // ! done item
    if (e.target.matches(".item-done")) {
        if (e.target.innerHTML == "done") {
            e.target.innerHTML = "crop_square";
            e.target.nextElementSibling.style.textDecoration = "none";
        } else {
            e.target.innerHTML = "done";
            e.target.nextElementSibling.style.textDecoration = "line-through";
        }
    // ! delete items
    } else if (e.target.matches(".item-delete")) {
        e.target.closest("li").remove();
    }
})