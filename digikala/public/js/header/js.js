var navItem = document.getElementById("nav-item");
const menuContainer = document.getElementById("menu-container");
const menu = document.getElementById("menu");
const titleMenu = document.querySelectorAll(".titleMenu");
const subMenu = document.querySelectorAll(".subMenu");

navItem.addEventListener("mouseover", function () {
  document.getElementById("menu-container").style.display = "flex";
  menu.style.display = "flex";
  subMenu[0].style.display = "flex";
});
navItem.addEventListener("mouseleave", function () {
  menuContainer.style.display = "none";
  menu.style.display = "none";
});

titleMenu.forEach((element, index) => {
  element.addEventListener("mouseover", function () {
    subMenu[index].style.display = "flex";
  });
  element.addEventListener("mouseleave", function () {
    subMenu[index].style.display = "none";
  });
});
