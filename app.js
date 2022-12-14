// requiero el modulo express
const express = require ('express');

// le asigno a la variable app los metodos de express
const app = express();

// requiero el modulo path para el ruteo de las paginas
const path = require ('path');

//********************************************** */
// ESTO ES PARA CORRERLO EN FORMA LOCAL

// declaro la variable port y le asigno el puerto de comunicion
// let PORT = 3000

// pongo en recepcion de request
//app.listen (PORT,() => {console.log ('el servidor esta funcionando '+ PORT)} );

//********************************************** */
// ESTO ES PARA EL RENDER
let port = process.env.PORT || 3000;
app.listen (port,() => {console.log ('el servidor esta funcionando '+ port)} );






// para tener acceso a los archivos de contenido NO OLVIDAR DE PONERLO
app.use (express.static('public'));

// direcciono el request y le responde con una vista.
app.get ('/home', (req, res) => res.sendFile (path.join(__dirname + "/views/home.html")));
app.get ('/', (req, res) => res.sendFile (path.join(__dirname + "/views/home.html")));

app.get ('/login', (req, res) => res.sendFile (path.join(__dirname + "/views/login.html")));

app.get ('/register', (req, res) => res.sendFile (path.join(__dirname + "/views/register.html")));
