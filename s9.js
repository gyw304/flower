MyGame.s9 = function(game) {

};

MyGame.s9.prototype = {
    create: function() {

        this.add.image(0,0,'bg9');

        this.p9_logo1 = this.add.image(30,20,'p9_logo1');
        this.add.tween(this.p9_logo1).from( {alpha:0}, 1000, Phaser.Easing.Linear.None, true,1500);
        this.p9_text1 = this.add.image(30,100,'p9_text1');
        this.add.tween(this.p9_text1).from( {alpha:0}, 1000, Phaser.Easing.Linear.None, true,2000);

        this.p9_logo2 = this.add.image(30,330,'p9_logo2');
        this.add.tween(this.p9_logo2).from( {alpha:0}, 1000, Phaser.Easing.Linear.None, true,3500);
        this.p9_text2 = this.add.image(30,390,'p9_text2');
        this.add.tween(this.p9_text2).from( {alpha:0}, 1000, Phaser.Easing.Linear.None, true,4000);

        this.p9_logo3 = this.add.image(30,710,'p9_logo3');
        this.add.tween(this.p9_logo3).from( {alpha:0}, 1000, Phaser.Easing.Linear.None, true,5500);
        this.p9_text3 = this.add.image(30,780,'p9_text3');
        this.add.tween(this.p9_text3).from( {alpha:0}, 1000, Phaser.Easing.Linear.None, true,6000);



        this.time.events.add(Phaser.Timer.SECOND * 7, function(){
            this.nextPage = this.add.group();
            this.small_heart = this.nextPage.create(MyGame.GAME_WIDTH - 50,MyGame.GAME_HEIGHT-40,'small_heart');
            this.small_heart.anchor.set(0.5);
            this.nextPage.create(MyGame.GAME_WIDTH - 150,MyGame.GAME_HEIGHT-50,'nextPage');
            this.nextPage.setAll('inputEnabled', true);
            this.nextPage.callAll('events.onInputDown.add', 'events.onInputDown', function(){
                window.location.href = 'end.html';
            },this);
            this.add.tween(this.nextPage).from( {alpha:0}, 500, Phaser.Easing.Linear.None, true);
            this.add.tween(this.small_heart.scale).to( {x:.9,y:.9}, 500, Phaser.Easing.Linear.None, true,0,-1,true);
        }, this);

        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Cubic.Out,true);

    }
};

