//子弹
function bullet(initX , initY , canvas) {
    var image = getImg('image/bullet.png');

    var spped = 11;
    var o = {
        image : image,
        width : 50,
        height : 30,
        x : initX,
        y : initY
    };

    
    o.move = function () {
        
            o.y -= spped;

    };

    return o;
}