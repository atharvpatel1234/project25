class Paper{
 constructor(x,y){
  var options={
      isStatic:false,
      restitution:0.3,
      friction:0.5,
      density:1.2
  }
 this.radius = 20; 
 this.body = Bodies.circle(x,y,this.radius,options);
 this.x = x;
 this.y = y;
 this.image = loadImage("images/paper.png")
 World.add(world,this.body)
}

display(){
    push();
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTRE);
    this.image(this.image,0,0,this.radius*3.2,this.radius*3);
    pop();
}
}
  