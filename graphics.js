
class Graphics {
  constructor(wprimary,bprimary,wsecond,bsecond){
    this.wprimary = wprimary;
    this.bprimary = bprimary;
    this.wsecond = wsecond;
    this.bsecond = bsecond;
  }

  buildking(c1,c2){
    var king = createGraphics(squaresizepix,squaresizepix);
    king.translate(squaresizepix/2,squaresizepix/2);
    king.fill(c1);
    king.strokeWeight(2);
    king.stroke(c2);
    king.rectMode(CENTER);
    king.rect(0,0,2*squaresizepix/3,2*squaresizepix/3,squaresizepix/8);
    return king;
  }
  buildpawn(c1,c2){
    var pawn = createGraphics(squaresizepix,squaresizepix);
    pawn.translate(squaresizepix/2,squaresizepix/2);
    pawn.fill(c1);
    pawn.strokeWeight(2);
    pawn.stroke(c2);
    pawn.ellipse(0,0,squaresizepix/2,squaresizepix/2);
    return pawn;
  }
  buildsuperman(c1,c2){
    var superman = createGraphics(squaresizepix,squaresizepix);
    superman.translate(squaresizepix/2,squaresizepix/2);
    superman.fill(c1);
    superman.strokeWeight(2);
    superman.stroke(c2);
    superman.triangle(0,squaresizepix/3,squaresizepix/3,-sqrt(3)*squaresizepix/6,-squaresizepix/3,-sqrt(3)*squaresizepix/6);
    return superman;
  }
  builddiamond(c1,c2){
    var diamond = createGraphics(squaresizepix,squaresizepix);
    diamond.translate(squaresizepix/2,squaresizepix/2);
    diamond.fill(c1);
    diamond.strokeWeight(2);
    diamond.stroke(c2);
    diamond.beginShape();
    diamond.vertex(0, squaresizepix/3);
    diamond.vertex(squaresizepix/8, squaresizepix/8);
    diamond.vertex(squaresizepix/3, 0);
    diamond.vertex(squaresizepix/8, -squaresizepix/8);
    diamond.vertex(0, -squaresizepix/3);
    diamond.vertex(-squaresizepix/8, -squaresizepix/8);
    diamond.vertex(-squaresizepix/3, 0);
    diamond.vertex(-squaresizepix/8, squaresizepix/8);
    diamond.vertex(0, squaresizepix/3);
    diamond.endShape();
    return diamond;
  }

  build(){
    this.whitekinggraphic = this.buildking(this.wprimary,this.wsecond);
    this.blackkinggraphic = this.buildking(this.bprimary,this.bsecond);
    this.whitepawngraphic = this.buildpawn(this.wprimary,this.wsecond);
    this.blackpawngraphic = this.buildpawn(this.bprimary,this.bsecond);
    this.whitesupermangraphic = this.buildsuperman(this.wprimary,this.wsecond);
    this.blacksupermangraphic = this.buildsuperman(this.bprimary,this.bsecond);
    this.whitediamondgraphic = this.builddiamond(this.wprimary,this.wsecond);
    this.blackdiamondgraphic = this.builddiamond(this.bprimary,this.bsecond);

  }
}
