//* select all btns

// const navLinks = document.querySelectorAll("li:not(:first-of-type) .p-nav__link");

const dataLinks = document.querySelectorAll("[data-target]");
const pNavLinks = document.querySelectorAll("li:not(:first-of-type) .p-nav__link");

console.log("dataLinks", dataLinks);
console.log("pNavLinks", pNavLinks);

const mainNavLink = document.querySelectorAll("li:not(:first-of-type) .main-nav__link");

const currLoc = location.href;
// console.log(currLoc)
// console.log(mainNavLink)

dataLinks.forEach(function (link) {
  link.addEventListener("click", (e) => {
    console.log("clicked");
    console.log(currLoc);
  });
});

for (let i = 0; i < pNavLinks; i++) {
  pNavLinks[i].addEventListener("click", (e)=>{
    e.preventDefault()
    console.log(e.target)
  } )
}
