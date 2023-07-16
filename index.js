var menuIcon = document.getElementById("menu-icon");
var menuContainer = document.querySelector(".menu-container");
function showMenu() {
    if (menuIcon.src.endsWith("3-hor-lines.png")) {
        menuIcon.src = "./images/cross-icon.png"
        menuContainer.classList.remove("not-clicked");

    } else {
        menuIcon.src = "./images/3-hor-lines.png";
        menuContainer.classList.add("not-clicked");
    }
}

var utilityIcons = document.querySelectorAll(".utility-items");
var clickableList = document.querySelectorAll(".collapsed");
function showItems(i) {
    let currList = clickableList[i].querySelector("ul");
    let listIcon = clickableList[i].querySelector(".arrow-icon");
    if (currList.classList.contains("not-clicked")) {
        listIcon.src = "./images/upArrow.webp";
        currList.classList.remove("not-clicked");
    } else {
        listIcon.src = "./images/downArrow.png";
        currList.classList.add("not-clicked");
    }
}


let msContainer = document.querySelector(".ms-container");
let menuSpan = document.querySelector(".menu-span");
let lgContainer = document.querySelector(".lg-container");

function showMSMenu(){
    
    if(msContainer.classList.contains("not-clicked")){
        msContainer.classList.remove("not-clicked");
        menuSpan.style.backgroundColor = "#F2F2F2"
    } else {
        msContainer.classList.add("not-clicked");
        menuSpan.style.backgroundColor = "transparent";
    }
}

document.addEventListener('click', function(event){
    const isClickInsideMenu = msContainer.contains(event.target) || lgContainer.contains(event.target);
    if(!isClickInsideMenu) {
        msContainer.classList.add("not-clicked");
        menuSpan.style.backgroundColor = "transparent";
    }
})


// Code for slideshow navigation

let slideIndex = 1;

function moveSlides(n){
    showSlides (slideIndex +=n);
}

function currentSlide(n){
    showSlides(slideIndex = n);
}

function showSlides(n){
    let i;
    let slideItem = document.getElementsByClassName("slide-item");
    let dots = document.getElementsByClassName("dot");
    if(n > slideItem.length) {slideIndex = 1};
    if(n < 1){slideIndex = slideItem.length};
    for (i=0; i<slideItem.length; i++ ){
        slideItem[i].style.display = "none";
    }
    for (i=0; i<dots.length; i++){
        dots[i].classList.remove("active");
    }
    slideItem[slideIndex-1].style.display="block";
    dots[slideIndex-1].classList.add("active");
}