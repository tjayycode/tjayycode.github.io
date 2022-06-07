let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/test-site-iron-man.png') {
      myImage.setAttribute('src','images/test-site-iron-man2.png');
    } else {
      myImage.setAttribute('src','images/test-site-iron-man.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.textContent = 'Lets Learn About Iron Man, ' + myName;
    }
  }
  
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Lets Learn About Iron Man, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
  }
  
