/* 
Automating the card-making process
* 1. Get the HTML elements
*/
let blankImg = "blank.png";
let cardContainer = document.querySelector('.card-container')
let headerArea = document.querySelector('.header')
let cardCounter;

let createNewCard = (img,name,description)=> {
  let card = createNewElement('div', 'class', 'card');
  let image = createNewElement('img', 'class', 'card-img');
  card.append(image);
  
  let cardInfo = createNewElement('ul','class','card-info')
  let cardHeader = createNewElement('li','class','card-header');
  cardHeader.innerText = name;
  cardInfo.append(cardHeader)
  
  let cardDescription = createNewElement('li','class','card-description');
  cardDescription.innerText = description;
  cardInfo.append(cardDescription);
  
  let viewProfile = createNewElement('input','id','view-profile')
  card.append(cardInfo)
  card.append(viewProfile)
  
  cardContainer.append(card)
  if(cardCounter===undefined){
    let cardCounterLabel = createNewElement('p','id','card-counter-label')
    cardCounter = createNewElement('span','id','card-counter')
    cardCounterLabel.innerText = `Number of Cards: `
    cardCounterLabel.append(cardCounter)
    headerArea.append(cardCounterLabel)
  }
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
    cardElement.setAttribute('value','Add New Profile Card')
  }
  return cardElement;
}

let getNewCardInput = () => {
  let newNameInputForm = createNewElement('form','id','add-profile-form');
  let inputName = createNewElement('input','id','input-name');
  inputName.placeholder='Your name here'
  let inputOrg = createNewElement('input','id','input-org');
  inputOrg.placeholder = 'Title, Org., or Description'
  let addProfile = createNewElement('input','id','Add-Profile')
  newNameInputForm.append(inputName);
  newNameInputForm.append(inputOrg);
  headerArea.append(newNameInputForm)
  headerArea.append(addProfile);
}

getNewCardInput()
// let addNewProfile = () => {
 
// }
/*
<form action="/action_page.php">
  <fieldset>
    <legend>Personalia:</legend>
    <label for="fname">First name:</label><br>
    <input type="text" id="fname" name="fname" value="John"><br>
    <label for="lname">Last name:</label><br>
    <input type="text" id="lname" name="lname" value="Doe"><br><br>
    <input type="submit" value="Submit">
  </fieldset>
</form>
*/


const addProfileBtn = document.querySelector('#Add-Profile')

addProfileBtn.addEventListener('click',(event)=>{
  event.preventDefault();
  let inputName = document.querySelector('#input-name')
  let inputOrg = document.querySelector('#input-org')
  createNewCard(blankImg,inputName.value,inputOrg.value)
  let cards = document.querySelectorAll('.card')
  let numOfCards = 0
  cards.forEach(card => {
    numOfCards += 1
    
  });
  cardCounter.innerText = numOfCards
})

