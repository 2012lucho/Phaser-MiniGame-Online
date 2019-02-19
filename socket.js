
class SocketADM{
  constructor(){
    let o              = this;
    this.ws            = '';
    this.urlWS         = 'ws://localhost:9998';
    this.game_data     = {};
    this.players_count = 0;
    this.player_data   = {id:0, name:'Player'};

    this.online = false;

    this.ws           = new WebSocket(this.urlWS);
    this.ws.onerror   = function() { o.WsError()  }
    this.ws.onopen    = function() { o.WsOpen();  }
    this.ws.onclose   = function() { o.WsClose(); }
    this.ws.onmessage = function(e){ o.WsMSG(e.data); }
  }

  WsOpen(){
    let msg = new GameMSG({ data:this.player_data });
    this.ws.send( msg.getMsg() );
    this.online = true;
  }

  WsMSG(msg){
    console.log(msg);
  }

  WsClose(){
    this.online = false;
  }

  WsError(){
    this.online = false;
  }

  registerPlayer(){
  }
}

class GameMSG{
  constructor(p){
    this.data = p.data;
  }

  getMsg(){
    return JSON.stringify(this.data);
  }
}
