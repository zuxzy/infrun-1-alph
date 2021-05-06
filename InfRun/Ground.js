class Ground{
    constructor(x, y, width, height){
      var bodyOptions = {
          "isStatic": true
      }
      this.body = Bodies.rectangle(x, y, width, height, bodyOptions);
      this.width = width;
      this.height = height;
      World.add(world, this.body)
  }
  display(){
      noStroke();
      var pos = this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("rgb(63,42,20)");
      rect(0, 0, this.width, this.height);
      pop();
  }
}