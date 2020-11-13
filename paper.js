class Paper {
    constructor(x,y){
    this.img = loadImage("paper.png");
        var options = {
            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
        }
this.body = Bodies.circle(x,y,20,options);
World.add(world,this.body);

    }
display(){
    
    var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);
        image(this.img,0,0,58,58);
        pop ();
}

}





