
// //Question 1
// function createAdder(numberToAdd) {
//   return function (number) {
//     return number + numberToAdd;
//   }
// }

// //such as we can take example eg//
// const addFive = createAdder(5);
// console.log(addFive(10)); 
// console.log(addFive(20)); 
// console.log(addFive(30)); 





// //Question 2
// function searchArray(array, value) {
//   if (array.length === 0) {
//     return false; 
//   } else if (array[0] === value) {
//     return true; 
//   } else {
//     return searchArray(array.slice(1), value); 
//   }
// }

// // Here we can take example like that//
// const myArray = [1, 2, 3, 4, 5];
// console.log(searchArray(myArray, 3)); 
// console.log(searchArray(myArray, 6)); 





// Question 3
function addNewParagraph(text) {
  const newParagraph = document.createElement('p'); 
  newParagraph.textContent = text; 
  document.body.appendChild(newParagraph); 
}

const addParagraphButton = document.querySelector('#add-paragraph-btn');
addParagraphButton.addEventListener('click', () => {
  addNewParagraph('This is a new paragraph!');
});
// Question 4

function addNewListItem(text) {
  const newListItem = document.createElement('li');
  newListItem.innerText = text;
  const unorderedList = document.querySelector('#my-list');
  unorderedList.appendChild(newListItem);
}


// Question 5
function changeBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}


//Question 6

function saveObjectToLocalStorage(key, object) {
  localStorage.setItem(key, JSON.stringify(object));
}

const myObject = { name: 'Sadaqat', age: 27 };
saveObjectToLocalStorage('myObject', myObject);

const retrievedObject = JSON.parse(localStorage.getItem('myObject'));
console.log(retrievedObject); 


//Question 7
function getObjectFromLocalStorage(key) {
  const objectString = localStorage.getItem(key);
  if (!objectString) {
    return null;
  }
  return JSON.parse(objectString);
}
const eretrievedObject = getObjectFromLocalStorage('myObject');
console.log(eretrievedObject); 


//Quesion 8
function saveObjectToLocalStorage(object) {
 
  for (const [key, value] of Object.entries(object)) {
    localStorage.setItem(key, JSON.stringify(value));
  }

 
  const savedObject = {};
  for (const key of Object.keys(object)) {
    const value = localStorage.getItem(key);
    savedObject[key] = JSON.parse(value);
  }
  return savedObject;
}

const myObject2 = { name: 'Asmat', age: 36 };
const retrievedObject2 = saveObjectToLocalStorage(myObject2);
console.log(retrievedObject2); 