const bars = document.querySelector('.fa-bars');
const linkss = document.querySelector('.linkss');
const navig = document.querySelector('.naviga')
const links = document.querySelector('nav ul')

console.log(bars)
console.log(linkss)
console.log(navig)
console.log(links)


bars.addEventListener('click', display)

function display(){
 links.classList.toggle('hide');
 navig.classList.toggle('hide')
    console.log('yes')
}


// function myFunction() {
//     var x = document.getElementById("myTopnav");
//     if (x.className === "nav") {
//       x.className += " responsive";
//     } else {
//       x.className = "nav";
//     }
//   }