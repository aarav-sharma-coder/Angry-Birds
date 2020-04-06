class Ground{
constructor(x,y,width,height){
this.width = width;
this.height= height;
var ground_options={
    isStatic: true
}

this.body = Bodies.rectangle(x,y,this.width,this.height,ground_options);
World.add(world,this.body);
}
display(){
    var pos = this.body.position;
    fill("brown");
    stroke("white");
    strokeWeight(2);
rectMode(CENTER);
rect(pos.x,pos.y,this.width,this.height);

}

}