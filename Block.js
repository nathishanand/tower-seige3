class Block{
  constructor(x, y, width, height){
    var options={
      restitution=0.5
    }
    this.body=Bodies.rectangle(x,y,width,height);
    this.width=width
    this.height=height
    this.Visiblity = 255;
    World.add(world, this.body);
  }

  score(){
 if(this.Visiblity<0 && this.Visiblity>-105){
   score++;
 }
}
display(){
 // console.log(this.body.speed);
  if(this.body.speed < 5){
    var angle = this.body.angle;
    var pos= this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    rect(0,0,this.width, this.height);
    pop(); 
  }
  else{
   
    push();
    World.remove(world, this.body);
    this.Visiblity = this.Visiblity - 5;
   // tint(250,this.Visiblity);
   // rect(this.body.position.x, this.body.position.y, 50, 50)
    pop();

   
  }
  
}
}; 