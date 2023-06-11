var typed = new Typed(".orange-text", {
strings: ["Stanley Chiamaka", "A Web Developer", "A UI/UX Designer"],
typeSpeed: 100,
backSpeed: 100,
loop: true,
backDelay: 3000,
});

var navbar = document.getElementById("navbar");
var profile = document.getElementById("profile");

window.onscroll = function(){
if(window.pageYOffset >= profile.offsetTop){
navbar.classList.add("sticky");
}else{
navbar.classList.remove("sticky");
}
}

const list = document.querySelectorAll(".icon");
    const sec = document.querySelectorAll(".section");
    function activeMenu(){
        let len = sec.length;
        while(--len && window.scrollY + 97 < sec[len].offsetTop){}
        list.forEach(ltx => ltx.classList.remove("active"));
        list[len].classList.add("active");
    }
activeMenu();
window.addEventListener("scroll",activeMenu);