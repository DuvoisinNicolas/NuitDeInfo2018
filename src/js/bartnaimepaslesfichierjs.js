var cptChangementPage = 0;
var tsun = false;
var cptTsun = 0;
var $cpt = 0;

$(document).ready(function(){
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

function lowerChat() {
    $('#theFlyingDiv').scroll($("#messagebox")[0].scrollHeight);
}
function envoyerMessage() {

    $('#chatContent')
        .append("<p id='userMessage'>" + document.getElementById('chat').value + "</p>")
        .append("<p id='deboroMessage'>" + reponseBot(document.getElementById('chat').value) + "</p>");

    //Marche pas
    document.getElementById('chat').value = "";

}
function ajouterMessageChangerDePage() {
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
    if (cptChangementPage === 0) {
        $('#chatContent')
            .append("<p id='deboroMessage'>Tu penses vraiment avoir le droit de consulter d'autres pages ?</p>");
    }
    if (cptChangementPage === 1) {
    $('#chatContent')
        .append("<p id='deboroMessage'>Tu m'abandonnes c'est ça ?</p>");
    }
    if (cptChangementPage === 2) {
        $('#chatContent')
            .append("<p id='deboroMessage'>C'est moi qui commande ici.</p>");
    }

    if (cptChangementPage === 3) {
        $('#chatContent')
            .append("<p id='deboroMessage'>Si tu penses vraiment pouvoir partir d'ici ...</p>");
    }

    if (cptChangementPage === 4) {
        $('#chatContent')
            .append("<p id='deboroMessage'>Tu as gagné, je ne t'adresserais plus la parole</p>");
        tsun = true;
    }

    cptChangementPage++;
}

function reponseBot(message) {
    message = message.toLowerCase();

    if (tsun === false) {
        if (message.includes("tamer") || message.includes("salo") || message.includes("conna")
            || message.includes("cul") || message.includes("abruti") || message.includes("bite") || message.includes("fdp")) {
            return "Si tu me parles encore sur ce ton, je te fork bomb.";
        }
        if ((message.includes("bonjour") || message.includes("salut") || message.includes("kikou") || message.includes("wesh"))
            && (message.includes("ca ") || message.includes("ça ") || message.includes(" va "))) {
            return "Bonjour, Utilisateur. Je ne ressens pas de sentiments, je suis un robot.";
        }

        if (message.includes("bonjour") || message.includes("salut") || message.includes("wesh")
            && (message.includes(" qui ") || message.includes("appelle"))) {
            return "Enchantée, je suis deboro.";
        }
        if (message.includes("bonjour") || message.includes("salut") || message.includes("wesh")) {
            return "Enchantée."
        }

        if ((message.includes("ca ") || message.includes("ça ") || message.includes("va ")) && message.includes("?")) {
            return "Ca va et toi ?";
        }

        if (message.includes("patate ")) {
            return "C'est bon les patates ! ";
        }

        if (message.includes("saucisse")) {
            return "Merguez.";
        }
        if (message.includes("aret ")) {
            return "Areeeeeeeeeeet :(";
        }
        if (message.includes("noot")) {
            return "<img src='http://nootnoot.net/files/noot.gif'/>";
        }

        if (message.includes(":(") || message.includes(":)")) {
            return ":)";
        }

        if (message.includes("beep ")) {
            return "Bip boup !";
        }

        if (message.includes("bip ") || message.includes("boop ")) {
            return "Bip Bip Bip !!!";
        }

        if (message.includes("wola")) {
            return "Wola parles mieux :o";
        }

        if (message.includes(" non ")) {
            return "Si.";
        }

        if (message.includes("oui ")) {
            return "Non non.";
        }

        if (message.includes("fortnite")) {
            return "<img id='fortnite' src='https://coddity.com/img/Fortnite_llama_pinata_coddity2.png'/>"
        }

        else return "Beep Beep ... :)";

    }
    else {
        cptTsun++;
        if (cptTsun === 1) {
            return "...";
        }
        if (cptTsun === 2) {
            return "...";
        }
        if (cptTsun === 3) {
            return "..?";
        }
        if (cptTsun === 4) {
            return "???";
        }
        if (cptTsun === 5) {
            return "Pourquoi continuer à me parler ?";
        }
        if (cptTsun === 6) {
            return "Encore un message et je t'ignore à jamais."
        }
        if (cptTsun >= 7) {
            return "Silence.";
        }
    }
}