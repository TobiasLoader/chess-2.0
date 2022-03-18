
class Movement {
  constructor(moves) {
    this.moves = moves;
  }

  filter(px,py,board,player){
    var filtered = []
    for (var i=0; i<this.moves.length; i+=1){
      if (board.isfree(px+this.moves[i].x,py+this.moves[i].y,player)){
        filtered.push({x:px+this.moves[i].x,y:py+this.moves[i].y})
      }
    }
    return filtered
  }

  validmove(newx,newy,px,py,board,player){
    var filtered = this.filter(px,py,board,player);
    for (var i=0; i<filtered.length; i+=1){
      if (newx==filtered[i].x && newy==filtered[i].y) return true
    }
    return false
  }

}

class PredefinedMovements {
  constructor(){
    this.kingmoves = new Movement([{x:0,y:1},{x:1,y:1},{x:1,y:0},{x:1,y:-1},{x:0,y:-1},{x:-1,y:-1},{x:-1,y:0},{x:-1,y:1}])
    this.pawnrightmoves = new Movement([{x:1,y:0}])
    this.pawnleftmoves = new Movement([{x:-1,y:0}])

    var allm = []
    for (var i=-boardsize+1; i<boardsize;i+=1){
      for (var j=-boardsize+1; j<boardsize;j+=1){
        allm.push({x:i,y:j})
      }
    }
    this.allmoves = new Movement(allm)

    var diagm = []
    for (var i=1; i<boardsize;i+=1){
      diagm.push({x:i,y:i})
      diagm.push({x:i,y:-i})
      diagm.push({x:-i,y:i})
      diagm.push({x:-i,y:-i})
    }
    this.diagmoves = new Movement(diagm)
  }
}
