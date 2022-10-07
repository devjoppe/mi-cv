var menuBtn = document.querySelector(".menu-btn");
var myMenu = document.querySelector(".close");

menuBtn.addEventListener("click", function() {
  menuBtn.classList.toggle("is--active");
  menuBtn.classList.add("is--clicked");
  myMenu.classList.toggle("open");
  setTimeout(function(){
    menuBtn.classList.remove("is--clicked");
  }, 300);
});