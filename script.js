/* 
Automating the card-making process
* 1. Get the HTML elements
*/
let cardContainer = document.querySelector('.card-container')
let headerArea = document.querySelector('.header')


let createNewCard = (img,name,description)=> {
  let card = createNewElement('div', 'class', 'card');
  let image = createNewElement('img', 'class', 'card-img');
  card.append(image);
  
  let cardInfo = createNewElement('ul','class','card-info')
  let cardHeader = createNewElement('li','class','card-header');
  cardInfo.append(cardHeader)
  
  let cardDescription = createNewElement('li','class','card-description');
  cardInfo.append(cardDescription)
  
  let viewProfile = createNewElement('input','id','view-profile')
  card.append(cardInfo)
  card.append(viewProfile)
  
  cardContainer.append(card)
  console.log(card)
}

let createNewElement = (element,attribute,value)=> {
  let cardElement = document.createElement(element);
  cardElement.setAttribute(attribute,value);
  if(element==='img'){
    cardElement.src='blank.png';
    cardElement.alt = 'Default image'
  }
  if(value==='card-header'){
    cardElement.innerText = 'Your name here';
  }
  if(value==='card-description'){
    cardElement.innerText = 'Title, Organization or Description';
  }
  if(element==='input' && value ==='view-profile'){
    cardElement.setAttribute('type','button')
    cardElement.setAttribute('value','View Profile')
  }
  if(element==='input' && value ==='Add-Profile'){
    cardElement.setAttribute('type','button')
    cardElement.setAttribute('value','Add New Profile')
    console.log('addProfile Element',cardElement)
  }
  return cardElement;
}



let addNewProfile = () => {
  let addProfile = createNewElement('input','id','Add-Profile')
  headerArea.append(addProfile)
}
addNewProfile()

const addProfileBtn = document.querySelector('#Add-Profile')


addProfileBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  createNewCard()
})