<?php session_start();?><!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="styles.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet">
    <script src="/utils.js"></script>

    <title><?php echo $_GET['Titulo']; ?></title>
    <?php require('utilities.php'); ?>
</head>

<body id='<?php echo $_GET['idBody']; ?>'>

<header class='headerAll'>
    <h2>Enquestes Professorat</h2>
</header>