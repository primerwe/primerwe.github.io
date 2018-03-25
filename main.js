'use strict';

let students = ['Ádám', 'Alexandra', 'Andris', 'Bálint', 'Bandi', 'Béla', 'Emese', 'Fruzsi', 'Hédi', 'Kinga', 'Laci', 'MG', 'Miki', 'Nándi', 'Tamás', 'Patrik', 'Rudi'];

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function createNewElement(array) {
  let studentsList = document.querySelector('ul.foxes');
  for (let i = 0; i < students.length; i++) {
    let newItem = document.createElement('li');
    newItem.textContent = students[i];
    studentsList.appendChild(newItem);
  }
}

createNewElement(students);

function clearBodyItems() {
  let element = document.querySelector('tbody#tablebody');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function clearHeadItems() {
  let element = document.querySelector('thead#tablehead');
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function createTableHead() {
  clearHeadItems();
  let tableHead = document.querySelector('thead#tablehead');
  let tableRow = document.createElement('tr');
  let tableHeadNumber = document.createElement('th');
  let tableHeadLabel = document.createElement('th');
  tableHeadNumber.textContent = 'Number';
  tableHeadLabel.textContent = 'Fox';
  tableRow.appendChild(tableHeadNumber);
  tableRow.appendChild(tableHeadLabel);
  tableHead.appendChild(tableRow);
}

function createShuffleResult(array) {
  clearBodyItems();
  let shuffledStudents = shuffleArray(students);
  let tableBody = document.querySelector('tbody#tablebody');
  for (let i = 0; i < shuffledStudents.length; i++) {
    let tableRow = document.createElement('tr');
    let tableDataNumber = document.createElement('td');
    let tableData = document.createElement('td');
    tableDataNumber.textContent = i + 1;
    tableData.textContent = shuffledStudents[i];
    tableRow.appendChild(tableDataNumber);
    tableRow.appendChild(tableData);
    tableBody.appendChild(tableRow);
  }
}

let button = document.querySelector('button.start');
button.addEventListener('click', function () {
  createTableHead();
  createShuffleResult(students)
});
