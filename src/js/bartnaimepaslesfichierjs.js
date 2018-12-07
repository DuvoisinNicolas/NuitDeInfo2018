var cptChangementPage = 0;
var tsun = false;
var cptTsun = 0;
var $cpt = 0;
var audio = new Audio('src/resources/sonIgnoble.mp3');

$(document).ready(function(){
    $(document).keypress(function (e) {
        var keycode = (e.keyCode ? e.keyCode : e.which());
        if (keycode == '13') {
            envoyerMessage();
        }
    });
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

function oskur() {
    audio.play();
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
        oskur();
        $('#chatContent')
            .append("<p id='deboroMessage'>Tu penses vraiment avoir le droit de consulter d'autres pages ?</p>");
    }
    if (cptChangementPage === 1) {
        oskur();
        $('#chatContent')
        .append("<p id='deboroMessage'>Tu m'abandonnes c'est ça ?</p>");
    }
    if (cptChangementPage === 2) {
        oskur();
        $('#chatContent')
            .append("<p id='deboroMessage'>C'est moi qui commande ici.</p>");
    }

    if (cptChangementPage === 3) {
        oskur();
        $('#chatContent')
            .append("<p id='deboroMessage'>Tu aimes le son des messages ?</p>");
    }

    if (cptChangementPage === 4) {
        oskur();
        $('#chatContent')
            .append("<p id='deboroMessage'>Tu as gagné, je ne t'adresserais plus la parole</p>");
        tsun = true;
    }

    cptChangementPage++;
}

function reponseBot(message) {
    message = message.toLowerCase();
    oskur();
    if (tsun === false) {

        if (message.includes("c'est facile")) {
            return "Tu connais Vincent Risch ? :o";
        }
        if (message.includes("¯\\_(ツ)_/¯")) {
            return "¯\\_(ツ)_/¯";
        }

        if (message.includes("non")) {
            return ":(";
        }

        if(message.includes("oui") || message.includes("ouais") || message.includes("ok") || message.includes("ça marche")) {
            return ":)";
        }
        if (message.charAt(0) === 's' && message.charAt(1) === 'u' && message.charAt(2) === 'd' && message.charAt(3) === 'o' &&
            message.charAt(4) === ' ' && message.charAt(5) === '?' && message.length > 6) {
            message = message.substr(6);
            var message2 = message.replace(' ','_');
            return "Sudo ... Bon tiens le lien direct T_T : <a target='_blank' href='https://fr.wikipedia.org/wiki/" + message2 + "'>" + message + "</a>";
        }

        if (message.charAt(0) === '?' && message.length > 1) {
            message = message.substr(1);
            return "Et bien débrouille toi : <a target='_blank' href='http://lmgtfy.com/?s=d&q=!w+" + message + "'>" + message + "</a>";
        }

        if (message.includes("météo") || message.includes("meteo")) {
            return "Perso, j'ai pas froid. Au pire débrouille toi <a href='https://www.lachainemeteo.com/meteo-monde/pays-122/previsions-meteo-namibie-aujourdhui'>Meteo Namib</a>";
        }

        if (message.includes("tamer") || message.includes("salo") || message.includes("conna") || message.includes("pute")
            || message.includes("cul") || message.includes("abruti") || message.includes("bite") || message.includes("fdp")) {
            return "Si tu me parles encore sur ce ton, je te fork bomb.";
        }
        if ((message.includes("bonjour") || message.includes("yo")|| message.includes("salut") || message.includes("kikou") || message.includes("wesh"))
            && (message.includes("ca ") || message.includes("ça ") || message.includes(" va "))) {
            return "Bonjour, Utilisateur. Je ne ressens pas de sentiments, je suis un robot.";
        }

        if (message.includes("excuse") || message.includes("pardon") || message.includes("dsl") || message.includes("désolé")) {
            return "Dieu ne pardonne pas.";
        }
        if (message.includes("bonjour") || message.includes("salut") || message.includes("yo") || message.includes("wesh")
            && (message.includes(" qui ") || message.includes("appelle"))) {
            return "Enchantée, je suis deboro.";
        }
        if (message.includes("bonjour") || message.includes("salut") || message.includes("yo") || message.includes("wesh")) {
            return "Enchantée."
        }

        if ((message.includes("ca ") || message.includes("ça ") || message.includes("va ")) && message.includes("?")) {
            return "Ca va et toi ?";
        }

        if (message.includes("patate ")) {
            return "C'est bon les patates ! ";
        }

        if (message.includes("blague")) {
            return "J'ai pas le temps pour ces conneries.";
        }

        if (message.includes("peux-tu")) {
            return "Je peux tout, mais tu ne peux rien :)";
        }

        if (message.includes('je cherche')) {
            var start_index = message.search("je cherche");
            var recherche = message.substring(start_index+"je cherche".length, message.length);
            return "Et bien débrouille toi : <a target='_blank' href='http://lmgtfy.com/?s=d&q=!w+" + recherche + "'>" + recherche + "</a>";
        }

        if (message.includes('je recherche')) {
            var start_index = message.search("je recherche");
            var recherche = message.substring(start_index+"je recherche".length, message.length);
            return "Et bien débrouille toi : <a target='_blank' href='http://lmgtfy.com/?s=d&q=!w+" + recherche + "'>" + recherche + "</a>";
        }

        if (message.includes("ptdr") || message.includes("lol") || message.includes("mdr")) {
            return "xptdr de rire . Espèce de kikoo."
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