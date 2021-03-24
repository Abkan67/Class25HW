class Paper {
    constructor(x,y){
        this.size=40;
        this.body=Bodies.circle(x,y,this.size,{restitution:0.3, friction:0.5, density:0.4});
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        image(paperPNG,0,0,this.size+50,this.size+50)
        pop();
    }
}