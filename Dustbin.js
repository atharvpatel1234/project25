class Wall{
  constructor(x,y,width,height){
    var options={
        isStatic:true,
        friction:0.5,
        density:1.5
    }
  this.leftWall = bodies.rectangle(x,y,width,height,options);
  this.rightWall = bodies.rectangle(x,y,width,height,options);
  this.width = width;
  this.height = height;
  World.add(world,this.leftWall)
  World.add(world,this.rightWall)
  this.image = loadImage("images/dustbingreen.png");
}


display(){
    push();
    translate(this.leftWall.position.x,this.leftWall.position.y);
    imageMode(CENTRE)
    this.image(this.image,54,0,140,165)
    //rectMode(CENTRE);
    //rect(0,0,this.width,this.height);
    //rect(0+108,0,this.width,this.height);
    pop();
}
}