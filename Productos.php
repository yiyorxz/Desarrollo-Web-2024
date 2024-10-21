<?php
echo '<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tienda de Poleras</title>
    <link rel="stylesheet" href="css/styleP.css">
</head>
<body>

    <!-- Encabezado -->
    <header class="head">
        <div class="logo">
            <a href="index.html">Mi Tienda</a>
        </div>
        <nav class="navbar">
            <a href="#productos">Productos</a>
            <a href="#about">Sobre Nosotros</a>
            <a href="#contacto">Contacto</a>
        </nav>
    </header>

    <!-- Sección de Banner -->
    <section class="header">
        <div class="content">
            <h1 class="title">Bienvenidos a Nuestra Tienda</h1>
            <p>Descubre las mejores poleras de equipos de fútbol.</p>
            <div class="btn-home">
                <a href="#productos" class="btn">Ver Productos</a>
            </div>
        </div>
    </section>

    <!-- Sección de Productos -->
    <section id="productos" class="sau">
        <h2 class="title">Nuestros Productos</h2>
        <div class="box-container">';
        include 'php/consulta.php';
echo '  </div>
    </section>

    <!-- Pie de página -->
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-section">
                <h4>Enlaces Rápidos</h4>
                <ul>
                    <li><a href="#productos">Productos</a></li>
                    <li><a href="#about">Sobre Nosotros</a></li>
                    <li><a href="#contacto">Contacto</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h4>Síguenos</h4>
                <a href="#">Facebook</a>
                <a href="#">Instagram</a>
            </div>
        </div>
        <div class="footer-copy">
            <p>&copy; 2024 Mi Tienda. Todos los derechos reservados.</p>
        </div>
    </footer>

</body>
</html>';
?>
