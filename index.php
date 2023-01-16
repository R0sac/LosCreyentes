<?php
    include "log.php"
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
    <script src="script.js"></script>

    <title>Document</title>
</head>
<body>
    <?php
     create_log_file("mylog.txt", "Entrada en index.php");   
    ?>
    <nav id="panel">
            <button id="crearPregunta" class="btnPanelAdmin" onclick="">Crear Pregunta</button>
            <button id="crearEncuesta" class="btnPanelAdmin">Crear Enquesta</button>
            <button id="listarPreguntas" class="btnPanelAdmin">Llistat de Preguntes</button>
            <button id="listarEncuestas" class="btnPanelAdmin">Llistat de Encquestes</button>         
    </nav>
    
    <div id="contenido-crearpregunta"></div>
    <div id="contenido-crearencuesta"></div>
    <div id="contenido-listarpreguntas"></div>
    <div id="contenido-listarencuestas"></div>
    

</body>
</html>