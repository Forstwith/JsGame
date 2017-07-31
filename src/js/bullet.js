//子弹
function bullet(initX , initY , canvas) {
    var image = getImg('image/bullet.png');


    var o = {
        image : image,
        width : 50,
        height : 30,
        x : initX,
        y : initY,
        speed : 11,
        hitStrength : 1
    };

    
    o.move = function () {
        o.y -= o.speed;
    };



    return o;
}