
firebase.initializeApp({
    apiKey: "AIzaSyDGcEqhdJ_U6csAQTQLlxg0x3Ks3TCEhzo",
    authDomain: "conexione-5bb09.firebaseapp.com",
    projectId: "conexione-5bb09"

  });
  

// crud
  // Initialize Cloud Firestore through Firebase
  var db = firebase.firestore();
  var nombre = document.getElementById("nombre").value;
  var apellido = document.getElementById("apellido").value;
  var edad= document.getElementById("edad").value;

  function agregarDatos(){

    db.collection("usuarios").add({
        first: nombre,
        last: apellido,
        born: edad

    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
  }

  function eliDatos(){
    db.collection("usuarios").doc("7v3D7Z5o9p3u0uMkOeJr").delete().then(function() {
        console.log("Document successfully deleted!");
    }).catch(function(error) {
        console.error("Error removing document: ", error);
    });
    
    
  }

  
  function verDatos(){
    db.collection("usuarios").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data().first + "-" + doc.data().last + "-" + doc.data().born);
        });
    });
}
//fin de crud


//listado

$(document).ready(function()
 {
    // Inicializar la base de datos
    var config = {
      apiKey: "AIzaSyDGcEqhdJ_U6csAQTQLlxg0x3Ks3TCEhzo",
    authDomain: "conexione-5bb09.firebaseapp.com",
    projectId: "conexione-5bb09"
    };

    firebase.initializeApp(config);

    var database = firebase.database();

    // Fijarse que la ruta de partida ahora es la colección juegos:
    var referencia=database.ref("juegos");

    var juegos={};

    /*
    Evento: value

    The value event is used to read a static snapshot of the contents at a given database path,
    as they existed at the time of the read event. It is triggered once with the initial data and again every time the data changes.
    The event callback is passed a snapshot containing all data at that location, including child data. In our code example above,
    value returned all of the blog posts in our app. Everytime a new blog post is added, the callback function will return all of the posts.
    */

    referencia.on('value',function(datos)
    {
        juegos=datos.val();

        // Recorremos los juegos y los mostramos
        $.each(juegos, function(indice,valor)
        {
            var prevProducto='<div class="row"><div class="col-md-3 cabeceraProducto">';

            prevProducto+='<h2>'+valor.nombre+'</h2></div>';

            prevProducto+='<div class="row"><div class="col-md-3 cabeceraProducto">';
            prevProducto+='<h2>'+valor.costo+'€. </h2></div>';
            prevProducto+='</div>';

            prevProducto+='<div class="row">';
            prevProducto+='<div class="col-md-3 imagenFix">';
            if (valor.imagen=='NONE')
                prevProducto+='<img alt="Sin Fotografía"/>';
            else
                prevProducto+='<img src="'+valor.imagen+'"/>';
            prevProducto+='</div>';

            prevProducto+='<div class="col-md-3">';
            prevProducto+='<p>'+valor.descri+'</p>';
            prevProducto+='</div>';
            prevProducto+='</div>';

            prevProducto+='</div>';
            prevProducto+='<div class="row espaciador">';
            prevProducto+='</div>';

            $(prevProducto).appendTo('#listado');
        });

    },function(objetoError){
        console.log('Error de lectura:'+objetoError.code);
    });

});