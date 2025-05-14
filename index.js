const express = require("express"); // Importamos el paquete express
const app = express(); // Inciializar servidor con express
const port = 3000; // Puerto a usar por el servidor


app.use(express.json()); // Middleware para parsear el body de las peticiones
app.use(express.static('public')); // Middleware para servir archivos estáticos de front. CSS,JS,Assets

// Configuración de vistas PUG - Motor de plantillas
app.set('view engine', 'pug');
app.set('views','./views');


// GET http://localhost:3000/ --> Ruta /. La principal
app.get("/", (req, res) => {
  // req: request, res: response
  res.send("Hello my friend! Welcome to PUG");
});


app.get("/home", (req,res) => {
  res.render("home");
})

app.get("/contact", (req, res) => {
  res.render("contact");
})

app.get("/about", (req, res) => {
  res.render("about");
})


app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
