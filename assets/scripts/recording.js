//Now, we are looking at the difference between onclick and addEventListener
let draggableBox = document.querySelectorAll('.draggableBox');
const droppableBox = document.querySelector('.droppableBox');
// draggableBox.onclick = function(){
//   alert(2);
//   // let text = this.innerText; //this = draggableBox
//   // document.querySelector('body').append(text); //append text to body and displays it
// }

// draggableBox.onclick = function(){
//   alert(3);
//   // let text = this.innerText; //this = draggableBox
//   // document.querySelector('body').append(text); //append text to body and displays it
// }

// //it overwrites previous onclicks
// //onclick is a property
// draggableBox.onclick = function(){
//   alert(4);
//   // let text = this.innerText; //this = draggableBox
//   // document.querySelector('body').append(text); //append text to body and displays it
// }

// //Differently from onclick, addEventListener will not overwrite each others
// //addEventListener is a method and accept three parameters(type,callback function,options)
// draggableBox.addEventListener('click',function(){
//   alert('2-ci 1');
// })

// draggableBox.addEventListener('click',function(){
//   alert(2);
// })

// draggableBox.addEventListener('click',function(){
//   alert(3);
// })

// draggableBox.addEventListener('click',function(){
//   alert(4);
// })

// draggableBox.onclick = function(){
//   alert('1-ci 1');
//   // let text = this.innerText; //this = draggableBox
//   // document.querySelector('body').append(text); //append text to body and displays it
// }

//NOTE:IF THERE ARE BOTH ADD EVENT LISTENERS AND ONCLICK IN THE CASE THAT BEFORE ADD EVENTLISTENERS THERE ARE ONCLICK METHODS, FIRSTLY ONCLICK WILL WORK BY OVERWRITING AND SECONDLY, EVENTLISTENERS WILL WORK IN THE ORDER WE PROVIDED. OTHERWISE, IT WILL BE IN THE ORDER YOU PROVIDED.

//AddeventListener is a new way
// let myElement={};
// droppableBox.ondragover = (event)=>{event.preventDefault();} //will give permission to element to drop //will increase when you drag over it

// draggableBox.ondragstart = function(){
//   // myElement = this; 
//   // console.log(this); //this=draggableBox
//   // console.log('ondrag start');
// } 

// // draggableBox.ondragend = function(){
// //   console.log('ondrag end');
// // }

// // //your browser also don't allow to drop by default
// droppableBox.ondrop = function(){
//   // this.append(myElement);
//   // console.log('ondropp');
// }



//----------IF THERE ARE MANY ELEMENTS TO DROP FROM BACKEND---------------
droppableBox.ondragover = (event)=>{event.preventDefault();} //will give permission to element to drop //will increase when you drag over it

//you can use forEach for more elements(draggable boxes) like below
draggableBox.forEach((element)=>{
  element.ondragstart = function(event){
    let id = this.getAttribute('id');
    event.dataTransfer.setData('id',id);
  }
})


// draggableBox.ondragstart = function(event){
//   let id  = this.getAttribute('id');
//   event.dataTransfer.setData('id',id);
// } 

droppableBox.ondrop = function(event){
  const myElementId= event.dataTransfer.getData('id');
  const element = document.getElementById(myElementId);
  this.append(element);
}