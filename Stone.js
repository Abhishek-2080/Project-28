class Stone{
    constructor(x,y,height,width){
        var options ={
            isStatic:true,
            restitution:0,
            friction:1.0,
            density:1.2
        }
        this.image=loadImage("stone.png");
    this.body = Bodies.rectangle(x,y,height,width,options);
    this.height=height;
    this.width=width;
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image,0, 0, this.height,this.width);
        pop();
    }
}