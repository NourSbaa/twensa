function validFrom(){
    const CIN = document.getElementById('CIN').value;
     
    

    if(CIN=="" ){
        alert("svp saisir votre CIN");
        CIN.focus();
        return false;
    }
     if(CIN.length !=8){
        document.getElementById('CIN').style.borderColor="red";
        return false;
    }

     if(CIN.length =8){
        document.getElementById('CIN').style.borderColor="green";
        return false;
    }
    
    

    

}
   
