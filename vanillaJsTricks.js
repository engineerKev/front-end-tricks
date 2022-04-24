/*

INPUT TEXT FIELD

*/
// GET VALUE OF INPUT FIELD
const inputFieldValue = document.getElementById('field-id').value;
const inputFieldValueQuerySelector = document.querySelector('#field-id').value;

// GETTING BY CLASS -> RETURNS COLLECTION -> ACCESS ELEMENTS USING [];
const inputFieldValueWithClass = document.getElementsByClassName('input-class-name');
const inputFieldValueClassQuerySelector = document.querySelectorAll('.input-class-name');


/*

BUTTON

*/
//Event listener for button 
const btn = document.querySelector('#button-id');

btn.addEventListener('click', function(event) {
  console.log(event);
  console.log(event.target);
  console.log(event.target.value);
});

/*

RADIO BUTTON

*/
const radioBtnWithId = document.querySelector('#radio-btn-id');
const radioBtnWithClass = document.querySelector('.radio-btn-class-name');

// SEE IF BUTTON IS CHECKED
const radioButtonWithIdChecked = radioBtnWithId.checked;
const radioButtonWithClassChecked = radioBtnWithClass.checked;

// VALUE OF RADIO BTN
const radioBtnWithIdVal = radioBtnWithId.value;
const radioButtonWithClassVal = radioBtnWithClass.value;

/*

CHECKBOX 

*/
const checkboxWithId = document.querySelector('#checkbox-id');
const checkboxWithClass = document.querySelector('.checkbox-class');
// SEE IF BUTTON IS CHECKED
const checkboxWithIdChecked = checkboxWithId.checked;
const checkboxWithClassChecked = checkboxWithClass.checked;

// VALUE OF RADIO BTN
const checkboxWithIdVal = checkboxWithId.value;
const checkboxWithClassVal = checkboxWithClass.value;


/*

ARRAY ITERATORS EXAMPLES

*/
const myArray = ['a', 'b', 'c', 'd'];

//FOREACH 
myArray.forEach((element, index, array) => console.log(element, index, array));

//MAP
const newArr1 = myArray.map((element, index, array) => console.log(element, index, array));

//FILTER (returns all elements that PASS logic check)
const newArr2 = myArray.filter((element, index, array) => {
  //ONLY RETURNS ELEMENTS THAT ARE EVEN
  return index%2
})

//FIND
const firstOccurence = myArray.find((element, index, array) => {
  // RETURNS ONLY THE FIRST INSTANCE FOUND
  // RETURNS UNDEFINED IF NONE FOUND
  return element === 'c'
});

//REDUCE
const reducedResults = myArray.reduce((acc, curr, index, array) => {
  return acc[curr] = index
}, {});

//EVERY
const didAllElementsPass = myArray.every((element, index, array) => {
  return element.length < 2;
});
