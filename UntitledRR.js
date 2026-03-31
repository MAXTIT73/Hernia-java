// ZD1
const div=document.createElement("div")
div.textContent="div"
const body=document.querySelector("body")
body.appendChild(div)

// ZD2
const element = document.querySelector("h1");
element.style.color = "red";

// ZD3
var img = document.querySelector("img");
img.setAttribute('src', 'https://static.toiimg.com/thumb/116331344/River-destinations-in-India.jpg?width=636&height=358&resize=4');

// ZD4
document.querySelector('p').style.display = 'none';

// ZD5
const mydiv = document.querySelector('.container')
mydiv.classList.add("T4");

// ZD6
const activeListItem = document.querySelector('.active');
activeListItem.classList.remove('active');

// ZD7
const bb = document.querySelector('button')
bb.textContent = 'Przycisk!'

// ZD8
const input = document.querySelector('input');
input.value = '';

// ZD9
const newListElement = document.createElement('li');
const unorderedList = document.querySelector('.container ul');
newListElement.textContent ='El4';
unorderedList.appendChild(newListElement);

// ZD10
document.body.style.backgroundColor = "lightblue";

// ZD11
const newDiv = document.createElement("div");
newDiv.classList.add("new-div");
const header = document.querySelector("header");
header.appendChild(newDiv);

// ZD12
const headers = document.querySelectorAll('h3');
if (headers.length >= 1) {
    headers[1].style.color = 'green';
}

// ZD13
const img1 = document.querySelector('main img');
img1.dataset.src = 'https://sciencenotes.org/river-definition-formation-facts/';
img1.removeAttribute('src');

// ZD14
const paragraphs = document.querySelectorAll('p'); 
for (let i = 1; i < paragraphs.length; i += 2) {
    paragraphs[i].style.display = 'none';
}

// // ZD15
//   const listItems = document.querySelectorAll('li');
//   if (listItems.length >= 3) {
//   const thirdListItem = listItems[2];
//   thirdListItem.classlist.add('selected');
// }

// ZD16
function addElement() {
  var list = document.querySelector('details > ul > li');      
  var newItem = document.createElement('li');        
  newItem.textContent = 'Nowy element';               
  list.insertBefore(newItem, list.firstChild);      
}

// ZD17
function removeElements() {
  var listItems = document.querySelectorAll('ul > li');
  for (var i = 0; i < listItems.length; i+= 2) {
    listItems[i].remove()
  }
}