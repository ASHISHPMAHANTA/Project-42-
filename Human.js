class Human {
    constructor(x,y){
        var options = {
            isStatic: true
        }
        this.image = loadImage("images/Walking Frame/walking_1.png");
        this.human = Bodies.circle(x,y,50,options);
        this.radius = 50;
        World.add(world, this.human)
    }

    display(){
        var pos = this.human.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y+70,300,300);

      }
}