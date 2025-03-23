const aboutNav = document.getElementById("about-nav");
const projectsNav = document.getElementById("projects-nav");
const skillsNav = document.getElementById("skills-nav");
const careerNav = document.getElementById("career-nav");
const educationNav = document.getElementById("education-nav");
const contactNav = document.getElementById("contact-nav");
const project1 = document.getElementById("projects");
const project2 = document.getElementById("project-2");
const project3 = document.getElementById("project-3");

//Function that handles user clicks in floating navbar
function navHandler(navItem) {
  console.log(navItem.target);
  navItem.preventDefault();
  const targetName = navItem.target.id.substring(
    0,
    navItem.target.id.indexOf("-")
  );
  const target = document.getElementById(targetName);
  target.scrollIntoView({ behavior: "smooth", block: "center" });
}

aboutNav.addEventListener("click", navHandler);
projectsNav.addEventListener("click", navHandler);
skillsNav.addEventListener("click", navHandler);
careerNav.addEventListener("click", navHandler);
educationNav.addEventListener("click", navHandler);
contactNav.addEventListener("click", navHandler);

//Function that handles the gray out and shows the link button when mouse hoovers over project 
function mouseenter(element) {
  element.preventDefault();
  console.log(element.target.id);
  const target = element.target.id;
  $(`head`).append(`<style>#${target}::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    border-radius: 15px;
    opacity: 0.8;
}</style>`);
  document.getElementById(`${target}-button`).style.display = "inline";
}

//Function that handles the removal of gray out and hides the link button when mouse hoovers over project 
function mouseleave(element) {
  element.preventDefault();
  const target = element.target.id;
  document.getElementById(`${target}-button`).style.display = "none";
  $(`head`).append(`<style>#${target}::before{
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(0, 0, 0);
    border-radius: 15px;
    opacity: 0;
}</style>`);
}

project1.addEventListener("mouseenter", mouseenter);
project2.addEventListener("mouseenter", mouseenter);
project3.addEventListener("mouseenter", mouseenter);
project1.addEventListener("mouseleave", mouseleave);
project2.addEventListener("mouseleave", mouseleave);
project3.addEventListener("mouseleave", mouseleave);

//Function that redirect user to correct link when project button is pressed.
function buttonHandler(element) {
  element.preventDefault();
  const target = element.target.id;

  switch (target) {
    case "projects-button":
      window
        .open(
          "https://github.com/raulchavezjr7/fullstack-capstone-project/",
          "_blank"
        )
        .focus();
      break;
    case "project-2-button":
      window
        .open(
          "https://github.com/raulchavezjr7/pollution-neural-network/",
          "_blank"
        )
        .focus();
      break;
    case "project-3-button":
      window.open("https://github.com/raulchavezjr7/", "_blank").focus();
      break;
  }
}

document.getElementById("projects-button").addEventListener("click", buttonHandler);
document.getElementById("project-2-button").addEventListener("click", buttonHandler);
document.getElementById("project-3-button").addEventListener("click", buttonHandler);
