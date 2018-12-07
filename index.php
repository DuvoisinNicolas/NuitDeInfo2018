<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="css/cssincroyable.css"/>
    <link rel="icon" href="https://image.noelshack.com/fichiers/2018/49/5/1544143799-crewstillant.jpg" type="image/jpg" sizes="16x16">
    <script src="src/js/fusee.js"></script>
    <script src="src/js/konomi.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="src/js/bartnaimepaslesfichierjs.js"></script>
</head>
<body>
<div class="header">
    <img src="https://image.noelshack.com/fichiers/2018/49/5/1544143798-namib.jpg" alt="Va mourir !">
</div>
<h2 id="titre">121 Jours sur Namib</h2>
<ul>
    <li><a onclick="ajouterMessageChangerDePage()">La mission</a></li>
    <li><a onclick="ajouterMessageChangerDePage()">Postuler</a></li>
    <li><a onclick="ajouterMessageChangerDePage()">Description</a></li>
    <li><a onclick="ajouterMessageChangerDePage()">Connexion</a></li>
</ul>
<p>Salut voilà le super site</p>
<table>
    <td class = "checklistc">
        <div id="checklist">
            <input type="checkbox" class="checkboxJS" onchange="checkBox(this)"/>Bien penser à se brosser les dents<br/>
            <input type="checkbox" class="checkboxJS" onchange="checkBox(this)"/>Salut a tous j'ai la flemme de réfléchir<br/>
            <input type="checkbox" class="checkboxJS" onchange="checkBox(this)"/>Deborah veut pas faire de css lul<br/>
            <input type="checkbox" class="checkboxJS" onchange="checkBox(this)"/>Bon 4 ça suffira ?<br/>
        </div>
    </td>

    <td>
        <p id="rightText">LOREM IPSUM LOL :D</p>
    </td>

</table>


<div id="theFlyingDiv">
    <div id="pourFaireJoli">
        Assistance
        <p id="close">x</p>
    </div>
    <div id="chatBox">
        <div id="chatContent">
        </div>
        <div id="formDeValid">
            <input type="text" id="chat"/>
            <input value="Envoyer" type="submit" onclick="envoyerMessage()"/>
        </div>
    </div>
</div>
<img src="https://image.noelshack.com/fichiers/2018/49/5/1544143798-fusee.png" id="fusee" alt="fusee" style="display:none"/>

</body>
</html>