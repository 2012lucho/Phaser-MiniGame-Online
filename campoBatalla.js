
class CampoBatalla{
    constructor(config){
      this.config      = config;
      this.escena      = new Phaser.Scene(this.name);
      config.scene     = this.escena;
      this.mapa_actual = -1;
      this.tile_den    = [];
      this.texts       = {'t':'', 'd':''};
      this.preload();
    }

    preload(){
      let o = this;
      this.escena.preload = function() {
        for(let c=0;c<19;c++){
          this.load.image('tile'+(c+1),'./img/t'+(c+1)+'.png');
          o.tile_den[c] = { 'den':'tile'+(c+1) };
        }
        this.load.image('point'  ,'./img/point.png');
        this.load.image('a1','./img/a1.png');
        this.load.image('m_a1','./img/m_a1.png');
      }
    }

    start(){
      let e = this.escena;
      let o = this;

      this.escena.create = function(){

        let mapConfig  = {
          "tiles_x":64,
          "tiles_y":64,
          "tiles_z":1
        };

        let GM = new MapGenerator();

        // Textos
        o.texts.t = this.add.text(5, 0).setScrollFactor(0).setFontSize(13).setColor('#ffffff');
        o.texts.t.depth = 40000;
        o.texts.t.fontWeight = 'bold';
        o.texts.d = this.add.text(5, 18).setScrollFactor(0).setFontSize(10).setColor('#ddddff');
        o.texts.d.depth = 40000;

        this.input.setDefaultCursor('url(./img/point.png), pointer');
        this.input.addPointer(1);
      }

      this.escena.update = function(){

      }

      this.game = new Phaser.Game(this.config);
    }

}
