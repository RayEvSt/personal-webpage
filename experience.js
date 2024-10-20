
const collapse = document.getElementsByClassName("collapsible");
let i;

for (i = 0; i < collapse.length; i++) {
  collapse[i].addEventListener("click", function() {
    let content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}