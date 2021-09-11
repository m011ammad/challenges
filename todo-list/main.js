"use strict";

// giving html elements
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

// ! add function
function addToDo(text, id, trash) {
    // if item is in trash don't create it in DOM
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

// ! get localStorage data and save to dataList
let parsedList = JSON.parse(localStorage.getItem("ToDo"));
if(parsedList != null) {
    parsedList.forEach(v => {
        addToDo(v.todoText, v.id, v.trash);
        dataList.push({
            todoText: v.todoText,
            id: v.id,
            done: v.done,
            trash: v.trash,
        });
    })
}

// ! date
let todayDate = new Date().toISOString().split("T")[0];
date.innerHTML = todayDate;

// ! clear
clear.addEventListener('click', e => {
    // remove all items from DOM
    list.querySelectorAll("li").forEach(v => {
        v.remove();
    })

    // remove localStorage item
    window.localStorage.removeItem('ToDo');
})

// ! click on add item
add.addEventListener('click', e => {

    // remove emptyList
    if (
        document.querySelector(".list-empty") != null) {
        document.querySelector(".list-empty").remove();
    }

    // get input value
    let inputValue = input.value;

    // set idCounter
    // if we use other idCounter after refresh the idCounter will be 0 again
    if (dataList.length == 0) {
    // if list empty
    idCounter = 0;
    } else {
    // give last id and set idCounter value one higher
    idCounter = dataList[dataList.length - 1].id + 1;
    }

    // add new item
    addToDo(inputValue, idCounter);

    // clear input
    input.value = "";

    // update dataList array
    dataList.push({
    todoText: inputValue,
    id: idCounter,
    done: false,
    trash: false,
    });

    // update localStorage
    window.localStorage.setItem("ToDo", JSON.stringify(dataList));

    // update idCounter
    idCounter++;
})

// ! done , delete
list.addEventListener('click', e => {
    // ! done item
    // if click on circle(check) icon
    if (e.target.matches(".item-done")) {
        if (e.target.innerHTML == "task_alt") {
            // if task is done

            // update dataList
            dataList[e.target.id].done = false;
            // update localStorage
            window.localStorage.setItem("ToDo", JSON.stringify(dataList));
            
            e.target.innerHTML = "radio_button_unchecked";
            e.target.nextElementSibling.style.textDecoration = "none";

            console.log(localStorage.getItem('ToDo'));

        } else {
            // if task is not done

            // update dataList
            dataList[e.target.id].done = true;
            // update localStorage
            window.localStorage.setItem("ToDo", JSON.stringify(dataList));

            e.target.innerHTML = "task_alt";
            e.target.nextElementSibling.style.textDecoration = "line-through";

            console.log(localStorage.getItem("ToDo"));
        }
    // ! delete items
    // if click of delete icon
    } else if (e.target.matches(".item-delete")) {
        dataList[e.target.id].trash = true;
        window.localStorage.setItem("ToDo", JSON.stringify(dataList));
        e.target.closest("li").remove();
    }
})

// ! add text and image if list is empty
if (dataList.length == 0) {
const emptyList = ` <div class="list-empty">
                        <h3>Your List Is Empty!</h3>
                        <img src="assets/images/empty.png" alt="empty list">
                    </div>`;
list.insertAdjacentHTML("beforeend", emptyList);
}