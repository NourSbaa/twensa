
function validFrom1(){
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const tel = document.getElementById('tel').value;
    const pass = document.getElementById('tel').value;
if(nom=="" ){
    alert("S'il vous plait vous devez saisir votre nom");
    nom.focus();
    return false;
}     
    if(prenom=="" ){
        alert("S'il vous plait  vous devez saisir votre prenom");
        prenom.focus();
        return false;
    }
    if(tel=="" ){
        alert("S'il vous plait vous devez saisir votre tel");
        tel.focus();
        return false;
    }
    if(pass=="" ){
        alert("S'il vous plait vous devez saisir votre mot de passe");
        pass.focus();
        return false;
    }    
    
    if(tel.length !=8){
        document.getElementById('tel').style.borderColor="red";
        return false;
    }

     if(tel.length =8){
        document.getElementById('tel').style.borderColor="green";
        return false;
    }
     
}
    
    
