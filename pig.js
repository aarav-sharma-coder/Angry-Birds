class Pig {
    constructor(x,y){
        var pig_options = {
            'restitution':0.8,
            'friction':0.9,
            'density':0.9,
           // isStatic: true
        }
        this.body = Bodies.rectangle(x,y,50,50,pig_options);
        World.add(world, this.body);
this.width = 50;
this.height = 50;

    }
    display(){
        var pos =this.body.position;
        var angle= this.body.angle;
        push();
        translate(pos.x,pos.y);
      rotate(angle);
        rectMode(CENTER);
        fill("red");
        
        rect(0, 0 , this.width, this.height);
        pop();
      }
}