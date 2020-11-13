class Dustbin {
    constructor(x,y,w,h){
var options = {
isStatic : true
}

this.img = loadImage("dustbinImg.png");
this.body = Bodies.rectangle(x,y,w,h,options);
World.add(world,this.body);
this.width = w;
this.height = h;

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push ();
        translate(pos.x,pos.y);
        rotate (angle);
        imageMode(CENTER);
        image(this.img,0,0,200,200);
        pop ();
}
    }
