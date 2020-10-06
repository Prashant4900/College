window.onload = choosePic;
var myPix = new Array("images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png");


function choosePic() {
    var random = Math.floor(Math.random() * myPix.length);
    var random1 = Math.floor(Math.random() * myPix.length);
    document.getElementById("myPicture1").src = myPix[random];
    document.getElementById("myPicture2").src = myPix[random1];
}