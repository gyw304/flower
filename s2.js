MyGame.s2 = function(game) {

};
MyGame.s2.prototype = {
    create: function() {
        this.add.image(0,0,'bg2')
        this.p2_logo = this.add.image(MyGame.GAME_WIDTH/2,40,'p1_logo').anchor.set(0.5,0);

        this.p2_scrollText = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT-100,'p2_scrollText');
        this.p2_scrollText.anchor.set(0.5,0);
        this.add.tween(this.p2_scrollText).to( {y:MyGame.GAME_HEIGHT - 600}, 10000, Phaser.Easing.Linear.None, true);

        this.zhezhao = this.add.image(0,MyGame.GAME_HEIGHT,'zhezhao');
        this.zhezhao.anchor.set(0,1);



        this.biao = this.add.image(MyGame.GAME_WIDTH/2+14,156,'biao').anchor.set(0.5,0);

        this.mins = this.add.image(320,436,'mins')
        this.mins.anchor.set(0.11,.87);
        this.add.tween(this.mins).to( {angle:360}, 50 * 60, Phaser.Easing.Linear.None, true,0,-1,false);


        this.hour = this.add.image(320,436,'hour');
        this.hour.anchor.set(.9,.84);
        this.add.tween(this.hour).to( {angle:360}, 50 * 60 * 60, Phaser.Easing.Linear.None, true,0,-1,false);

        this.time.events.add(Phaser.Timer.SECOND * 5, function(){
            this.nextPage = this.add.group();
            this.small_heart = this.nextPage.create(MyGame.GAME_WIDTH - 50,MyGame.GAME_HEIGHT-50,'small_heart');
            this.small_heart.anchor.set(0.5);
            this.nextPage.create(MyGame.GAME_WIDTH - 150,MyGame.GAME_HEIGHT-60,'nextPage');
            this.nextPage.setAll('inputEnabled', true);
            this.nextPage.callAll('events.onInputDown.add', 'events.onInputDown', function(){
                this.state.start('s5');
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

