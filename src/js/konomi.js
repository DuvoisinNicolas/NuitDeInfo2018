
if ( window.addEventListener ) {
    var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";
    window.addEventListener("keydown", function(e){
        kkeys.push( e.keyCode );
        if ( kkeys.toString().indexOf( konami ) >= 0 ) {
            alert('Its Noot Time !!');
            var img = new Image();
            img.src='src/resources/crewstillant.jpg';
            img.onmouseover= window.open("http://nootnoot.net", "NOOT NOOT", "width=500, height=500");
            img.onmouseout= window.open("http://nootnoot.net", "NOOT NOOT", "width=500, height=500");

        }
    }, true);
}