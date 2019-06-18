
firebase.initializeApp({
    apiKey: "AIzaSyDGcEqhdJ_U6csAQTQLlxg0x3Ks3TCEhzo",
    authDomain: "conexione-5bb09.firebaseapp.com",
    projectId: "conexione-5bb09"

});
  

// crud
  // Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var nombre = document.getElementById("nombre").value;
var plataforma = document.getElementById("plataforma").value;
var costo= document.getElementById("costo").value;
var descri= document.getElementById("descri").value;

function agregarDatos(){

db.collection("juegos").add({
    nombre: nombre,
    plataforma: plataforma,
    costo: costo ,
    descri: descri

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


//mostrar juegos CATALINA
var tabla = document.getElementById('tabla');
function verJuegos(){
    db.collection("juegos").get().then(function(querySnapshot) {
        tabla.innerHTML = '';
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ",doc.data().costo+" - "+ doc.data().descri + "-" + doc.data().nombre + "-" + doc.data().plataforma);
            tabla.innerHTML +=  `
            <tr>
                <th scope="row">${doc.data().nombre}</th>
                <td>${doc.data().descri}</td>
                <td>${doc.data().costo}</td>
                <td>${doc.data().plataforma}</td>
            </tr> 
            `
        });
    });
}
<<<<<<< HEAD
//para hacer la funcion autoejecutable
//(function{
//}
//)();
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
=======
>>>>>>> 811ff3b8074d751e7ae93d9a66886e41645b9ed0


(function (){

<<<<<<< HEAD
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
=======
    
})();
//fin de crud
>>>>>>> 811ff3b8074d751e7ae93d9a66886e41645b9ed0

