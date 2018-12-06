var cpt = 0;
$("checkboxJS").change(function () {
    alert("Salut");
    if(this.checked) {
        cpt++;
    }
    else {
        cpt--;
    }
    if(cpt === 4) {
        alert("Salut");
    }
});