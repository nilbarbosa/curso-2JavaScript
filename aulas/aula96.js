const long=document.getElementById("long")
const lati=document.getElementById("lati")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(mostrasLocalizacao,erroLocalizacao)
    //espera uma função de caso seja positivo e uma caso seja negativo.
}else{
    console.log("geolocalização não suportada")
}

function mostrasLocalizacao(pos){
    long.innerHTML=`Longitude: ${pos.coords.longitude}`
    lati.innerHTML=`Latitude: ${pos.coords.latitude}`
}

function erroLocalizacao(){
    console.log("erro ao obter a localização")
}
