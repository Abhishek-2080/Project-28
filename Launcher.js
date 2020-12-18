class Launcher{
    constructor(bodyA,bodyB,OffsetX,OffsetY){
        this.OffsetX = OffsetX;
        this.OffsetY = OffsetY;
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            //length: 10
            }
            //this.bodyA = pointA;
            //this.bodyB = pointB;
            this.rope = Constraint.create(options);
            World.add(world, this.rope);  
    }
fly(){
    this.launcher.body = null
}

attach(){
    this.BodyA = launcher.body;
}
    display(){
        
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;
            
            strokeWeight(1);
            line(pointA.x,pointA.y,pointB.x, pointB.y);
        
    
    }
}