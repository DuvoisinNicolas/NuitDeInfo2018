var cpt = 0;

$(".checkboxJS").change(function () {
    if(this.checked) {
        cpt++;
    }
    else {
        cpt--;
    }
});