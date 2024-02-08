function validFrom(){
    const login=document.getElementById('login').value;
    const pass=document.getElementById('pwd').value;

    if(login==""){
        alert("Vous devez saisir votre E-mail");
        return false; 
    }
    if(pass==""){
        alert("Vous devez saisir votre mot de passe");
        return false;
    }
    if(pass.length <= 6){
        
        alert(" Votre mot de passe est invalid (+8 caractere)");
     
        return false;}

}
const navigation=document.querySelector('nav');

window.addEventListener('scroll',()=>{
    if(window.scrollY >600){
        navigation.classList.add('anim-nav');
    }else{
        navigation.classList.remove('anim-nav');
    }

})

window.addEventListener('click',(e)=>{

    console.log(e);

    const rond=document.createElement('div');
    rond.className='clickAnim';
    rond.style.top=`${e.pageY -50}px`;
    rond.style.left=`${e.pageX -50}px`;

    document.body.appendChild(rond);

    setTimeout(()=>{
        rond.remove();
    },1500)

})
