MyGame.s10 = function(game) {

};

MyGame.s10.prototype = {
    create: function() {

        this.add.image(0,0,'bg10');

        this.p10_logo = this.add.image(MyGame.GAME_WIDTH/2,40,'p1_logo').anchor.set(0.5,0);
        this.p10_text = this.add.image(MyGame.GAME_WIDTH/2,540,'p10_text').anchor.set(0.5,0);

        document.getElementById('video').style.display = 'block';
        document.getElementById('erweima').style.display = 'block';


        this.text = this.add.text(this.world.centerX, 950, 'µ„¡¡∞Æ–ƒ '+num+' »À', { font: "30px Courier", fill: "#eacf87"}).anchor.set(0.5,0);


        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Cubic.Out,true);

    }
};

