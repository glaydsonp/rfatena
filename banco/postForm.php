<?php

require_once "conexao.php";

$login = $_POST["user"];
$char = $_POST["char"];
$tipo = $_POST["type"];

date_default_timezone_set('America/Sao_Paulo');
$date = date("H:i d/m/Y");

if($login && $char && $tipo){
    $sql = "INSERT INTO `atena-free` (`login`, `personagem`, `tipo`, `data-criacao`) VALUES ('$login', '$char', '$tipo', '$date');";
    $result = $conn->query($sql);
    if($result){
        echo "<script>window.alert('Success! We take up to 48 businness hours to process your request and give you the rewards.')</script>";
        header("Location: ../free.html");
    } else {
        echo "<script>window.alert('Ops!! Something wrong has happened. Contact us via the support form and tell us what happened.')</script>";
        header("Location: ../free.html");
    }
} else {
    echo "<script>window.alert('Ops!! You probably forgot to fill all the fields. In case you did fill, contact us via the support form and tell us what happened.')</script>";
    header("Location: ../free.html");
}