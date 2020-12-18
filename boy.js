class Boy {
    constructor(x,y,height,width){
    var options={
        isStatic:true
    }

    this.image = loadImage("boy.png");
this.body = Bodies.rectangle(x,y,width,height,options);
    this.height=height;
    this.width=width;
    World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        imageMode(CENTER);
        //image.scale=0.5;
        image(this.image,0, 0, this.width, this.height);
        pop();
    }
}