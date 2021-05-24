<?php
    /*******************************************************
        Inserisce nel database il post da pubblicare 
    ********************************************************/

# SPOTIFY   f64c2c9e08e7499e857c310755c78882                168f0e4417d94897bb301c2545a80404
# GIPHY     kF9AykOLc974KKCGjlH8C8FKAUuuLFvp
# YOUTUBE   AIzaSyB_1fgNfusGpVT_Bvxd-4Zc-2nsBITCbEc
# UNSPLASH  GoA29IDvsUlRG4Kte2RdUYGc6c8mkke4GxDmqgwZfWE     cNc5w2WU-NQ9FF4OXjA5w9fSk6QOUC-MQKrNXi2xssw
# GATTO RANDOM

    require_once 'auth.php';
    if (!$userid = checkAuth()) exit;

    spotify();

    function spotify() {
        GLOBAL $dbconfig, $userid;

        $conn = mysqli_connect($dbconfig['host'], $dbconfig['user'], $dbconfig['password'], $dbconfig['name']);
        
        # Costruisco la query
        $userid = mysqli_real_escape_string($conn, $userid);
        $id = mysqli_real_escape_string($conn, $_POST['id']);
        $title = mysqli_real_escape_string($conn, $_POST['title']);
        $artist = mysqli_real_escape_string($conn, $_POST['artist']);
        $duration = mysqli_real_escape_string($conn, $_POST['duration']);
        $popularity = mysqli_real_escape_string($conn, $_POST['popularity']);
        $image = mysqli_real_escape_string($conn, $_POST['image']);

        # Eseguo
        $query = "INSERT INTO songs(user, content) VALUES('.$userid.', JSON_OBJECT('id', '$id', 'title', '$title', 'artist', '$artist', 'duration', '$duration', 'popularity', '$popularity', 'image', '$image'))";

        # Se corretta, ritorna un JSON con {ok: true}
        if(mysqli_query($conn, $query) or die(mysqli_error($conn))) {
            echo json_encode(array('ok' => true));
            exit;
        }

        mysqli_close($conn);
        echo json_encode(array('ok' => false));
    }