const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(request, response){
    response.sendFile(__dirname+'/index.html');
});

app.post('/', function(request, response){
    console.log(request.body);
    let bodymass = Number(request.body.bodymass);
    let bodyheight = parseFloat(request.body.bodyheight);
    let result = Number(bodymass/(bodyheight*bodyheight)).toFixed(2);
    console.log(`Indeks on: ${result}.`);

    if (result < 19) {
        response.send(
          `Sinu kehamassi indeks on ${result}, sa oled alakaaluline. <br><br>Teatud alakaal iseenesest ei ole tervisele ohtlik, kuid kõikide organismile vajalike toitainete puudus võib põhjustada ohtliku terviserikke.`
        );
      } else if (result > 19 && result < 24.99) {
        response.send(
          `Sinu kehamassi indeks on ${result}, sa oled normaalkaalus. <br><br>Meditsiinilisi põhjuseid kaalu alandamiseks ei ole, kuid soovitame Sul kaalu sellel tervislikul nivool hoida ning analüüsida, kas Sinu toitumine sisaldab kõiki vajalikke aineid piisavalt.`
        );
      } else if (result > 25 && result < 29.99) {
        response.send(
          `Sinu kehamassi indeks on ${result}, sa oled ülekaaluline. <br><br>Sul on oht haigestuda ülekaalust põhjustatud haigustesse nagu diabeet ning südame-veresoonkonna haigused. Soovitame Sul Kaaluabi.ee abil jälgida oma igapäevast toitumist ning langetada kehakaalu.`
        );
      } else {
        response.send(
          `Sinu kehamassi indeks on ${result}, sa oled rasvunud. <br><br>Sul on suur risk haigestuda südame- ja veresoonkonna haigustesse, kõrgesse vererõhku ja diabeeti. Seepärast soovitame Sul tõsiselt oma ülekaalu vähendamisega tegeleda.`
        );}

});

app.listen(8000, function(){
    console.log('Server is running on Port 8000.');
});