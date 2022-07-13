let fullName = prompt("Adınızı Giriniz:")
let name_value = document.querySelector('#myName')
let clock = document.querySelector('#myClock')
let date = new Date().toLocaleString('tr-TR')
let button = document.querySelector('#button')

name_value.innerHTML = `${fullName}`
clock.innerHTML = date;

button.onclick = function () {
    alert("Tebrikler!");    
}