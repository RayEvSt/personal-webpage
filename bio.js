// You can replace the contents of this file with your own JavaScript code.

// For a challenge, why not try adding the current year to the footer?
// It's currently hard-coded, but this way it would update automatically.
// You can use new Date().getFullYear() to get the current year.

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getFullYear

console.log("Hello, World!");

//selecting all elements needed
const growingup = document.querySelector('#growingup');
const intro = document.querySelector("#intro p")

const interestsimg = document.querySelector("#interestsimg");
const skillsimg =  document.querySelector("#skillsimg");
const kittyimg =  document.querySelector("#kittyimg");

const walking = document.querySelector(".interestslist :nth-child(1)");
const climbing = document.querySelector(".interestslist :nth-child(2)");
const videogames = document.querySelector(".interestslist :nth-child(3)");
const tabletoprpgs = document.querySelector(".interestslist :nth-child(4)");

const cooking = document.querySelector(".skillslist :nth-child(1)")
const coding = document.querySelector(".skillslist :nth-child(2)")
const buckets = document.querySelector(".skillslist :nth-child(3)")
const photography = document.querySelector(".skillslist :nth-child(4)")

const kitty = document.querySelector(".kittylist :nth-child(1)")
const kitty2 = document.querySelector(".kittylist :nth-child(2)")
const bitingme = document.querySelector(".kittylist :nth-child(3)")


//command slash to comment a line, togglable




// bio page interests and skills mouseover event
walking.addEventListener("mouseover", function() {
    interestsimg.src = "images/hiking.jpg";
    interestsimg.alt = "Ray walking at night";
});

climbing.addEventListener("mouseover", function() {
    interestsimg.src = "images/climbing.jpg";
    interestsimg.alt = "Ray climbing";
});

videogames.addEventListener("mouseover", function() {
    interestsimg.src = "images/games.jpg";
    interestsimg.alt = "The video game Baldurs Gate 3 experiencing a graphical bug";
});

tabletoprpgs.addEventListener("mouseover", function() {
    interestsimg.src = "images/dice.jpeg";
    interestsimg.alt = "A set of seven polyhedral dice";
});

cooking.addEventListener("mouseover", function() {
    skillsimg.src = "images/stirfry.jpg";
    skillsimg.alt = "A stir fry cooked by ray";
});

coding.addEventListener("mouseover", function() {
    skillsimg.src = "images/coding.jpeg";
    skillsimg.alt = "a stock image of some code";
});

buckets.addEventListener("mouseover", function() {
    skillsimg.src = "images/manuallabour.jpg";
    skillsimg.alt = "Ray as a toddler holding two buckets";
});

photography.addEventListener("mouseover", function() {
    skillsimg.src = "images/stonehenge3.jpg";
    skillsimg.alt = "an image of stone henge, mostly obscured by Rays face";
});

kitty.addEventListener("mouseover", function() {
    kittyimg.src = "images/sevenanddagang.jpg";
    kittyimg.alt = "A black and white cat surrounded by plush toysets";
});

kitty2.addEventListener("mouseover", function() {
    kittyimg.src = "images/eepypurple.jpg";
    kittyimg.alt = "A black and white cat sleeping on a blanket";
});

bitingme.addEventListener("mouseover", function() {
    kittyimg.src = "images/bite.jpg";
    kittyimg.alt = "A black and white cat biting me";
});


/*bio page growing up image*/
let growcount = 0;
growingup.addEventListener('click', function() {
    if (growcount == 0) {
        growcount+=1
        growingup.src = "images/bathtime.jpg"
        growingup.alt = "Ray as a toddler, sitting in a washing up bowl"
        intro.innerHTML = intro.innerHTML + "<br> bath time text."
    } else if (growcount == 1) {
        growcount+=1
        growingup.src = "images/manuallabour.jpg"
        growingup.alt = "Toddler Ray holding two buckets and spades"
        intro.innerHTML = intro.innerHTML + "<br> got two buckets now."
    } else if (growcount == 2) {
        growcount+=1
        growingup.src = "images/tpose.jpg"
        growingup.alt = "Ray as a small child, T posing in a field"
        intro.innerHTML = intro.innerHTML + "<br> learned how to T pose."
    } else if (growcount == 3) {
        growcount+=1
        growingup.src = "images/firstdayofschool.jpg"
        growingup.alt = "Ray wearing school uniform"
        intro.innerHTML = intro.innerHTML + "<br> First day of school!"
    } else if (growcount == 4) {
        growcount +=1
        growingup.src = "images/merain.jpg"
        growingup.alt = "Ray caught in the rain"
        intro.innerHTML = intro.innerHTML + "<br> done baking, fully risen."
    } else {
        /* do nothing */
    }
});
