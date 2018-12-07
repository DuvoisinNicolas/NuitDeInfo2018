var cpt = 0;

function checkBox(checkboxElem) {
    (checkboxElem.checked ? cpt++ : cpt--);
    if (cpt === 4) {
        $('#fusee').show();
        $('#fusee').animate({
            top: "-200px",
        },"slow");
    }

        // Envole toi petit oiseau}
}

