// var api;

// fetch(
//   "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&type=receta"
// )
//   .then(function (response) {
//     return response.json();
//   })
//   .then(function (jsonData) {
//     api = jsonData;

//     //Meter valores en div id imagen
//     var img = document.getElementById("horizontal-1-img").innerHTML;
//     document.getElementById("horizontal-1-img").innerHTML =
//       '<img src="' + api.data[0].image.styles.square_circle + '" alt="">';
//     // valores de taxonomy
//     var taxonomy = document.getElementById("taxonomy").innerHTML;
//     document.getElementById("taxonomy").innerHTML =
//       '<img src="' + api.data[0].taxonomy.name + '" alt="">';

//     //Meter valores en div id autor
//     var autor = document.getElementById("autor").innerHTML;
//     document.getElementById("autor").innerHTML = api.data[0].author.name;

//     //Meter valores en div imagen
//     var titulo = document.getElementById("title").innerHTML;
//     document.getElementById("title").innerHTML = api.data[0].title;
//   });

// document.addEventListener("DOMContentLoaded", function () {
//    var divText = document.getElementById('section-2');

//    fetch(
//     // Petición
//     "http://api.imagendigital.com/v2/cocinadelirante/node.json/339fd1e0444ddbbd4d4528d8df161108?taxonomy.tid=13&fields=id,title,url,taxonomy.name&type=receta"
//   )
// .then(function(answer) {
//   return answer.json();
// })
// .then(function (miJeison) {
//   divText.innerHTML = `<div class="image">
//           <img src="${miJeison.data[1].image.styles.square_circle}" alt="ejemplo" />
//           <div class="image-card">
//             <div class="image-card-title">
//               <a href="Index.html">
//                 <p>
//                   <span class="green">THE BEST</span><br />
//                   <span>Healthy Food</span>
//                 </p>
//               </a>
//             </div>
//           </div>
//         </div>`
// }
// });
