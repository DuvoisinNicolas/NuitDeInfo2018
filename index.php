<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/html">
<head>
    <meta charset="utf-8"/>
    <link rel="stylesheet" type="text/css" href="css/cssincroyable.css"/>
    <link rel="icon" href="https://image.noelshack.com/fichiers/2018/49/5/1544143799-crewstillant.jpg" type="image/jpg" sizes="16x16">
    <script src="src/js/fusee.js"></script>
    <script src="src/js/konomi.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script>
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
    </script>
</head>
<body>
<div class="header">
    <img src="https://image.noelshack.com/fichiers/2018/49/5/1544143798-namib.jpg" alt="Va mourir !">
</div>
    <h2 id="titre">121 Jours sur Namib</h2>
    <ul>
        <li><a>La mission</a></li>
        <li><a>Postuler</a></li>
        <li><a>Description</a></li>
        <li><a>Connexion</a></li>
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
        assistance
        <p id="close">x</p>
    </div>
    <div id="chatBox">
        Ut ullamcorper blandit mi, at egestas dui vehicula vitae. Nulla ullamcorper semper orci, vel finibus mi. Fusce lobortis dui in tortor hendrerit vulputate. Aenean eleifend efficitur enim, nec ultrices ante mattis vitae. Curabitur nec massa nisi. Curabitur vestibulum, nibh nec mollis venenatis, mi turpis elementum quam, convallis aliquam nunc magna eu turpis. Donec maximus id mi sed tincidunt. Duis elementum ultricies ante nec volutpat. Cras eget vehicula urna. Aliquam nec sapien nibh. Cras dapibus magna sed luctus varius. Nullam eleifend suscipit nisl. Fusce in elit tincidunt, vestibulum quam vel, laoreet ipsum. Pellentesque non posuere eros. Sed non ligula metus. Integer blandit augue lectus, non cursus diam vestibulum eleifend.
        <div id="formDeValid">
            <input type="text" id="chat"/>
            <input type="submit"/>
        </div>
    </div>
</div>
    <img src="https://image.noelshack.com/fichiers/2018/49/5/1544143798-fusee.png" id="fusee" alt="fusee" style="display:none"/>

</body>
</html>