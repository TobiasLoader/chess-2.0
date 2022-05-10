
// Declare VAR'S up here
var squaresizepix = 90
var boardsize = 6
let boardcol1;
let boardcol2;
let whiteking;
let boardstate;
var pieces;

function xpix(xpos){
  return xpos*squaresizepix-boardsize*squaresizepix/2;
}
function ypix(ypos){
  return ypos*squaresizepix-boardsize*squaresizepix/2;
}

function pixtoboardx(){
  return int((mouseX-W/2+boardsize*squaresizepix/2)/squaresizepix);
}
function pixtoboardy(){
  return int((mouseY-H/2+boardsize*squaresizepix/2)/squaresizepix);
}


function findpiece(x,y){
  for (var i=0; i<pieces.length; i+=1){
    if (pieces[i].x == x && pieces[i].y==y) return pieces[i];
  }
  return null;
}

function setup() {

  turn = 0
  pieceselected = null

  animation = new Animation();
  whitecaptured = 0
  blackcaptured = 0

  board = new Board(boardsize,squaresizepix,color(242, 239, 211),color(103, 133, 73));

  graphics = new Graphics(color(230),color(60),color(80),color(200));
  graphics.build();

  boardcol1 = color(242, 239, 211);
  boardcol2 = color(81, 118, 158);
  // boardcol2 = color(103, 133, 73);

  predefmoves = new PredefinedMovements();

  whitepawn1 = new WhitePawn(0,0);
  whitebishop1 = new WhiteBishop(0,1);
  whiteking = new WhiteKing(0,2);
  whitesuperman = new WhiteSuperman(0,3);
  whitebishop2 = new WhiteBishop(0,4);
  whitepawn2 = new WhitePawn(0,5);

  blackpawn1 = new BlackPawn(5,0);
  blackbishop1 = new BlackBishop(5,1);
  blackking = new BlackKing(5,2);
  blacksuperman = new BlackSuperman(5,3);
  blackbishop2 = new BlackBishop(5,4);
  blackpawn2 = new BlackPawn(5,5);

  pieces = [whitepawn1,whitebishop1,whiteking,whitesuperman,whitebishop2,whitepawn2,
            blackpawn1,blackbishop1,blackking,blacksuperman,blackbishop2,blackpawn2]

  W = window.innerWidth;
	H = window.innerHeight;
  canvas = createCanvas(W, H);

}

function drawpieces(){
  for (var i=0; i<pieces.length;i+=1){
    pieces[i].draw();
  }
}

function flatdraw() {
	background(30);
  translate(W/2,H/2);

  board.draw();

  textAlign(CENTER);
  if (pieceselected==null) fill(255,255,255,100);
  else fill(255,255,255,150);
  textFont("Tahoma",20)
  if (turn%2==0) {
    if (pieceselected==null) text("choose a white piece",0,-300);
    else text("make a move as white",0,-300);
  }
  else {
    if (pieceselected==null) text("choose a black piece",0,-300);
    else text("make a move as black",0,-300);
  }

  // if (turn%2==0 && animation.isempty() && !whiteking.captured) whiteking.drawvalidmoves();
  // if (turn%2==1 && animation.isempty() && !blacksuperman.captured) blacksuperman.drawvalidmoves();
  drawpieces();

  }

function draw(){
  if (animation.isempty()){
    // board.printstate()
    print("static")
    flatdraw();
    noLoop();
  } else {
    print("animating")
    flatdraw();
    animation.animate();
  }
}

function isPiecePlayable(p){
  return p!=null && p.player==1+turn%2 && !p.captured && !p.currentani;
}

window.onresize = function() {
  resizeCanvas(windowWidth, windowHeight);
  W = windowWidth;
  H = windowHeight;
  loop();
};

mouseClicked = function(){
  if (pieceselected==null){
    let p = findpiece(pixtoboardx(),pixtoboardy())
    if (isPiecePlayable(p)){
      pieceselected = p;
      loop();
      p.drawvalidmoves();
    }
  } else{
    board.draw();
    drawpieces();
    if (pieceselected.isvalidmove(pixtoboardx(),pixtoboardy())){
      turn += 1;
      pieceselected.move(pixtoboardx(),pixtoboardy())
      loop();
    }
    pieceselected = null;
  }
  //   if (!whiteking.captured && !whiteking.currentani){
  //     whiteking.randommove();
  //     loop();
  //   }
  // }
  // else {
  //   if (!blacksuperman.captured && !blacksuperman.currentani){
  //     blacksuperman.randommove();
  //     loop();
  //   }
  // }
}
