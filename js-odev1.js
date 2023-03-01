let isim = prompt("Lutfen adinizi girin..")
let mesaj = document.querySelector('#myName')
mesaj.innerHTML = ` ${isim}`


const gunler = ['Pazartesi' , "Salı" , "Çarşamba" , "Perşembe" , "Cuma" , "Cumartesi" , "Pazar"];
function tarih_saat () {
    const d = new Date();
    let gun = gunler[d.getDay() -1]
    //document.getElementById('myClock').innerHTML = gun;

    let saat = d.getHours();
    let dakika = d.getMinutes();
    let saniye = d.getSeconds();
    document.getElementById('myClock').innerHTML = `${saat}:${dakika}:${saniye}  ${gun}`;
}

setInterval(tarih_saat,1000)
