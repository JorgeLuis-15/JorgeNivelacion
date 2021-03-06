const express = require('express');
var bodyParser = require('body-parser')
const router = express.Router();


var urlencodedParser = bodyParser.urlencoded({ extended: true });

var productos=[
  {
      "id":1,
      "image":"image1.png",
      "precio":1500,
      "title":"Playera Seleccion de México"
  },
  {
      "id":2,
      "image":"image2.png",
      "precio":1400,
      "title":"Playera Seleccion de Uruguay"
  },
  {
      "id":3,
      "image":"image3.png",
      "precio":1550,
      "title":"Playera Seleccion de Inglaterra"
  },
  {
      "id":4,
      "image":"image4.png",
      "precio":1200,
      "title":"Playera Seleccion de Holanda"
  },
  {
      "id":5,
      "image":"image5.png",
      "precio":1350,
      "title":"Playera Seleccion de Argentina"
  },
  {
      "id":6,
      "image":"image6.png",
      "precio":1400,
      "title":"Playera Seleccion de Alemania"
  },
  {
      "id":7,
      "image":"image7.png",
      "precio":1400,
      "title":"Playera Seleccion de Francia"
  },
  {
      "id":8,
      "image":"image8.png",
      "precio":1300,
      "title":"Playera Seleccion de Brasil"
  },
  

];
var pedidos =[];

router.get('/productos/', (req, res) => {
    res.json(productos);
});
router.get('/pedido/', (req, res) => {
  res.status(200).json(pedidos);
});


router.post('/pedido/guardaPedido', urlencodedParser, (req, res) => {

  pedidos.push(req.body);
  res.status(201).send("REgistro creado")
  });



module.exports = router;
