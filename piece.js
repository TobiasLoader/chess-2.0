
class Piece {
  constructor(name, board, x, y, graphic, movement, player, animation) {
    this.name = name;
    this.board = board;
    this.x = x;
    this.y = y;
    this.graphic = graphic;
    this.movement = movement;
    this.player = player
    this.board.addtoboard(this.x,this.y,this.player);
    this.anix = this.x;
    this.aniy = this.y;
    this.animation = animation
    this.currentani = false
    this.captured = false
  }

  draw(){
    if (!this.currentani){
      image(this.graphic,xpix(this.x),ypix(this.y));
    }
  }

  anispeed(init,aim,current){
    return (-(current-init)*(current-aim)/2 + 1)/20;
  }

  drawanimation(initx,inity,aimx,aimy){
    this.currentani = true
    if (aimx-initx>0) {if (this.anix<aimx) {this.anix += this.anispeed(initx,aimx,this.anix)} else {this.anix=aimx}}
    if (aimx-initx<0) {if (this.anix>aimx) {this.anix -= this.anispeed(initx,aimx,this.anix)} else {this.anix=aimx}}
    if (aimy-inity>0) {if (this.aniy<aimy) {this.aniy += this.anispeed(inity,aimy,this.aniy)} else {this.aniy=aimy}}
    if (aimy-inity<0) {if (this.aniy>aimy) {this.aniy -= this.anispeed(inity,aimy,this.aniy)} else {this.aniy=aimy}}
    image(this.graphic,xpix(this.anix),ypix(this.aniy));
    if (this.anix==aimx && this.aniy==aimy) {
      if (this.board.isopponentpiece(aimx,aimy,this.player)){
        findpiece(aimx,aimy,this.player).becomecaptured()
      }
      this.currentani = false
      this.x = aimx;
      this.y = aimy;
      this.animation.anidone();

      this.board.addtoboard(this.x,this.y,this.player);
    }
  }

  randommove(){
    var filtermoves = this.movement.filter(this.x,this.y,this.board,this.player);
    if (filtermoves != null){
      var i = int(random(0,filtermoves.length))
      this.move(filtermoves[i].x,filtermoves[i].y)
    }
  }

  drawvalidmoves(){
    if (!this.currentani){
      var filtermoves = this.movement.filter(this.x,this.y,this.board,this.player);
      for (var i=0; i<filtermoves.length; i+=1){
        this.board.highlightsquare(filtermoves[i].x,filtermoves[i].y)
      }
    }
  }

  isvalidmove(x,y){
    return this.movement.validmove(x,y,this.x,this.y,this.board,this.player)
  }

  becomecaptured(){
    if (this.player==1) {this.x=-2;this.y=whitecaptured;whitecaptured+=1;}
    if (this.player==2) {this.x=this.board.size+1;this.y=blackcaptured;blackcaptured+=1;}
    this.captured = true;
  }

  move(tox,toy){
    this.board.removefromboard(this.x,this.y,this.player)
    this.animation.addani(this,{x:this.x,y:this.y},{x:tox,y:toy})
  }
}


class WhitePawn extends Piece {
  constructor(x, y){
    super("White Pawn", board, x, y, graphics.whitepawngraphic, predefmoves.pawnrightmoves, 1, animation);
  }
}
class BlackPawn extends Piece {
  constructor(x, y){
    super("Black Pawn", board, x, y, graphics.blackpawngraphic, predefmoves.pawnleftmoves, 2, animation);
  }
}
class WhiteKing extends Piece {
  constructor(x, y){
    super("White King", board, x, y, graphics.whitekinggraphic, predefmoves.kingmoves, 1, animation);
  }
}
class BlackKing extends Piece {
  constructor(x, y){
    super("Black King", board, x, y, graphics.blackkinggraphic, predefmoves.kingmoves, 2, animation);
  }
}
class WhiteSuperman extends Piece {
  constructor(x, y){
    super("White Superman", board, x, y, graphics.whitesupermangraphic, predefmoves.allmoves, 1, animation);
  }
}
class BlackSuperman extends Piece {
  constructor(x, y){
    super("Black Superman", board, x, y, graphics.blacksupermangraphic, predefmoves.allmoves, 2, animation);
  }
}
class WhiteBishop extends Piece {
  constructor(x, y){
    super("White Bishop", board, x, y, graphics.whitediamondgraphic, predefmoves.diagmoves, 1, animation);
  }
}
class BlackBishop extends Piece {
  constructor(x, y){
    super("Black Bishop", board, x, y, graphics.blackdiamondgraphic, predefmoves.diagmoves, 2, animation);
  }
}
