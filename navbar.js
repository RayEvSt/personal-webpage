const toddlerface = document.querySelector("nav img");

/* navigation bar image */
toddlerface.addEventListener('mouseover', function() {
    toddlerface.classList.toggle("toddlerfaceactive");
    toddlerface.classList.toggle("toddlerface");
});

toddlerface.addEventListener('mouseout', function() {
    toddlerface.classList.toggle("toddlerfaceactive");
    toddlerface.classList.toggle("toddlerface");
});
