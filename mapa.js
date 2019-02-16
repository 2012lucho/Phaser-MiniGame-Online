
class Mapa{
  constructor(cfg){
    this.escene   = cfg.escene;
    this.MAP_data = cfg.MAP_data;
    this.layers   = ['','',''];
    this.width = cfg.width; this.height = cfg.height;
    this.zoom  = 0;

    this.map = this.escene.make.tilemap({
      tileWidth: 50, tileHeight: 50,
      width: this.width, height: this.height
    });

    this.tile_set  = this.map.addTilesetImage("tiles1", null, 50, 50, 0, 0);
    this.layers[0] = this.map.createBlankDynamicLayer("level", this.tile_set);
    this.updateTiles();

    this.camera = this.escene.cameras.main;
    this.camera.setBounds(0, 0, this.map.widthInPixels, this.map.heightInPixels);

    this.cursors = this.escene.input.keyboard.createCursorKeys();

    let controlConfig = {
        camera: this.camera,
        left:   this.cursors.left,
        right:  this.cursors.right,
        up:     this.cursors.up,
        down:   this.cursors.down,
        speed:  0.05
    };

    this.controls = new Phaser.Cameras.Controls.FixedKeyControl(controlConfig);
  }

  updateTiles(){
    for(let x=0; x<this.width; x++){
      for(let y=0; y < this.height; y++){
        this.layers[0].putTileAt(this.MAP_data[x][y],x,y);
      }
    }
  }

  update(time, delta){
    this.controls.update(time, delta);
  }
}
