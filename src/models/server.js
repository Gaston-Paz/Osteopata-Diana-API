const express = require('express');
const cors = require('cors');
// const https = require('https');
// const fs = require('fs');
// const privateKey = fs.readFileSync('ruta','utf8');
// const certificate = fs.readFileSync('ruta','utf8');
// const ca = fs.readFileSync('ruta','utf8');
// const credentials = { key: privateKey, cert: certificate, ca: ca };

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        //this.httpsServer = https.createServer(credentials,this.app);
        this.path = {
            paciente: '/api/pacientes',
            antecedente: '/api/antecedentes',
        }

        //Middlewares
        this.middlewares();

        //Rutas de mi app
        this.routes();
    }

    routes(){
        this.app.use(this.path.paciente, require('../routes/paciente'));
        this.app.use(this.path.antecedente, require('../routes/antecedente'));
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log('Servidor corriento en puerto: ', this.port);
        });
        // this.httpsServer.listen(443, () => {
        //     console.log('Servidor corriento en puerto: 443');
        // });
    }

    middlewares(){

        //CORS
        this.app.use(cors());

        //LECTURA Y PARSEO DEL BODY
        this.app.use(express.json());

        //DIRECTORIO PUBLICO
        this.app.use(express.static('public'));
    }

}

module.exports = Server;