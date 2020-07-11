class Polygon{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            density:1.2
        }
        this.image=loadImage("Image/images.jpg")
        this.body = Bodies.rectangle(x,y,width,height,options);  
        this.width = width;
        this.height = height;

        World.add(world,this.body);
     }

     display(){
        var pos=this.body.position
        push()
        translate(this.body.position.x, this.body.position.y);
       /* rectMode(CENTER)
        rect(0,0,this.width,this.height);*/
         imageMode(CENTER)
         image(this.image,0,0,this.width,this.height)
        pop()

     }
}