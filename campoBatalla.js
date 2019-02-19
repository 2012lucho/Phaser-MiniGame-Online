
class CampoBatalla{
    constructor(config){
      this.config   = config;
      this.escena   = new Phaser.Scene(this.name);
      config.scene  = this.escena;
      this.map      = -1;
      this.texts    = {'t':'', 'd':''};
      this.preload();
    }

    preload(){
      let o = this;
      this.escena.preload = function() {
        this.load.image('tiles1' ,'./img/tiles.png');
        this.load.image('point'  ,'./img/point.png');
        this.load.image('a1','./img/a1.png');
        this.load.image('m_a1','./img/m_a1.png');
      }
    }

    start(){
      let e = this.escena;
      let o = this;

      this.escena.create = function(){

        let GM = new MapGenerator({escene:o.escena, width:300, height:100});
        o.mapa = GM.getMap();

        // Textos
        o.texts.t = this.add.text(5, 0).setScrollFactor(0).setFontSize(13).setColor('#ffffff');
        o.texts.t.depth = 40000;
        o.texts.t.fontWeight = 'bold';
        o.texts.d = this.add.text(5, 18).setScrollFactor(0).setFontSize(10).setColor('#ddddff');
        o.texts.d.depth = 40000;

        this.input.setDefaultCursor('url(./img/point.png), pointer');
        this.input.addPointer(1);
      }

      this.escena.update = function(time, delta){
        o.mapa.update(time, delta);

        if (o.config.game.WS.online){
          o.texts.t.setText('');
        } else {
          o.texts.t.setText('Imposible conectarse con el servidor');
        }
      }

      this.game = new Phaser.Game(this.config);
    }

}
