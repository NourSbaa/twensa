function validFrom1(){
const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
if(prenom=="" ){
    alert("svp saisir votre prenom");
    prenom.focus();
    return false;
}
 if(CIN.length !=8){
    document.getElementById('CIN').style.borderColor="red";
    return false;
}
}