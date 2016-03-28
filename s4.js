MyGame.s4 = function(game) {

};

var line = '';
MyGame.s4.prototype = {
    create: function() {

        this.add.image(0,0,'bg4');
        this.p4_logo = this.add.image(MyGame.GAME_WIDTH/2,340,'p1_logo').anchor.set(0.5,0);

        this.index = 0;
        this.content = [
            "",
            "我们要为你开一条路，至少为你创造\n一个机会哪怕只有一个，走出去的机\n会，看外面的世界，听外面的故事。"
        ];
        this.text = this.add.text(170, 480, '', { font: "20px Courier", fill: "#eacf87"});
        this.text.lineSpacing = 15;
        this.nextLine();

        this.p4_xinfeng = this.add.image(MyGame.GAME_WIDTH/2,620,'p4_xinfeng');
        this.p4_xinfeng.anchor.set(0.5,0);
        this.add.tween(this.p4_xinfeng).from( {x:MyGame.GAME_WIDTH/2+10,alpha:0}, 1500, Phaser.Easing.Cubic.Out, true,2000);


        this.time.events.add(Phaser.Timer.SECOND * 3, function(){
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

    },
    nextLine : function(){
        this.index++;
        if (this.index < this.content.length)
        {
            line = '';
            this.time.events.repeat(50, this.content[this.index].length + 1, this.updateLine, this);
        }
    },
    updateLine : function(){
        if (line.length < this.content[this.index].length)
        {
            line = this.content[this.index].substr(0, line.length + 1);
            this.text.setText(line);
        }
        else
        {
            this.time.events.add(Phaser.Timer.SECOND * 2, this.nextLine, this);
        }
    }
};

