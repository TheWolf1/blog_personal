const btnHamburguer = document.querySelector("#btnHamburguer");
const menu = document.querySelector("#menuId");
console.log(btnHamburguer);


btnHamburguer.addEventListener('click',(e)=>{
    menu.classList.toggle("show_menu");
});