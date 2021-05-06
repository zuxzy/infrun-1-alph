class Character{
    constructor(x, y, width, height){
      var bodyOptions = {
          "isStatic": false
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
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
  }
}