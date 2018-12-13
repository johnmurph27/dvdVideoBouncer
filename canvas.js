

var container = document.getElementById("container");
var width = document.body.clientWidth;
var height = document.body.clientHeight;
container.setAttribute("style","width:"+width+"px; height:"+height+"px; border: 1px solid black");

// Resize container on window resize
var onresize = function() {
   
    var width = document.body.clientWidth;
    var height = document.body.clientHeight;
    container.setAttribute("style","width:"+width+"px; height:"+height+"px; border: 1px solid black");

}

 window.addEventListener("resize", onresize);


 var x = 20;
 var y = 200;
 var dx = 1;
 var dy = 1;
 

function move() {
    var box = document.getElementById("box");
    var id = setInterval(frame, 10);
    function frame() {
        if(x + 50 > width || x < 0){
            dx = -dx;
        } else {
            
            box.style.left = x + "px";
        }
        if ( y + 50 > height || y < 0){
            dy = -dy;
        }else {
            box.style.top = y + "px";
        }
        x = x + dx;
        y = y + dy;
    }
}
move();


