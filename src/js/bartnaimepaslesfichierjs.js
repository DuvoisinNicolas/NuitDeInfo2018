$(document).ready(function(){
    var $cpt = 0;
    $('#chatBox').hide ();
    $('#close').hide();
    $('#theFlyingDiv').click(function(){
        if ($cpt === 0) {
            $('#close').show();
            $('#chatBox').show();
            $('#theFlyingDiv').css('padding-left', '1%');
            $('#theFlyingDiv').css('padding-right', '1%');
            ++$cpt;
        }
        else {
            $cpt = 0;
        }
    });
    $('#close').click(function(){
        $('#chatBox').hide();
        $('#close').hide();
        $('#theFlyingDiv').css('padding-left', '7%');
        $('#theFlyingDiv').css('padding-right', '7%');
    });
});

function envoyerMessage() {
    alert("lol");
    $('#chatContent')
        .append("<p id='userMessage'>" + document.getElementById('chat').value + "</p>")
        .append("<p id='deboroMessage'>" + reponseBot(document.getElementById('chat').value) + '</p>');
}

function reponseBot(message) {
    message = message.toLowerCase();
    if (message.contains("bonjour") || message.contains("salut") || message.contains("wesh")) {
        return "Enchanté, je suis Deboro";
    }
}