var typed = new Typed(".orange-text", {
strings: ["Stanley Francess", "A Web Developer", "A UI/UX Designer"],
typeSpeed: 100,
backSpeed: 100,
loop: true,
backDelay: 3000,
});

var navbar = document.getElementById("navbar");

window.onscroll = function(){
if(window.pageYOffset >= navbar.offsetTop){
navbar.classList.add("sticky");
}else{
navbar.classList.remove("sticky");
}
}