
class Board {
  constructor(size,squarepix,boardcol1,boardcol2) {
    this.size = size;
    this.squarepix = squarepix
    this.boardcol1 = boardcol1
    this.boardcol2 = boardcol2
    this.boardstate = []
    for (var i=0; i<this.size; i+=1){
      this.boardstate.push([])
      for (var j=0; j<this.size; j+=1){
        this.boardstate[i].push(0)
      }
    }

  }

  addtoboard(x,y,player){
    this.boardstate[y][x]=player;
  }
  removefromboard(x,y,player){
    this.boardstate[y][x]=0;
  }
  isfree(x,y,player){
    if (x<0 || x>=this.size || y<0 || y>=this.size) return false
    return (this.boardstate[y][x]!=player);
  }
  isopponentpiece(x,y,player){
    return (this.boardstate[y][x]!=0 && this.boardstate[y][x]!=player);
  }

  printstate(){
    print(this.boardstate)
  }

  draw(){
    stroke(240);
    fill(boardcol1);
    strokeWeight(2)
    rect(xpix(0),ypix(0),this.size*this.squarepix,this.size*this.squarepix);
    noStroke();
    fill(boardcol2);
    for (var i=0; i<this.size; i+=1){
      for (var j=0; j<this.size; j+=1){
        if ((i+j)%2 != 0){
          rect(xpix(i),ypix(j),this.squarepix,this.squarepix);
        }
      }
    }
  }

  highlightsquare(x,y){
    push()
    fill(181, 65, 65,50);
    rectMode(CENTER)
    rect(xpix(x+0.5),ypix(y+0.5),this.squarepix,this.squarepix)
    pop()
  }
}
