'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button



// custom select variables
// const select = document.querySelector("[data-select]");
// const selectItems = document.querySelectorAll("[data-select-item]");
// const selectValue = document.querySelector("[data-selecct-value]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// // add event in all select items
// for (let i = 0; i < selectItems.length; i++) {
//   selectItems[i].addEventListener("click", function () {

//     let selectedValue = this.innerText.toLowerCase();
//     selectValue.innerText = this.innerText;
//     elementToggleFunc(select);
//     filterFunc(selectedValue);

//   });
// }
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}
// Frontend Technologies
const frontendTechnologies = [
  { name: "HTML5", icon: "./assets/images/tech/html5.svg" },
  { name: "CSS3", icon: "./assets/images/tech/css3.svg" },
  { name: "Tailwind CSS", icon: "./assets/images/tech/tailwindcss.svg" },
  { name: "Bootstrap", icon: "./assets/images/tech/bootstrap.svg" },
  // { name: "JavaScript", icon: "./assets/images/tech/javascript.svg" },
  // { name: "TypeScript", icon: "./assets/images/tech/typescript.svg" },
  { name: "React.js", icon: "./assets/images/tech/react.svg" },
  { name: "Vue.js", icon: "./assets/images/tech/vue.svg" },
];

// Backend Technologies
const backendTechnologies = [
  { name: "JavaScript", icon: "./assets/images/tech/javascript.svg" },
  { name: "Node.js", icon: "./assets/images/tech/nodejs.svg" },
  { name: "Express.js", icon: "./assets/images/tech/express.svg" },
  { name: "TypeScript", icon: "./assets/images/tech/typescript.svg" },
  // { name: "PHP", icon: "./assets/images/tech/php.svg" },
  // { name: "Laravel", icon: "./assets/images/tech/laravel.svg" },
];

// Databases
const databaseTechnologies = [
  { name: "MongoDB", icon: "./assets/images/tech/mongodb.svg" },
  { name: "PostgreSQL", icon: "./assets/images/tech/postgresql.svg" },
  { name: "MySQL", icon: "./assets/images/tech/mysql.svg" },
];

// DevOps & Deployment
const devopsTechnologies = [
  { name: "Git", icon: "./assets/images/tech/git.svg" },
  { name: "GitHub", icon: "./assets/images/tech/github.svg" },
  { name: "AWS", icon: "./assets/images/tech/aws.svg" },
  { name: "NGINX", icon: "./assets/images/tech/nginx.svg" },
  { name: "Apache", icon: "./assets/images/tech/apache.svg" }
];

// Tools & Utilities
const toolsTechnologies = [
  { name: "VS Code", icon: "./assets/images/tech/vscode.svg" },
  { name: "Postman", icon: "./assets/images/tech/postman.svg" },
  { name: "Insomnia", icon: "./assets/images/tech/Insomnia.svg" },
  { name: "Jira", icon: "./assets/images/tech/jira.svg" },
  { name: "Trello", icon: "./assets/images/tech/trello.svg" },
  { name: "Slack", icon: "./assets/images/tech/slack.svg" }
];

function createButtonListWithIcon(buttonNames, containerId) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  buttonNames.forEach((item) => {
    const techItem = document.createElement("div");
    techItem.className = "tech-item";
    
    const icon = document.createElement("img");
    icon.className = "tech-icon";
    icon.src = item.icon;
    icon.alt = `${item.name} icon`;
    
    const name = document.createElement("span");
    name.className = "tech-name";
    name.textContent = item.name;
    
    techItem.appendChild(icon);
    techItem.appendChild(name);
    container.appendChild(techItem);
  });
}
// createButtonListWithIcon(frontendTechnologies, "frontendExpertise");
createButtonListWithIcon(backendTechnologies, "backendExpertise");
createButtonListWithIcon(databaseTechnologies, "databaseExpertise");
createButtonListWithIcon(devopsTechnologies, "devopsExpertise");
createButtonListWithIcon(toolsTechnologies, "toolsExpertise");