
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
                <th scope="row">${doc.data().costo}</th>
                <td>${doc.data().descri}</td>
                <td>${doc.data().nombre}</td>
                <td>${doc.data().plataforma}</td>
            </tr> 
            `
        });
    });
}


(function (){

    
})();
//fin de crud

