var cpt = 0;

function checkBox(checkboxElem) {
    (checkboxElem.checked ? cpt++ : cpt--);
    if (cpt === 4)
        alert("La fusée s'envole !");
    $("")
}
