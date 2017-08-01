//玩家的飞机
function player(initX , initY , canvas) {
    var image = getImg('image/player.png');
    var speedX = 10;
    var speedY = 10;
    var o = {
        image : image,
        width : 100,
        height : 80,
        x : initX,
        y : initY,
        lives : 1,
        score : 0,
        hitStrength : 0
    };

    //飞机移动  w 向上 s 向下  a 向左  d 向右
    o.move = function (up , down , right , left) {
        if(up){
            if(o.y <= -10) {
                speedY = 0;
            } else {
                speedY = 10;
            }
        } else if(down){
            if(o.y > canvas.height - o.height + 10 || o.y < -10) {
                speedY = 0;
            } else {
                speedY = 10;
            }
        }
        if(left) {
            if (o.x <= -10) {
                speedX = 0;
            } else {
                speedX = 10;
            }
        } else if(right) {
            if (o.x > canvas.width - o.width + 10 || o.x < -10) {
                speedX = 0;
            } else {
                speedX = 10;
            }
        }

        if (up){
            o.y -= speedY;
            if(left) {
                o.x -= speedX;
            }else if(right) {
                o.x += speedX;
            }
        } else if (down) {
            o.y += speedY;
            if(left) {
                o.x -= speedX;
            }else if(right) {
                o.x += speedX;
            }
        } else if (left) {
            o.x -= speedX;
            if(up) {
                o.y -= speedY;
            }else if(down) {
                o.y += speedY;
            }
        } else if (right) {
            o.x += speedX;
            if(up) {
                o.y -= speedY;
            }else if(down) {
                o.y += speedY;
            }
        }
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

    o.scored = function (score) {
        o.score += score;
    };


    return o;
}