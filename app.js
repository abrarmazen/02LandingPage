//dcleare global variable
//select all section by using Array.from
let components = Array.from(document.querySelectorAll("section"));
//get the id of unordwe list
let roster = document.getElementById("navbar__list");
// method creates an offscreen node.
let conteiner = new DocumentFragment();
//function to  build navigation bar
function buildNavBar() {
  //map use to create new array
  components.map((section) => {
    //create a new node <> liste item
    liIt = document.createElement("li");
    //build the list item contain the section inner html
    liIt.innerHTML = `<a href = '#${section.id}' data-nav="${section.id}" class = 'menu__link'>${section.dataset.nav}</a>`;
    liIt.addEventListener("click", (scr) => {
      scr.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
    conteiner.appendChild(liIt);
  });
  //append document fragment to unorder list
  roster.appendChild(conteiner);
}
//call function
buildNavBar();


//function to put active class and active link
classIsActive = () => {
  //array to get all section
  components = Array.from(document.querySelectorAll("section"));
  //use map to det new array section
  components.map((section) => {
    //use getBoundingclintrect to determine te size
    partView = section.getBoundingClientRect();
    if (partView.top >= 0 && partView.top < 290) {
      //use variable attach to get link 
      let attach = document.querySelector(`a[href='#${section.id}']`);
      console.log(attach);
      //use for each to loop for all section
      components.forEach((component) => {
        attach  = document.querySelector(`a[href='#${component.id}']`);
        if (
          //check if section contain active class or link
          component.classList.contains("your-active-class") ||
          attach.classList.contains("activeLinlk")
        ) {
          component.classList.remove("your-active-class");
          attach.classList.add("activeLink");
        } else {
          attach.classList.remove("activeLink");
        }
      });

      section.classList.add("your-active-class");
    }
    console.log(components);
  });
};
 console.log(classIsActive());
window.addEventListener("scroll", classIsActive);

// to make project responsive in all screen size
let threeDashIcon = document.querySelector(".btu-bar");
console.log(threeDashIcon);
let itemIcon = document.querySelector("#navbar__list");
console.log(itemIcon);
threeDashIcon.addEventListener("click", () => {
  itemIcon.classList.toggle("your-active-class");
});
