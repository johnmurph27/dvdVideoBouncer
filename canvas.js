const colors = ["#252839", "#e05038", "#677077", "#b5b5b7", "#f2b632", "#300032","#c43235", "#f6f1ed", "#6534ff", "#5e0231"];
var x = 20;
var y = 200;
var dx = .5;
var dy = .5;

var container = document.getElementById("container");
var width = document.body.clientWidth;
var height = document.body.clientHeight;
container.setAttribute("style","width:"+width+"px; height:"+height+"px; border: 1px solid black");

// Resize container on window resize
var onresize = function() {
    width = document.body.clientWidth;
    height = document.body.clientHeight;
    if(x > width || height < y){
        x = 0;
        y = 50;
    }
    container.setAttribute("style","width:"+width+"px; height:"+height+"px; border: 1px solid black");

}

 window.addEventListener("resize", onresize);



 
 

function move() {
    var box = document.getElementById("box");
    var text = document.getElementsByClassName("colored");
    console.log(text);
    
    var newColor;
    var id = setInterval(frame, 1);
    function frame() {
        if(x + 300 > width || x < 0){
            newColor = colors[Math.floor(Math.random() * 10)];
            for(i=0; i < text.length; i++){
                if(text[i].nodeName == "DIV"){
                    text[i].style.backgroundColor = newColor;
                }else {
                    text[i].style.color = newColor;
                }
            }
            dx = -dx;
        } else {
            
            box.style.left = x + "px";
        }
        if ( y + 186 > height || y < 0){
            newColor = colors[Math.floor(Math.random() * 10)];
            for(i=0; i < text.length; i++){
                if(text[i].nodeName == "DIV"){
                    text[i].style.backgroundColor = newColor;
                }else {
                    text[i].style.color = newColor;
                }
            }
            
            
            dy = -dy;
        }else {
            box.style.top = y + "px";
        }
        x = x + dx;
        y = y + dy;
    }
}
move();



