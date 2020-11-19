/// hightlight current selected li

// if (!homePage) {
//   const pNavList = document.querySelector(".p-nav--list");
//   pNavList.addEventListener("click", function (e) {
//     if ((e.target.tagName = "A")) {
//       const clicked = e.target;
//       const current = document.getElementsByClassName("active-link");
//       if (current.length > 0) {
//         current[0].classList.remove("active-link");
//       }
//       clicked.classList.add("active-link");
//     }
//   });
// }

/* if (!homePage) {
  const pNavList = document.querySelector(".p-nav--list");
  pNavList.addEventListener("click", function (e) {
    // if ((e.target.tagName = "A")) {
    const clicked = e.target;
    const currentLocation = location.href;
    console.log("currentLOCATION", currentLocation);
    console.log("e.TARGET.HREF", clicked.href);
    // }
  });
} */

/* if (!homePage) {
  const currentLocation = location.href;
  const pNavLink = document.querySelectorAll(".p-nav__link");
  for (let i = 0; i < pNavLink.length; i++) {
    if (pNavLink[i].href === currentLocation) {
      pNavLink[i].classList.add("active-link");
      console.log("pNavLink.href", pNavLink.href);
    }
  }
} */
const homePage = document.querySelector(".main-nav__list");
if (!homePage) {
  const currentLocation = location.href;
  const pNavLink = document.querySelectorAll(".p-nav__link");
  for (let i = 0; i < pNavLink.length; i++) {
    const pNavLinkHref = pNavLink[i].href;
    // console.log("pNavLinkHref", i, pNavLinkHref);
    if (currentLocation == pNavLinkHref) {
      pNavLink[i].classList.add("active-link");
    }
  }
}

// prevent navlinks click from reloading the page
const linksDev = document.querySelectorAll(
  ".p-nav--list li:not(:first-of-type)"
);
for (let i = 0; i < linksDev.length; i++) {
  linksDev[i].addEventListener("click", function (e) {
    e.preventDefault();
  });
}

// console.log("currentLOCATION", currentLocation);
