MyGame.Preloader = function(game){
};
MyGame.Preloader.prototype = {
    start : function(){
        this.load.image('blink','assets/blink.png');
        this.load.image('p1_logo','assets/p1_logo.png');
        this.load.image('heart_1','assets/heart_1.png');
        this.load.image('heart_2','assets/heart_2.png');
        this.load.image('heart_3','assets/heart_3.png');
        this.load.image('heart_4','assets/heart_4.png');
        this.load.image('heart_5','assets/heart_5.png');
        this.load.image('big_heart','assets/big_heart.png');
        this.load.image('p1_next','assets/p1_next.png');

        this.load.image('bg2','assets/bg2.jpg');
        this.load.image('p2_scrollText','assets/p2_scrollText.png');
        this.load.image('zhezhao','assets/zhezhao.png');
        this.load.image('biao','assets/biao.png');
        this.load.image('hour','assets/hour.png');
        this.load.image('mins','assets/mins.png');
        this.load.image('nextPage','assets/nextPage.png');
        this.load.image('small_heart','assets/small_heart.png');

        this.load.image('bg3','assets/bg3.jpg');
        this.load.image('p3_img','assets/p3_img.png');
        this.load.image('p3_title','assets/p3_title.png');
        this.load.image('p3_logoList','assets/p3_logoList.png');

        this.load.image('bg4','assets/bg4.jpg');
        this.load.image('p4_xinfeng','assets/p4_xinfeng.png');

        this.load.image('bg5','assets/bg5.jpg');
        this.load.image('p5_title','assets/p5_title.png');
        this.load.image('p5_photo1','assets/p5_photo1.png');
        this.load.image('p5_photo2','assets/p5_photo2.png');
        this.load.image('p5_photo3','assets/p5_photo3.png');
        this.load.image('p5_photo4','assets/p5_photo4.png');

        this.load.image('p6_title','assets/p6_title.png');
        this.load.image('p6_photo1','assets/p6_photo1.png');
        this.load.image('p6_photo2','assets/p6_photo2.png');
        this.load.image('p6_photo3','assets/p6_photo3.png');
        this.load.image('p6_photo4','assets/p6_photo4.png');
        this.load.image('p6_photo5','assets/p6_photo5.png');

        this.load.image('p7_title','assets/p7_title.png');
        this.load.image('now','assets/now.png');
        this.load.image('p7_photo1','assets/p7_photo1.png');
        this.load.image('p7_photo2','assets/p7_photo2.png');
        this.load.image('p7_photo3','assets/p7_photo3.png');
        this.load.image('p7_photo4','assets/p7_photo4.png');
        this.load.image('p7_photo5','assets/p7_photo5.png');
        this.load.image('p7_photo6','assets/p7_photo6.png');

        this.load.image('bg8','assets/bg8.jpg');
        this.load.image('p8_title','assets/p8_title.png');
        this.load.image('p8_text1','assets/p8_text1.png');
        this.load.image('p8_text2','assets/p8_text2.png');
        this.load.image('corona', 'assets/small_heart.png');

        this.load.image('bg9','assets/bg9.jpg');
        this.load.image('p9_logo1','assets/p9_logo1.png');
        this.load.image('p9_logo2','assets/p9_logo2.png');
        this.load.image('p9_logo3','assets/p9_logo3.png');
        this.load.image('p9_text1','assets/p9_text1.png');
        this.load.image('p9_text2','assets/p9_text2.png');
        this.load.image('p9_text3','assets/p9_text3.png');

        this.load.image('bg10','assets/bg10.jpg');
        this.load.image('p10_text','assets/p10_text.png');
        this.load.image('cur','assets/cur.png');

        this.load.start();

    },

    fileComplete : function(progress){
        this.text.setText( + progress + "%");
    },
    loadComplete : function(){
        this.state.start('s1');
    },
    create: function() {
        this.start();
        this.load.onFileComplete.add(this.fileComplete, this);
        this.load.onLoadComplete.add(this.loadComplete, this);
        this.text = this.add.text(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2-50, '', { fill: '#ffffff' });
        this.text.anchor.set(0.5);

        this.text2 = this.add.text(MyGame.GAME_WIDTH/2, MyGame.GAME_HEIGHT/2, 'Мгдижа...', { fill: '#ffffff' });
        this.text2.anchor.set(0.5);
    }
};