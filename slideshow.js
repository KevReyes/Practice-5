window.onload = bird;
var thePic = 0;
var arrMyPix = new Array("bird1.jpg", "bird2.jpg", "bird3.jpg", "bird4.jpg");

function bird() {
    document.getElementById("prevlink").onclick = ProcessPrevious;
    document.getElementById("nextlink").onclick = ProcessNext;
}

function ProcessPrevious(){
if(thePic == 0) {
    thePic = arrMyPix.length;
}

thePic--;
document.getElementById("myPicture").src = arrMyPix[thePic]
return false;
}

function ProcessNext(){
    thePic++;
    if (thePic == arrMyPix.length) {
        thePic = 0;
    }
document.getElementById("myPicture").src = arrMyPix[thePic];
return false;
}