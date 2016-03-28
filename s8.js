MyGame.s8 = function(game) {

};

MyGame.s8.prototype = {
    create: function() {

        this.add.image(0,0,'bg8');
        this.p8_logo = this.add.image(MyGame.GAME_WIDTH/2,40,'p1_logo').anchor.set(0.5,0);



        this.emitter = this.add.emitter(this.world.centerX, 450, 200);

        this.emitter.makeParticles('corona');


        this.emitter.setAlpha(0.2, 1);
        this.emitter.gravity = -200;
        this.emitter.width = this.world.width;
        this.emitter.minRotation = -80;
        this.emitter.maxRotation = 80;
        this.emitter.setScale(0.1, 2, 0.1, 2, 4000);
        this.emitter.start(false, 2000, 200);


        this.p8_title = this.add.image(MyGame.GAME_WIDTH/2,260,'p8_title');
        this.p8_title.anchor.set(0.5,0);
        this.add.tween(this.p8_title).from( {alpha:0}, 800, Phaser.Easing.Linear.None, true,1500);
        this.add.tween(this.p8_title.scale).from( {x:5,y:5}, 600, Phaser.Easing.Linear.None, true,1500)




        this.p8_text1 = this.add.image(MyGame.GAME_WIDTH/2,560,'p8_text1');
        this.p8_text1.anchor.set(0.5,0);
        this.add.tween(this.p8_text1).from( {alpha:0}, 800, Phaser.Easing.Linear.None, true,2000);

        this.p8_text2 = this.add.image(MyGame.GAME_WIDTH/2,800,'p8_text2');
        this.p8_text2.anchor.set(0.5,0);
        this.add.tween(this.p8_text2).from( {alpha:0}, 800, Phaser.Easing.Linear.None, true,2500);


        this.time.events.add(Phaser.Timer.SECOND * 4, function(){
            this.nextPage = this.add.group();
            this.small_heart = this.nextPage.create(MyGame.GAME_WIDTH - 50,MyGame.GAME_HEIGHT-50,'small_heart');
            this.small_heart.anchor.set(0.5);
            this.nextPage.create(MyGame.GAME_WIDTH - 150,MyGame.GAME_HEIGHT-60,'nextPage');
            this.nextPage.setAll('inputEnabled', true);
            this.nextPage.callAll('events.onInputDown.add', 'events.onInputDown', function(){
                this.state.start('s9');
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

