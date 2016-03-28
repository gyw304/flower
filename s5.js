MyGame.s5 = function(game) {

};
var cur;
MyGame.s5.prototype = {
    create: function() {
        this.add.image(0,0,'bg5');
        this.p5_logo = this.add.image(MyGame.GAME_WIDTH/2,40,'p1_logo').anchor.set(0.5,0);

        this.p5_title = this.add.image(50,690,'p5_title');

        this.index = 0;
        this.content = [
            "",
            "我们在大山的深处看见了这样一群孩子，时间对于他们是静止\n的…他们因为各种原因失去了双亲的照顾，独自生活在黑暗、\n局促、没有任何卫生设施的泥房中。\n“上学”对于他们而言是“奢侈品”，然而他们仍然愿意走4小\n时甚至9小时的山路去享受这“奢侈”的美好"
        ];
        this.text = this.add.text(50, 780, '', { font: "20px Courier", fill: "#eacf87"});
        this.text.lineSpacing = 10;
        this.nextLine();

        this.p5_group = this.add.group();

        this.p5_photo1 = this.p5_group.create(50,150,'p5_photo1');
        this.add.tween(this.p5_photo1).from( {x:-200,y:-300}, 1800, Phaser.Easing.Cubic.Out, true,1000);
        this.p5_photo2 = this.p5_group.create(320,180,'p5_photo2');
        this.add.tween(this.p5_photo2).from( {x:700,y:100}, 1800, Phaser.Easing.Cubic.Out, true,1100);
        this.p5_photo4 = this.p5_group.create(220,410,'p5_photo4');
        this.add.tween(this.p5_photo4).from( {x:700,y:800}, 1800, Phaser.Easing.Cubic.Out, true,1200);
        this.p5_photo3 = this.p5_group.create(50,320,'p5_photo3');
        this.add.tween(this.p5_photo3).from( {x:-300,y:500}, 1800, Phaser.Easing.Cubic.Out, true,1300).onComplete.add(function(){
            cur = this.add.image(MyGame.GAME_WIDTH/2,340,'cur');
            cur.anchor.set(0.5,0);
            this.add.tween(cur).to( {y:350}, 300, Phaser.Easing.Cubic.Out, true,0,-1,true);
            this.p5_group.callAll('events.onInputDown.add', 'events.onInputDown', function(){
                cur.kill();
            });
        },this)



        this.p5_group.setAll('inputEnabled', true);
        this.p5_group.callAll('input.enableDrag', 'input',false,true);



        /*closeButton.events.onInputDown.add(closeWindow, this);

        dragSprite.events.onDragStart.add(dragStart);*/



        this.time.events.add(Phaser.Timer.SECOND * 6, function(){
            this.nextPage = this.add.group();
            this.small_heart = this.nextPage.create(MyGame.GAME_WIDTH - 50,MyGame.GAME_HEIGHT-50,'small_heart');
            this.small_heart.anchor.set(0.5);
            this.nextPage.create(MyGame.GAME_WIDTH - 150,MyGame.GAME_HEIGHT-60,'nextPage');
            this.nextPage.setAll('inputEnabled', true);
            this.nextPage.callAll('events.onInputDown.add', 'events.onInputDown', function(){
                this.state.start('s6');
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

