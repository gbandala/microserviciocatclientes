const Customer = require('../models/customer');

exports.customersInq = function (req, res) {
    Customer.find({},{_id:0,id_cliente:1,cliente:1,direccion:1,telefono:1},function (err, doc) {
        if (err) return console.log(err);
        console.log("Clientes encontrados...");
        console.log(doc);
        res.send(doc);
    }).sort({cliente:1});
};

exports.customerAdd = (req, res) => {
    client = new  Customer({
        id_cliente: req.body.id_cliente,
        cliente: req.body.cliente,
        direccion: req.body.direccion,
        telefono: req.body.telefono
        
    })
    console.log(client);
    client.save(function (err, client) {
        if (err) return console.error(err);
        // console.log(tour.tourName + " insertado en la coleccion tours...");
        res.send(client.cliente + " insertado en la coleccion ...");
    });
}



