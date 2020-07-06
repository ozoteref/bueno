// Sección 3-Healthy
var api;
const url = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,image,title,url,taxonomy.name&type=receta'

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api = jsonData;


        //Meter valores en div id imagen
        document.getElementById("image").innerHTML = '<img src="' + api.data[3].image.styles.square_circle + '" alt="">';

        //Meter valores en div id autor
        document.getElementById("green-text").innerHTML = api.data[3].taxonomy.name;

        //Meter valores en div imagen
        document.getElementById("black-text").innerHTML = api.data[3].title;



        //Meter valores en div id imagen
        document.getElementById("image-1").innerHTML = '<img src="' + api.data[4].image.styles.square_circle + '" alt="">';

        //Meter valores en div id autor
        document.getElementById("green-text-1").innerHTML = api.data[4].taxonomy.name;

        //Meter valores en div imagen
        document.getElementById("black-text-1").innerHTML = api.data[4].title;



        //Meter valores en div id imagen
        document.getElementById("image-2").innerHTML = '<img src="' + api.data[5].image.styles.square_circle + '" alt="">';

        //Meter valores en div id autor
        document.getElementById("green-text-2").innerHTML = api.data[5].taxonomy.name;

        //Meter valores en div imagen
        document.getElementById("black-text-2").innerHTML = api.data[5].title;


    })
