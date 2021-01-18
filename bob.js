class bob {
    constructor(x,y){
        this.body = Bodies.rectangle(x,y,50,50,{restitution:0.5,isStatic : true});
        this.height = height;
        this.width = width;
        World.add(world,this.body);
    }

    display(){
      var angle = this.body.angle;
      fill("green");
      angleMode(RADIANS);
      push();
      translate(this.body.position.x,this.body.position.y)
      rotate(angle);
      rectMode(CENTER)
      rect(0,0,50,50);
      pop();
    }
}