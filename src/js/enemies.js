//敌方飞机
function normalnemy(initX , initY , speedX ,speedY , lives , src) {
    var image = getImg(src);
    var o = {
        image : image,
        width : 100,
        height : 80,
        x : initX,
        y : initY,
        lives : lives,
        speedX : speedX,
        speedY : speedY
    };

    //飞机移动
    o.move = function () {
        o.y += speedY;
    };

    o.beHit = function (hitStrength) {
        if(o.lives > hitStrength) {
            o.lives -= hitStrength;
        } else {
            o.kill();
        }
    };

    o.kill = function () {
        o.lives = 0;
    };

    o.strokes = function () {
         speedX *= 2;
    };

    o.attack = function () {

    };

    return o;
}