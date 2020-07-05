document.addEventListener('DOMContentLoaded', function(){

    var img1 = document.getElementById('api-img1');
    var img2 = document.getElementById('api-img2');
    var img3 = document.getElementById('api-img3');
    var img4 = document.getElementById('api-img4');
    var img5 = document.getElementById('api-img5');
    var img6 = document.getElementById('api-img6');
    var title1 = document.getElementById('api-title1');
    var title2 = document.getElementById('api-title2');
    var title3 = document.getElementById('api-title3');
    var title4 = document.getElementById('api-title4');
    var title5 = document.getElementById('api-title5');
    var title6 = document.getElementById('api-title6');
    var category1 = document.getElementById('api-category1');
    var category2 = document.getElementById('api-category2');
    var category3 = document.getElementById('api-category3');
    var category4 = document.getElementById('api-category4');
    var category5 = document.getElementById('api-category5');
    var category6 = document.getElementById('api-category6');
    var date1 = document.getElementById('api-date1');
    var date2 = document.getElementById('api-date2');
    var date3 = document.getElementById('api-date3');
    var date4 = document.getElementById('api-date4');
    var date5 = document.getElementById('api-date5');
    var date6 = document.getElementById('api-date6'); 
    
    fetch('http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta&fields=title,image.url,author.name,taxonomy.name,created&limit=6')
    .then(function(respuesta) {
        return respuesta.json();
    })
    .then(function(miJeison) {

        let dateCarrusel = miJeison.data[0].created;
        building = new Date(dateCarrusel*1000);
        buildingString = building.toLocaleDateString('es-MX');

        let dateCarrusel1 = miJeison.data[0].created;
        building1 = new Date(dateCarrusel1*1000);
        buildingString1 = building1.toLocaleDateString('es-MX');

         img1.innerHTML = `<img src='${miJeison.data[0].image.url}' alt='' />`;
         img2.innerHTML = `<img src='${miJeison.data[1].image.url}' alt='' />`;
         img3.innerHTML = `<img src='${miJeison.data[2].image.url}' alt='' />`;
         img4.innerHTML = `<img src='${miJeison.data[3].image.url}' alt='' />`;
         img5.innerHTML = `<img src='${miJeison.data[4].image.url}' alt='' />`;
         img6.innerHTML = `<img src='${miJeison.data[5].image.url}' alt='' />`;
         title1.innerHTML = `<h1>${miJeison.data[0].taxonomy.name}</h1>`;
         title2.innerHTML = `<h1>${miJeison.data[1].taxonomy.name}</h1>`;
         title3.innerHTML = `<h1>${miJeison.data[2].taxonomy.name}</h1>`;
         title4.innerHTML = `<h1>${miJeison.data[3].taxonomy.name}</h1>`;
         title5.innerHTML = `<h1>${miJeison.data[4].taxonomy.name}</h1>`;
         title6.innerHTML = `<h1>${miJeison.data[5].taxonomy.name}</h1>`;
         category1.innerHTML = `<h2>${miJeison.data[0].title}</h2>`;
         category2.innerHTML = `<h2>${miJeison.data[1].title}</h2>`;
         category3.innerHTML = `<h2>${miJeison.data[2].title}</h2>`;
         category4.innerHTML = `<h2>${miJeison.data[3].title}</h2>`;
         category5.innerHTML = `<h2>${miJeison.data[4].title}</h2>`;
         category6.innerHTML = `<h2>${miJeison.data[5].title}</h2>`;
         date1.innerHTML = `<time datetime="JULY-11-2018 20:00">${buildingString} / BY ${miJeison.data[0].author.name}</time>`;
         date2.innerHTML = `<time datetime="JULY-11-2018 20:00">${buildingString} / BY ${miJeison.data[1].author.name}</time>`;
         date3.innerHTML = `<time datetime="JULY-11-2018 20:00">${buildingString} / BY ${miJeison.data[2].author.name}</time>`;
         date4.innerHTML = `<time datetime="JULY-11-2018 20:00">${buildingString1} / BY ${miJeison.data[3].author.name}</time>`;
         date5.innerHTML = `<time datetime="JULY-11-2018 20:00">${buildingString} / BY ${miJeison.data[4].author.name}</time>`;
         date6.innerHTML = `<time datetime="JULY-11-2018 20:00">${buildingString} / BY ${miJeison.data[5].author.name}</time>`;

     })  
 });