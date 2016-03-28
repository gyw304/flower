MyGame.s3 = function(game) {

};
MyGame.s3.prototype = {
    create: function() {

        this.add.image(0,0,'bg3');
        this.p3_logo = this.add.image(MyGame.GAME_WIDTH/2,40,'p1_logo').anchor.set(0.5,0);

        this.p3_img = this.add.image(0,160,'p3_img');
        this.p3_img.alpha = 0;
        this.add.tween(this.p3_img).to( {alpha:1}, 1500, Phaser.Easing.Linear.None, true,1500);
        this.p3_title = this.add.image(MyGame.GAME_WIDTH/2,600,'p3_title');
        this.p3_title.anchor.set(0.5);
        this.p3_title.alpha = 0;
        this.add.tween(this.p3_title).to( {alpha:1}, 800, Phaser.Easing.Linear.None, true,1500);
        this.add.tween(this.p3_title.scale).from( {x:5,y:5}, 600, Phaser.Easing.Linear.None, true,1500);

        this.p3_logoList = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT - 150,'p3_logoList').anchor.set(0.5,0);


        this.time.events.add(Phaser.Timer.SECOND * 3, function(){
            this.nextPage = this.add.group();
            this.small_heart = this.nextPage.create(MyGame.GAME_WIDTH - 50,MyGame.GAME_HEIGHT-50,'small_heart');
            this.small_heart.anchor.set(0.5);
            this.nextPage.create(MyGame.GAME_WIDTH - 150,MyGame.GAME_HEIGHT-60,'nextPage');
            this.nextPage.setAll('inputEnabled', true);
            this.nextPage.callAll('events.onInputDown.add', 'events.onInputDown', function(){
                this.state.start('s4');
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

