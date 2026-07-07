/*
  www.google.com
  qr code api
  https://goqr.me/api/
  URL =>  https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example   
  Change the code to Sifiso Dhlamini
   https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Sifiso_Dhlamini
    Plain URL
    https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=
   */

let imgBox = document.getElementById("imgBox");
let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let btnEl = document.getElementById("btn");
function generateQR() {
  qrImage.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
    qrText.value;
}

btnEl.addEventListener("click", generateQR);
