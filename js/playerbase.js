class Playerbase 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    this.image = loadImage ("assets/base.png")
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  show() {
    var pos = this.body.position;
    push();
    imageMode(CENTER);
    stroke(255);
    fill(127);
    image(this.image,pos.x, pos.y, this.w, this.h);
    pop();
  }
  
}