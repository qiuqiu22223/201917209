var image = new Array();
image[0] = "../图片/背景1.jpg";
image[1] = "../图片/背景2.jpg";
image[2] = "../图片/背景3.jpg";

document.getElementById("change").src = image[0];

var items = document.getElementById("num").getElementsByTagName("li");
items[0].className = "active";
var i = -1;
function changeImg(){
    i = (i + 1) % image.length;
    document.getElementById("change").src = image[i];

    exI();
}
var b = self.setInterval("changeImg()", 3000);
function last(){
    self.clearInterval(b);
    i = (i + image.length - 1) % image.length;
    document.getElementById("change").src = image[i];
    exI();
    b = self.setInterval("changeImg()", 3000);
}
function next(){
    self.clearInterval(b);
    i = (i + 1) % image.length;
    document.getElementById("change").src = image[i];

    exI();
    b = self.setInterval("changeImg()", 3000);
}
function jump(k){
    self.clearInterval(b);
    i = k;
    document.getElementById("change").src = image[i];

    exI();
    b = self.setInterval("changeImg()", 3000);
}
function exI(){
    for(var j = 0; j < items.length; j++){
        items[j].className = "";
        if(i == j)
            items[i].className = "active";
    }
}