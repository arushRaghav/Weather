'use strict'


function findPos(){
    return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(pos=>{ resolve(pos); } , err=>{reject(err)});
    });
}




function weatherAap(){
    return findPos().catch(err=>{
        alert(err);
    }).then(pos=>{
        return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=29896500950f5a19eef66823ef77f325`);
    }).then(res=>res.json());
}





function addTex(tex){
    let onl = document.getElementsByClassName('only')[0];
    let aa = document.createElement('div');
    aa.appendChild(document.createTextNode(tex));
    onl.appendChild(aa);
}





weatherAap().then(res=>{
    addTex(`Temp ${Math.round(100*(res.main.temp - 273.15))/100} degree Celsius`);
    addTex(res.weather[0].description);
});