// ATTENTION: THIS IS CODE FROM THE YOUTUBE CRASH COURSE. IT IS NOT MEANT TO RUN, IT IS JUST FOR LEARNING PURPOSES //

// LOGGING OUTPUT
//alert('Hello World'); // Do not use for debugging. Stops script and only strings
//console.log('Hello World');
//console.error('This is an error');
//console.warn('This is a warning');

// VARIABLES - var, let, const
//let age = 30;
// let can be re-assigned, const can not
//age = 31;


// DATA TYPES - String, Number, Boolean, null, undefined
const name = 'Brad';
const age = 37;
const rating = 3.5;
const isCool = true;
const x = null;
const y = undefined;
let z; // undefined

// Check type
//console.log(typeof z);

// Concatenation of strings and variables , similar to C++ , just use the plus symbols, this is the old way to do it
let hell0 = 'My name is ' + name +' and I am ' + age;
//console.log(hell0)
// the faster way to do it, Template strings
let hello = `my name is ${name} and I am ${age}`;     // this is the shorthand way to handle string Concatenation
//console.log(hello);       // console.log is essentially your print statements

// string methods
const s = 'Hello World';
/*
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5));      // substring method from 0 but not including 5, same thing as in C++
console.log(s.split(''));           // this splits by letter
*/
// arrays
const fruits = ['apples','oranges','pears']       // initially array
fruits.push('grapes');                            // pushing grapes onto the stack
//console.log(fruits);                              // should now have 4 elements
fruits.unshift('bannana');
//console.log(fruits);
fruits.pop();
//console.log(fruits);



//      objects, other than the syntax, they are essentially the same as in other languages


const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  hobbies: ['music', 'movies', 'sports'],
  address:{
    street: '50 main st',
    city: 'Boston',
    state: 'MA'
  }
}
person.email = 'john@gmail.com';      // this lets you add directly to the object. dont do this
//console.log(person);  // print out all the information about an object
//console.log(person.address.street);           // access elements of an object by using the . operation

const todos = [
  {
    id:1,
    text: 'Take out trash',
    isCompleted: true
  },
  {
    id:2,
    text: 'Meeting with boss',
    isCompleted: true
  },
  {
    id:3,
    text: 'Dentist appt',
    isCompleted: true
  }
]

//console.log(todos);     // print out all of the objects in  the object array
//console.log(todos[1].text)    // accessing the second element in the arrays objects.
//const todoJSON = JSON.stringify(todos);
//console.log(todoJSON);                  // we just converted the format of the object into JSON style, you would do this before sending information to a server or something


//              LOOPS

/*
console.log("iteration from 0-9");
for (let i = 0 ; i < 10; i++){        // this is the same syntax as it is in c++!
  console.log(`For loop number: ${i}`);
}

let i = 0;
while ( i < 10){
  console.log( `While loop at: ${i}`);
  i++;
}
*/

//console.log("iterating trough todo object list");       // one way to iterate through an an array, this is the normal way you know how to do it
for (let i = 0; i < todos.length; i++){
  //console.log(todos[i].text);
}


// conditionals
/*
let var1 = 20;
if (var1 == 10){
  console.log('var1 is 10');
}
else{
  console.log('var1 is NOT 10')
}

if (var1 === 10){   // this matches the value AND THE DATA TYPES
  console.log('var1 is 10, and a decimal')
}
*/


const var2 = 10;

const color = var2 > 10 ? 'red' : 'blue';       // turinary operator

switch(color){        // example of switch
  case 'red':
    console.log('color is red');
    break;
  case 'blue':
      //console.log('color is blue');
      break;
  default:
    console.log('color is NOT red or blue');
    break;
}



//          FUNCTIONS IN JAVASCRIPT

function addNums(num1 = 1,num2 = 2){        // if we call the function without passing anything, we can set default values
  return num1 + num2;
}

let sum = addNums(5,4);
//console.log(sum);


/*
function Person(firstName, lastName, dob){      // object constructor function, this is like STRUCTS in C++
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob) ;      // this is a special date formatter in javascript.
}

Person.prototype.getBirthYear = function(){     // defining functions outside of constructors, DO THIS ITS CLEAN
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
  return this.firstName + ' ' + this.lastName;
}
*/

// Class        , this is makes code look cleaner
class Person {
  constructor(firstName,lastName,dob){
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob)
  }

  getBirthYear(){
    return this.dob.getFullYear();
  }

  getFullName(){
    return this.firstName + ' ' + this.lastName;
  }
}

// instantiate the object

const person1 = new Person('John', 'Doe', '4-3-1980');
const person2 = new Person('mary', 'smith', '6-3-1980');

//console.log(person1.getBirthYear());
//console.log(person1.getFullName());


//              DOCUMENT OBJECT MODEL STUFF

//        SELECTING ELEMENTS FROM THE DOM, Selecting elements from HTML files
// single element SELECTORS
console.log(document.getElementById('my-form'));      // grabbing single elements
// let form = document.getElementById('my-form');
// console.log(form);

console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));  // returns the first element that matches the first specfied CSS tag

//                                        multiple element selection

// console.log(document.querySelectorAll('.item'));      // use this to get all elements of the tag .item , you can put in an ID, class or tag for the input
// console.log(document.getElementsByClassName('item'));     // returns an HTML collection of items under the class name 'item'

// console.log("PRINTING ITEMS OUT AFTER COLLECTING THEM IN THE FORM OF AN ARRAY");
// const items = document.querySelectorAll('.item');
// for (let i = 0; i < items.length; i++){
//   console.log(items[i])
// }

//                                      manipulating items in the DOM
/*
const ul = document.querySelector('.items');
//ul.remove();      // dynamically takes out everthing with .items
//ul.lastElementChild.remove();     // removes item 3
ul.firstElementChild.textContent = 'Hello';     // we actually changed the value here form 'item1' to 'hello'
ul.children[1].innerText = 'Brad';              // changing inner text
ul.lastElementChild.innerHTML = '<h4> Hello </h4>';     // dynamically adding html

const btn = document.querySelector('.btn');     // give you first thing in class.btn      , DO THIS WHEN YOU WANT TO DYNAMICALLY CHANGE THINGS AROUND
btn.addEventListener('click', (e) => {
  e.preventDefault();
  document.querySelector('#my-form').style.background = '#ccc';
  document.querySelector('body').classList.add('bg-dark');      // adding a class onto a tag
  document.querySelector('.items').lastElementChild.innerHTML = '<h1> hello </h2>';
})
*/
// btn.style.background = 'red';   // changes the background to red

//                  CREATING A FORM SCRIPT
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
  e.preventDefault();

  if(nameInput.value === '' || emailInput.value === ''){
    msg.classList.add('error');
    msg.innerHTML = 'Please enter all fields';
    setTimeout(() => msg.remove(), 3000)
  }
  else{
    const li = document.createElement('li');    // creates list item
    li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));  // now we have created the text

    userList.appendChild(li);       // adding the new element to the list

    // clear the fields
     nameInput.value = '';
     emailInput.value = '';
     
  }
}
