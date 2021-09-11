"use strict";
const clear = document.querySelector('.clear');
const date  = document.querySelector('.date');
const list  = document.querySelector('.list');
const input = document.querySelector('.input');
const add   = document.querySelector('.add-task');
const itemsDone   = document.querySelectorAll('.item-done');
const itemsText   = document.querySelectorAll('.item-text');
const itemsDelete = document.querySelectorAll('.item-delete');
let idCounter;
let dataList = [];

function addToDo(text, id, trash) {
    if(trash) {
        return;
    }
    const item = `  <li>
                        <span class="item-done material-icons" id="${id}">radio_button_unchecked</span>
                        <span class="item-text"> ${text} </span>
                        <span class="item-delete material-icons" id="${id}">delete</span>
                    </li>`;
    list.insertAdjacentHTML('beforeend', item);
}

// ! clear
clear.addEventListener('click', e => {
    let parsedListForClear = JSON.parse(localStorage.getItem('ToDo'));
    parsedListForClear.forEach(v => {
        v.trash = true;
        console.log(v.trash);
    })
    // remove all li
    list.querySelectorAll("li").forEach(v => {
        v.remove();
    })
    window.localStorage.removeItem('ToDo');
})

let data = localStorage.getItem('ToDo');
let parsedList = JSON.parse(data);
console.log(data);
if(data != null) {
    parsedList.forEach(v => {
        addToDo(v.todoText, v.id, v.trash);
        dataList.push({
            todoText: v.todoText,
            id: v.id,
            done: v.done,
            trash: v.trash,
        });
    })
} else {
    // dataList  = [];
    let idCounter = 0;
    console.log('starting ...');
}

// ! date
let todayDate = new Date().toISOString().split("T")[0];
date.innerHTML = todayDate;

// ! add item
add.addEventListener('click', e => {
    // get input value
    let inputValue = input.value;
    if (dataList.length == 0) {
        idCounter = 0;
    } else {
        idCounter = dataList[dataList.length - 1].id + 1;
    }
      // add input value and create li html codes
      addToDo(inputValue, idCounter);
    // clear input
    input.value = '';
    // update data list
    dataList.push({
        todoText: inputValue,
        id: idCounter,
        done: false,
        trash: false
    })
    window.localStorage.setItem('ToDo', JSON.stringify(dataList));
    idCounter++;
})

// ! done , delete
list.addEventListener('click', e => {
    // ! done item
    if (e.target.matches(".item-done")) {
        if (e.target.innerHTML == "task_alt") {
            dataList[e.target.id].done = false;
            window.localStorage.setItem("ToDo", JSON.stringify(dataList));
            console.log(JSON.parse(localStorage.getItem('ToDo')));
            e.target.innerHTML = "radio_button_unchecked";
            e.target.nextElementSibling.style.textDecoration = "none";
        } else {
            dataList[e.target.id].done = true;
            window.localStorage.setItem("ToDo", JSON.stringify(dataList));
            console.log(JSON.parse(localStorage.getItem('ToDo')));
            e.target.innerHTML = "task_alt";
            e.target.nextElementSibling.style.textDecoration = "line-through";
        }
    // ! delete items
    } else if (e.target.matches(".item-delete")) {
        console.log(e.target);
        dataList[e.target.id].trash = true;
        window.localStorage.setItem("ToDo", JSON.stringify(dataList));
        console.log(JSON.parse(localStorage.getItem('ToDo')));
        e.target.closest("li").remove();
    }
})

// setInterval(() => {
//     console.log(localStorage.getItem('ToDo'));
// }, 1000);

if (dataList.length == 0) {
  const emptyList = ` <div class="list-empty">
                            <h3>Your List Is Empty!</h3>
                            <img src="assets/images/empty.png" alt="">
                        </div>`;
  list.insertAdjacentHTML("beforeend", emptyList);
}