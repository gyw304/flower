MyGame.s6 = function(game) {

};


MyGame.s6.prototype = {
    create: function() {

        this.add.image(0,0,'bg5');
        this.p5_logo = this.add.image(MyGame.GAME_WIDTH/2,40,'p1_logo').anchor.set(0.5,0);

        this.p5_title = this.add.image(MyGame.GAME_WIDTH-150,690,'p6_title').anchor.set(0.5,0);

        this.index = 0;
        this.content = [
            "",
            "带着我们的爱,盛时踏入了大凉山...\n2014盛时“珍珠计划”是爱的开始，是一趟洗涤心灵的感恩\n之旅。\n凉山的孩子让我们重拾回曾经的单纯、善良和纯朴，而我们\n为孩子们拾回快乐、温暖和爱..."
        ];
        this.text = this.add.text(50, 780, '', { font: "20px Courier", fill: "#eacf87"});
        this.text.lineSpacing = 10;
        this.nextLine();

        this.photoGroup = this.add.group();

        this.photo2 = this.photoGroup.create(270,150,'p6_photo2');
        this.add.tween(this.photo2).from( {x:700,y:100}, 1800, Phaser.Easing.Cubic.Out, true,1100);
        this.photo4 = this.photoGroup.create(360,290,'p6_photo4');
        this.add.tween(this.photo4).from( {x:700,y:500}, 1800, Phaser.Easing.Cubic.Out, true,1200);



        this.photo1 = this.photoGroup.create(10,130,'p6_photo1');
        this.add.tween(this.photo1).from( {x:-300,y:-300}, 1800, Phaser.Easing.Cubic.Out, true,1000);

        this.photo3 = this.photoGroup.create(50,370,'p6_photo3');
        this.add.tween(this.photo3).from( {x:-300,y:500}, 1800, Phaser.Easing.Cubic.Out, true,1300);

        this.photo5 = this.photoGroup.create(250,320,'p6_photo5');
        this.add.tween(this.photo5).from( {x:-300,y:500}, 1800, Phaser.Easing.Cubic.Out, true,1400).onComplete.add(function(){
            cur = this.add.image(MyGame.GAME_WIDTH/2,340,'cur');
            cur.anchor.set(0.5,0);
            this.add.tween(cur).to( {y:350}, 300, Phaser.Easing.Cubic.Out, true,0,-1,true);
            this.photoGroup.callAll('events.onInputDown.add', 'events.onInputDown', function(){
                cur.kill();
            });
        },this)

        this.photoGroup.setAll('inputEnabled', true);
        this.photoGroup.callAll('input.enableDrag', 'input',false,true);


        this.time.events.add(Phaser.Timer.SECOND * 6, function(){
            this.nextPage = this.add.group();
            this.small_heart = this.nextPage.create(MyGame.GAME_WIDTH - 50,MyGame.GAME_HEIGHT-50,'small_heart');
            this.small_heart.anchor.set(0.5);
            this.nextPage.create(MyGame.GAME_WIDTH - 150,MyGame.GAME_HEIGHT-60,'nextPage');
            this.nextPage.setAll('inputEnabled', true);
            this.nextPage.callAll('events.onInputDown.add', 'events.onInputDown', function(){
                this.state.start('s7');
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

