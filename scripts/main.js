let myImage = document.querySelector('img');
var audio = new Audio("media/tuki.mp3");

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'media/mirai.jpg') {
      myImage.setAttribute('src','media/tuki.png');
      audio.play();
    } else {
      myImage.setAttribute('src','media/mirai.jpg');
      audio.play();
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt("What's your name? :3");
    if(!myName) {
        setUserName();
    } else{
        localStorage.setItem('name', myName);
    myHeading.textContent = '"I love Mirai Kuriyama" -' + myName;
    }
  }
  if(!localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = '"I love Mirai Kuriyama" -' + storedName;
  }
  myButton.onclick = function() {
    setUserName();
  }
