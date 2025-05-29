const express = require('express');
const app = express();
const port = 3000;

// Servir archivos estáticos desde el directorio "public"
app.use(express.static('public'));

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});