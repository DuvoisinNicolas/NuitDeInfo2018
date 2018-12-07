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
    $('#chatContent')
        .append("<p id='userMessage'>" + document.getElementById('chat').value + "</p>")
        .append("<p id='deboroMessage'>" + reponseBot(document.getElementById('chat').value) + "</p>");
}

function reponseBot(message) {
    message = message.toLowerCase();

    if (message.includes("tamer") || message.includes("salo") || message.includes("conna")
        ||  message.includes("cul") ||  message.includes("abruti") ||  message.includes("bite")) {
        return "Si tu me parles encore sur ce ton, je te fork bomb.";
    }
    if ((message.includes("bonjour") || message.includes("salut") || message.includes("wesh"))
        && (message.includes("ca") || message.includes("ça") || message.includes("va"))) {
        return "Bonjour, Utilisateur. Je ne ressens pas de sentiments, je suis un robot.";
    }

    if (message.includes("bonjour") || message.includes("salut") || message.includes("wesh")
        && (message.includes("qui") || message.includes("appelle"))){
        return "Enchanté, je suis deboro !";
    }
    if (message.includes("bonjour") || message.includes("salut") || message.includes("wesh")) {
        return "Enchanté !"
    }

    if (message.includes("ca") || message.includes("ça") || message.includes("va")) {
        return "Ca va et toi ? :)";
    }

    if ( message.includes(":(") || message.includes(":)") ) {
        return ":)";
    }
    if (message.includes("beep")) {
        return "Bip boup !";
    }

    if (message.includes("bip") || message.includes("boop")) {
        return "Bip Bip Bip !!!";
    }

    if (message.includes("wola")) {
        return "Wola parles mieux :o";
    }

    else return "Beep Beep ... :)";

}