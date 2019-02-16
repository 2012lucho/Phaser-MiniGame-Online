
class MapGenerator{
  constructor(cfg){
      this.escene = cfg.escene;
      //mapa inicial para hacer pruebas
      this.MAP_data = [];
      this.width = cfg.width; this.height = cfg.height;

      this.generateFloor();

      this.mapa = new Mapa({
        escene:   this.escene,
        MAP_data: this.MAP_data,
        width:this.width, height:this.height
      });
  }

  generateFloor(){
    for(let x=0;x<this.width; x++){
      this.MAP_data.push([]);
      for (let y=0;y<this.height;y++){
        this.MAP_data[x].push([]);
        if (x%2==0 && y%2==0){ this.MAP_data[x][y] = 0; } else { this.MAP_data[x][y] = 1; }

      }
    }
  }

  getMap(){ return this.mapa; }
}
