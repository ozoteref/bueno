var cardleft;

fetch("http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    cardleft = jsonData;

    const option = {year: 'numeric', mounth:'short', day:'numeric'}; 

    var dateCarrusel = cardleft.data[7].created;
    building = new Date(dateCarrusel*1000);
    buildingString = building.toLocaleDateString('es-MX',option);
    
    var dateCarrusel = cardleft.data[8].created;
    building = new Date(dateCarrusel*1000);
    buildingString = building.toLocaleDateString('es-MX',option);
    
    var dateCarrusel = cardleft.data[9].created;
    building = new Date(dateCarrusel*1000);
    buildingString = building.toLocaleDateString('es-MX',option);

    //card 1
    //Meter valores en div id imagen
    document.getElementById("imagen").innerHTML = '<img src= "' + cardleft.data[7].image.url + '" alt="">';
    //Meter valores en div categoría h4/taxonomy
    document.getElementById("categoria").innerHTML = cardleft.data[7].taxonomy.name;
    //Meter valores en div titulo h2/title
    document.getElementById("titulo").innerHTML = cardleft.data[7].title;
    //Meter valores en div date/con estructura de fecha
    document.getElementById('date').innerHTML = `<time datetime="JULY-11-2018 20:00">${buildingString} / BY ${cardleft.data[7].author.name}</time>`;
    //Meter valores de p/sumary
    document.getElementById("parrafo").innerHTML = cardleft.data[7].summary;


    //card 2
     //Meter valores en div id imagen
     document.getElementById("imagen2").innerHTML = '<img src= "' + cardleft.data[8].image.url + '" alt="">';
     //Meter valores en div categoría h4/taxonomy
     document.getElementById("categoria2").innerHTML = cardleft.data[8].taxonomy.name;
     //Meter valores en div titulo h2/title
     document.getElementById("titulo2").innerHTML = cardleft.data[8].title;
     //Meter valores en div date/con estructura de fecha
    document.getElementById('date2').innerHTML = `<time datetime="JULY-11-2018 20:00">${buildingString} / BY ${cardleft.data[8].author.name}</time>`;
     //Meter valores de p/sumary
     document.getElementById("parrafo2").innerHTML = cardleft.data[8].summary;


     //card 3
     //Meter valores en div id imagen
     document.getElementById("imagen3").innerHTML = '<img src= "' + cardleft.data[9].image.url + '" alt="">';
     //Meter valores en div categoría h4/taxonomy
     document.getElementById("categoria3").innerHTML = cardleft.data[9].taxonomy.name;
     //Meter valores en div titulo h2/title
     document.getElementById("titulo3").innerHTML = cardleft.data[9].title;
     //Meter valores en div date/con estructura de fecha
    document.getElementById('date3').innerHTML = `<time datetime="JULY-11-2018 20:00">${buildingString} / BY ${cardleft.data[9].author.name}</time>`;
     //Meter valores de p/sumary
     document.getElementById("parrafo3").innerHTML = cardleft.data[9].summary;
  });
