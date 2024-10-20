const growingup = document.querySelector('#growingup');


/*bio page growing up image*/
let growcount = 0;
growingup.addEventListener('click', function() {
    if (growcount == 0) {
        growcount+=1
        growingup.src = "images/bathtime.jpg"
        growingup.alt = "Ray as a toddler, sitting in a washing up bowl"
    } else if (growcount == 1) {
        growcount+=1
        growingup.src = "images/manuallabour.jpg"
        growingup.alt = "Toddler Ray holding two buckets and spades"
    } else if (growcount == 2) {
        growcount+=1
        growingup.src = "images/tpose.jpg"
        growingup.alt = "Ray as a small child, T posing in a field"
    } else if (growcount == 3) {
        growcount+=1
        growingup.src = "images/firstdayofschool.jpg"
        growingup.alt = "Ray wearing school uniform"
    } else if (growcount == 4) {
        growingup.src = "images/merain.jpg"
        growingup.alt = "Ray caught in the rain"
    } else {
        /* do nothing */
    }
});