// const projectInfo = document.querySelectorAll(".project__info");
const projectImg = document.querySelectorAll(".project__img");
const projectTitle = document.querySelectorAll(".project__title");
const projectInfo = document.querySelectorAll(".project__info");
const projectInfoClose = document.querySelectorAll(".project__info-close");

const projectTText = document.getElementById("project-title-text");

/* for (let i = 0; i < projectImg.length; i++) {
  projectImg[i].addEventListener("click", function (e) {
    projectInfo[i].classList.add("project__info-reveal");
    projectImg[i].classList.remove("img-hover");
    const projectTitleText = projectTitle[i]
      .querySelector(".project-title-text")
      .cloneNode(true);

    projectInfoClose[i].prepend(projectTitleText);
  });
} */

for (let i = 0; i < projectTitle.length; i++) {
  projectTitle[i].addEventListener("click", function (e) {
    projectInfo[i].classList.add("project__info-reveal");
    projectImg[i].classList.remove("img-hover");
    const projectTitleText = projectTitle[i]
      .querySelector(".project-title-text")
      .cloneNode(true);

    projectInfoClose[i].prepend(projectTitleText);
  });
}

for (let i = 0; i < projectInfoClose.length; i++) {
  projectInfoClose[i].addEventListener("click", function (e) {
    projectInfo[i].classList.remove("project__info-reveal");
    projectImg[i].classList.add("img-hover");
    projectInfoClose[i].removeChild(projectInfoClose[i].firstChild);
  });
}
