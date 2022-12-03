// requiero el modulo express
const express = require ('express');

// le asigno a la variable app los metodos de express
const app = express();

// requiero el modulo path para el ruteo de las paginas
const path = require ('path');


// declaro la variable port y le asigno el puerto de comunicion
let PORT = 3030

// pongo en recepcion de request
app.listen (PORT, console.log ('el servidor esta funcionando') );

// para tener acceso a los archivos de contenido NO OLVIDAR DE PONERLO
app.use (express.static('public'));

// direcciono el request y le responde con una vista.
app.get ('/home', (req, res) => res.sendFile (path.join(__dirname + "/views/home.html")));
app.get ('/', (req, res) => res.sendFile (path.join(__dirname + "/views/home.html")));