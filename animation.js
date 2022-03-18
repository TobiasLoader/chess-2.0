
class Queue {
  constructor() {
    this.q = [];
  }
  enqueue(e){
    this.q.push(e);
  }
  dequeue(){
    let r = this.q[0];
    this.q.splice(0,1);
    return r;
  }
  peek(){
    return this.q[0];
  }
  size(){
    return this.q.length;
  }
}

class Animation {
  constructor() {
    this.queue = new Queue();
  }

  addani(piece,init,target){
    this.queue.enqueue({p:piece,i:init,t:target})
  }

  animate(){
    var a = this.queue.peek();
    a.p.drawanimation(a.i.x,a.i.y,a.t.x,a.t.y);
  }

  anidone(){
    this.queue.dequeue();
  }

  isempty(){
    return (this.queue.size()==0);
  }
  print(){
    print(this.queue)
  }
}
