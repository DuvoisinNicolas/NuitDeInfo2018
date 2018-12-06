var cpt = 0;

document.addEventListener("DOMContentLoaded", function(event) {
    $(".checkboxJS")
});

function checkBox(checkboxElem) {
    alert("Salut");
    if (checkboxElem.checked) {
        cpt++;
    }
    else {
        cpt--;
    }
    if (cpt === 4) {
        alert("Salut");
    }
}
