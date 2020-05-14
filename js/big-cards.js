var api;

fetch(
  "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    api = jsonData;

    //Meter valores en div id imagen
    document.getElementById("imagen").innerHTML =
      '<img src= "' + api.data[6].image.url + '" alt="">';
    //Meter valores en div categoría h4/taxonomy
    document.getElementById("categoria").innerHTML = api.data[6].taxonomy.name;
    //Meter valores en div titulo h2/title
    document.getElementById("titulo").innerHTML = api.data[6].title;
    //aqui convertí la fecha de created/fecha
    let timeStamp_value = api.data[6].created;
    theDate = new Date(timeStamp_value * 1000);
    dateString = theDate.toLocaleDateString();
    document.getElementById("date").innerHTML = dateString;
    //Meter valores en div id autor
    document.getElementById("autor").innerHTML = api.data[6].author.name;
    //Meter valores de p/sumary
    document.getElementById("parrafo").innerHTML = api.data[6].summary;
  });

var api2;

fetch(
  "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    api2 = jsonData;

    //Meter valores en div id imagen
    document.getElementById("imagen2").innerHTML =
      '<img src="' + api2.data[7].image.url + '" alt="">';
    //Meter valores en div categoría h4/taxonomy
    document.getElementById("categoria2").innerHTML =
      api2.data[7].taxonomy.name;
    //Meter valores en div titulo h2/title
    document.getElementById("titulo2").innerHTML = api2.data[7].title;
    //aqui convertí la fecha de created/fecha
    let timeStamp_value = api2.data[7].created;
    theDate = new Date(timeStamp_value * 1000);
    dateString = theDate.toLocaleDateString();
    document.getElementById("date2").innerHTML = dateString;
    //Meter valores en div id autor
    document.getElementById("autor2").innerHTML = api2.data[7].author.name;
    //Meter valores de p/sumary
    document.getElementById("parrafo2").innerHTML = api2.data[7].summary;
  });
