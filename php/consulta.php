<?php
include 'Conex.inc';
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


// Verificar si la conexión fue exitosa
if ($db->connect_error) {
    die("Error de conexión a la BD: " . $db->connect_error);
}

// Consulta para obtener los productos de la tabla "Productos"
$sql = "SELECT nombre, descripcion, imagen, precio FROM Productos";
$result = $db->query($sql);

// Verificar si la consulta devolvió resultados
if ($result && $result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo '<div class="box">';
        
        if (!empty($row["imagen"])) {
            echo '<img src="' . $row["imagen"] . '" alt="' . $row["nombre"] . '" class="product-image">';
        } else {
            echo '<img src="image/banner.jpg" alt="Imagen por defecto" class="product-image">';
        }

        echo '<h3>' . $row["nombre"] . '</h3>';
        echo '<p>' . $row["descripcion"] . '</p>';
        echo '<p><strong>Precio: $' . number_format($row["precio"], 2) . '</strong></p>';
        echo '</div>';
    }
} else {
    echo "No hay productos disponibles.";
}

// Cerrar la conexión
$db->close();
?>
