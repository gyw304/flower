MyGame.s1 = function(game) {

};
var self;
MyGame.s1.prototype = {
    create: function() {
        self = this;
        this.stage.backgroundColor = '#000000';

        this.p1_logo = this.add.image(MyGame.GAME_WIDTH/2,40,'p1_logo').anchor.set(0.5,0);

        this.heart_1 = this.add.image(-50,-50,'heart_1');
        this.heart_1.anchor.set(0.5);
        this.add.tween(this.heart_1).to( {y:MyGame.GAME_HEIGHT/2,x:MyGame.GAME_WIDTH/2}, 4500, Phaser.Easing.Linear.None, true).onComplete.add(function(){
            this.add.tween(this.heart_1).to( {alpha:0}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                this.heart_1.kill()
            },this)
        },this)

        this.heart_2 = this.add.image(MyGame.GAME_WIDTH+50,-50,'heart_2');
        this.heart_2.anchor.set(0.5);
        this.add.tween(this.heart_2).to( {y:MyGame.GAME_HEIGHT/2,x:MyGame.GAME_WIDTH/2}, 4300, Phaser.Easing.Linear.None, true,2500).onComplete.add(function(){
            this.add.tween(this.heart_2).to( {alpha:0}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                this.heart_2.kill()
            },this)
        },this)

        this.heart_3 = this.add.image(-150,MyGame.GAME_HEIGHT/2+200,'heart_3');
        this.heart_3.anchor.set(0.5);
        this.add.tween(this.heart_3).to( {y:MyGame.GAME_HEIGHT/2,x:MyGame.GAME_WIDTH/2}, 4700, Phaser.Easing.Linear.None, true,3800).onComplete.add(function(){
            this.add.tween(this.heart_3).to( {alpha:0}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                this.heart_3.kill()
            },this)
        },this)

        this.heart_4 = this.add.image(MyGame.GAME_WIDTH+150,MyGame.GAME_HEIGHT/2+200,'heart_4');
        this.heart_4.anchor.set(0.5);
        this.add.tween(this.heart_4).to( {y:MyGame.GAME_HEIGHT/2,x:MyGame.GAME_WIDTH/2}, 4100, Phaser.Easing.Linear.None, true,5700).onComplete.add(function(){
            this.add.tween(this.heart_4).to( {alpha:0}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                this.heart_4.kill()
            },this)
        },this)

        this.heart_5 = this.add.image(MyGame.GAME_WIDTH/2 +250,MyGame.GAME_HEIGHT+200,'heart_5');
        this.heart_5.anchor.set(0.5);
        this.add.tween(this.heart_5).to( {y:MyGame.GAME_HEIGHT/2,x:MyGame.GAME_WIDTH/2+50}, 5200, Phaser.Easing.Linear.None, true,6500).onComplete.add(function(){

            this.add.tween(this.heart_5).to( {alpha:0}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(function(){
                this.heart_5.kill()
            },this)

            this.big_heart = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2,'big_heart');
            this.p1_next = this.add.image(MyGame.GAME_WIDTH/2,MyGame.GAME_HEIGHT/2+200,'p1_next');
            this.p1_next.anchor.set(0.5);
            this.big_heart.anchor.set(0.5);
            this.add.tween(this.big_heart).from( {alpha:0}, 2500, Phaser.Easing.Linear.None, true);
            this.add.tween(this.big_heart.scale).to( {x:.9,y:.9}, 500, Phaser.Easing.Linear.None, true,0,-1,true);

            this.input.onDown.add(function(){
                this.state.start('s2');
            }, this);

        },this)

        var blink = this.add.sprite(0,0,"blink");
        var fadeTween = this.add.tween(blink);
        fadeTween.to({
            alpha:0
        },1500,Phaser.Easing.Cubic.Out,true);

    },
    update: function() {

    }
};

