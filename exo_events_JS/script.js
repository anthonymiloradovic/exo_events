/* Fonctionnalité 1 */
let count = 0;
let a = document.querySelector("footer")
a.addEventListener("click", function(){
     count++
     console.log("clique" + count);

});

/* Fonctionnalité 2*/


const navbar = document.querySelector("#navbarHeader")
const bigButton = document.getElementsByClassName("navbar-toggler")
function toggle(){
     navbar.classList.toggle("collapse")
}
bigButton[0].addEventListener("click", toggle);


/* Fonctionnalité 3 */
const card = document.getElementsByClassName("card-text")
const buttonColor = document.getElementsByClassName("btn-outline-secondary")
console.log(card)
console.log(buttonColor)

buttonColor[0].addEventListener("click", textColor);
function textColor(){
     card[0].style.color = "red"
}
/* Fonctionnalité 4 */

buttonColor[1].addEventListener("dblclick", textCard2);
function textCard2(){

     if  (card[1].style.color === "green")
     {
          card[1].style.color = "black" // "" reviens a la base de la color 
     } else {
          card[1].style.color = "green"
     }}

/* Fonctionnalité 5 */

const bootstrap = document.getElementsByTagName("link")[0];
const navnav = document.getElementsByTagName("header")[0];
console.log(bootstrap)
 
navnav.addEventListener("dblclick", ciaobootstrap);
function ciaobootstrap(){
     if (bootstrap.disabled === false){
          bootstrap.disabled = true
     } else {
          bootstrap.disabled = false
     }
}

/* Fonctionnalité 6 */

// const cardAll = document.querySelectorAll("card")

// cardAll.forEach((card) => {
//      let viewButton = card.querySelector("button")
//      viewButton.querySelector("button")
//      cardALL.addEventListener("mouseover", () =>{
//         card.querySelector("p")
//           .classList.toggle("collapse");
//           let img = card.querySelector("img");
//           if (img.style.width === "20%") {
//                img.style.width = "100 %";
//            } else {
//                img.style.width = "20%";
               
//           }
//      });
// });

// console.log(cardAll)





// const btnView = document.getElementsByTagName("btn-success")
// const textCard = document.querySelectorAll("p.card-text")

// console.log(textCard)

// btnView[1].addEventListener("click", ciaoText);
// function ciaoText(){
    
// }
// btnView[0].addEventListener("mouseenter", move);
// function move()
//    {
//      move[0].classList.toggle("card-text");
//      console.log("ca marche")
//      }


// const cardAll = document.querySelectorAll(".card")

// let viewButtons = document.getElementsByClassName("btn btn-sm btn-succes");
// let showb = false
// if (showb === false){



// for (let i = 0; i < viewButtons.length; i ++){
//           document.getElementsByClassName("card-text")[i].classList.toggle("d-none");
//           document.getElementsByClassName("card-img-top")[i].classList.toggle("w-25");
//           showb = false;

//  });
// }

// let viewBtn = document.getElementsByClassName("btn btn-sm btn-succes");
// let cardsText = document.getElementsByClassName("card-text");
// let img = getElementsByClassName("card-img-top");
// // let showcard = false

// for (let i = 0; i < viewBtn.length; i++){
// let viewsButtons = document.getElementsByClassName("btn btn-sm btn-succes");
// // if (showb = true){
// //      for (let i = 0; i < viewsButtons.length; i++){

// //      }
// // }


  const rightBtn = document.getElementsByClassName('btn-secondary')[0];
  const everyCard = document.getElementsByClassName("col-md-4");

  console.log(everyCard)
  for (let i =0; i < everyCard.length; i++){
 }
