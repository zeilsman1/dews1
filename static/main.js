let publicKey;

function createRSAKey(){
    const p1=Math.random();
    const p2=Math.random();
    const p3=Math.random();
    const passPhrase=p1.toString()+p2.toString()+p3.toString();
    const RSAKey=cryptico.generateRSAKey(passPhrase,1024);
    localStorage.setItem('RSAKey',JSON.stringify(RSAKey))
    publicKey = cryptico.publicKeyString(RSAKey)
}

if(localStorage.getItem('RSAKey') == undefined){
    createRSAKey()
}else{
    publicKey=cryptico.publicKeyString(JSON.parse(localStorage.getItem('RSAKey')))
    console.log(publicKey);
}




const input=document.getElementById('input');
const btn =document.getElementById('btn');

btn.addEventListener('click',()=>{
    console.log(input.value)
    //encrypt with key            
})

