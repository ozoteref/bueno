var api;
const url = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,image,title,url,taxonomy.name&type=receta'

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api = jsonData;


        //Meter valores en div id imagen
        var img = document.getElementById("image").innerHTML;
        document.getElementById("image").innerHTML = '<img src="' + api.data[0].image.styles.square_circle + '" alt="">';

        //Meter valores en div id autor
        var autor = document.getElementById("green-text").innerHTML;
        document.getElementById("green-text").innerHTML = api.data[0].taxonomy.name;

        //Meter valores en div imagen
        var titulo = document.getElementById("black-text").innerHTML;
        document.getElementById("black-text").innerHTML = api.data[0].title;

        //Meter valores en div id imagen
        var img = document.getElementById("image-1").innerHTML;
        document.getElementById("image-1").innerHTML = '<img src="' + api.data[1].image.styles.square_circle + '" alt="">';

        //Meter valores en div id autor
        var autor = document.getElementById("green-text-1").innerHTML;
        document.getElementById("green-text-1").innerHTML = api.data[1].taxonomy.name;

        //Meter valores en div imagen
        var titulo = document.getElementById("black-text-1").innerHTML;
        document.getElementById("black-text-1").innerHTML = api.data[1].title;

        //Meter valores en div id imagen
        var img = document.getElementById("image-2").innerHTML;
        document.getElementById("image-2").innerHTML = '<img src="' + api.data[2].image.styles.square_circle + '" alt="">';

        //Meter valores en div id autor
        var autor = document.getElementById("green-text-2").innerHTML;
        document.getElementById("green-text-2").innerHTML = api.data[2].taxonomy.name;

        //Meter valores en div imagen
        var titulo = document.getElementById("black-text-2").innerHTML;
        document.getElementById("black-text-2").innerHTML = api.data[2].title;


    })
