<?php
   $servidor = "mysql.inf.uct.cl";
   $user     = "claudio_gonzalez";
   $password = "aGss7ynbWccVez49h";
   $basedato = "A2023_claudio_gonzalez";
   
   
$db = mysqli_connect($servidor, $user, $password, $basedato);

   if(!$db) {
         echo "Error de conexión a la BD";
         exit();
   }

?>
