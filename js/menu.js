// Menu
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

// About me
var aboutMeBtn = document.querySelector(".aboutme");
var aboutMe = document.querySelector(".aside");
var closeAsideBtn = document.querySelector(".close-aside");

aboutMeBtn.addEventListener("click", function() {
  aboutMe.classList.toggle("aside-active");
});

closeAsideBtn.addEventListener("click", function() {
  aboutMe.classList.toggle("aside-active");
});

// Experience expand
var expandListBtn = document.querySelector(".expand-exp");
var expandList = document.querySelector(".expand-list");
var closelinkBtn = 'Close ' + '<i class="fa-solid fa-circle-xmark">';
var openlinkBtn = 'See 3 more positions ' + '<i class="fa-sharp fa-solid fa-arrow-right">';

expandListBtn.addEventListener("click", function() {
  expandList.classList.toggle("expand-list-toggle");
  if(expandList.classList.contains("expand-list-toggle")) {
    console.log("hejsan");
    document.querySelector(".expand-link").innerHTML = closelinkBtn;
  } else {
    document.querySelector(".expand-link").innerHTML = openlinkBtn;
  }
});