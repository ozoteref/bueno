var api;
const url1 = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=14'

fetch(url1)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api = jsonData;


        //Meter valores en div id imagen
        var img = document.getElementById("card-left-img").innerHTML;
        document.getElementById("card-left-img").innerHTML = '<img src="' + api.data[0].image.styles.square_circle + '" alt="">';

        var autor = document.getElementById("card-left-content-name").innerHTML;
        document.getElementById("card-left-content-name").innerHTML = api.data[0].taxonomy.name;

        let timeStamp_value = api.data[0].created;
        theDate = new Date(timeStamp_value * 1000);
        dateString = theDate.toLocaleDateString();
        document.getElementById("date-1").innerHTML = dateString;

        var autor = document.getElementById("autor-1").innerHTML;
        document.getElementById("autor-1").innerHTML = api.data[0].author.name;

        var autor = document.getElementById("card-left-content-title").innerHTML;
        document.getElementById("card-left-content-title").innerHTML = api.data[0].title;

        var autor = document.getElementById("card-left-content-text").innerHTML;
        document.getElementById("card-left-content-text").innerHTML = api.data[0].summary;

    })


var api2;
const url2 = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=14'

fetch(url2)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api2 = jsonData;


        //Meter valores en div id imagen
        var img = document.getElementById("card-left-img-2").innerHTML;
        document.getElementById("card-left-img-2").innerHTML = '<img src="' + api.data[1].image.styles.square_circle + '" alt="">';

        var autor = document.getElementById("card-left-content-name-2").innerHTML;
        document.getElementById("card-left-content-name-2").innerHTML = api.data[1].taxonomy.name;

        let timeStamp_value = api.data[1].created;
        theDate = new Date(timeStamp_value * 1000);
        dateString = theDate.toLocaleDateString();
        document.getElementById("date-2").innerHTML = dateString;

        var autor = document.getElementById("autor-2").innerHTML;
        document.getElementById("autor-2").innerHTML = api.data[1].author.name;

        var autor = document.getElementById("card-left-content-title-2").innerHTML;
        document.getElementById("card-left-content-title-2").innerHTML = api.data[1].title;

        var autor = document.getElementById("card-left-content-text-2").innerHTML;
        document.getElementById("card-left-content-text-2").innerHTML = api.data[1].summary;

    })

var api3;
const url3 = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=14'

fetch(url3)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api3 = jsonData;


        //Meter valores en div id imagen
        var img = document.getElementById("card-left-img-3").innerHTML;
        document.getElementById("card-left-img-3").innerHTML = '<img src="' + api.data[2].image.styles.square_circle + '" alt="">';

        var autor = document.getElementById("card-left-content-name-3").innerHTML;
        document.getElementById("card-left-content-name-3").innerHTML = api.data[2].taxonomy.name;

        let timeStamp_value = api.data[2].created;
        theDate = new Date(timeStamp_value * 1000);
        dateString = theDate.toLocaleDateString();
        document.getElementById("date-3").innerHTML = dateString;

        var autor = document.getElementById("autor-3").innerHTML;
        document.getElementById("autor-3").innerHTML = api.data[2].author.name;

        var autor = document.getElementById("card-left-content-title-3").innerHTML;
        document.getElementById("card-left-content-title-3").innerHTML = api.data[2].title;

        var autor = document.getElementById("card-left-content-text-3").innerHTML;
        document.getElementById("card-left-content-text-3").innerHTML = api.data[2].summary;

    })

var api4;
const url4 = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=14'

fetch(url4)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api4 = jsonData;


        //Meter valores en div id imagen
        var img = document.getElementById("right-card-img").innerHTML;
        document.getElementById("right-card-img").innerHTML = '<img src="' + api.data[3].image.styles.square_circle + '" alt="">';

        let timeStamp_value = api.data[3].created;
        theDate = new Date(timeStamp_value * 1000);
        dateString = theDate.toLocaleDateString();
        document.getElementById("date-right").innerHTML = dateString;

        var autor = document.getElementById("autor-right").innerHTML;
        document.getElementById("autor-right").innerHTML = api.data[3].author.name;

        var autor = document.getElementById("card-right-content-title").innerHTML;
        document.getElementById("card-right-content-title").innerHTML = api.data[3].title;


    })

var api5;
const url5 = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=14'

fetch(url5)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api5 = jsonData;


        //Meter valores en div id imagen
        var img = document.getElementById("right-card-img-2").innerHTML;
        document.getElementById("right-card-img-2").innerHTML = '<img src="' + api.data[4].image.styles.square_circle + '" alt="">';

        let timeStamp_value = api.data[4].created;
        theDate = new Date(timeStamp_value * 1000);
        dateString = theDate.toLocaleDateString();
        document.getElementById("date-right-2").innerHTML = dateString;

        var autor = document.getElementById("autor-right-2").innerHTML;
        document.getElementById("autor-right-2").innerHTML = api.data[4].author.name;

        var autor = document.getElementById("card-right-content-title-2").innerHTML;
        document.getElementById("card-right-content-title-2").innerHTML = api.data[4].title;


    })

var api6;
const url6 = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=14'

fetch(url6)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api6 = jsonData;


        //Meter valores en div id imagen
        var img = document.getElementById("right-card-img-3").innerHTML;
        document.getElementById("right-card-img-3").innerHTML = '<img src="' + api.data[5].image.styles.square_circle + '" alt="">';

        let timeStamp_value = api.data[5].created;
        theDate = new Date(timeStamp_value * 1000);
        dateString = theDate.toLocaleDateString();
        document.getElementById("date-right-3").innerHTML = dateString;

        var autor = document.getElementById("autor-right-3").innerHTML;
        document.getElementById("autor-right-3").innerHTML = api.data[5].author.name;

        var autor = document.getElementById("card-right-content-title-3").innerHTML;
        document.getElementById("card-right-content-title-3").innerHTML = api.data[5].title;


    })

var api7;
const url7 = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=14'

fetch(url7)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api7 = jsonData;


        //Meter valores en div id imagen
        var img = document.getElementById("right-card-img-4").innerHTML;
        document.getElementById("right-card-img-4").innerHTML = '<img src="' + api.data[6].image.styles.square_circle + '" alt="">';

        let timeStamp_value = api.data[6].created;
        theDate = new Date(timeStamp_value * 1000);
        dateString = theDate.toLocaleDateString();
        document.getElementById("date-right-4").innerHTML = dateString;

        var autor = document.getElementById("autor-right-4").innerHTML;
        document.getElementById("autor-right-4").innerHTML = api.data[6].author.name;

        var autor = document.getElementById("card-right-content-title-4").innerHTML;
        document.getElementById("card-right-content-title-4").innerHTML = api.data[6].title;


    })

var api8;
const url8 = 'http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=14'

fetch(url8)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonData) {
        api8 = jsonData;


        //Meter valores en div id imagen
        var img = document.getElementById("right-card-img-5").innerHTML;
        document.getElementById("right-card-img-5").innerHTML = '<img src="' + api.data[7].image.styles.square_circle + '" alt="">';

        let timeStamp_value = api.data[7].created;
        theDate = new Date(timeStamp_value * 1000);
        dateString = theDate.toLocaleDateString();
        document.getElementById("date-right-5").innerHTML = dateString;

        var autor = document.getElementById("autor-right-5").innerHTML;
        document.getElementById("autor-right-5").innerHTML = api.data[7].author.name;

        var autor = document.getElementById("card-right-content-title-5").innerHTML;
        document.getElementById("card-right-content-title-5").innerHTML = api.data[7].title;


    })
