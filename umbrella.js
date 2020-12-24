class Umbrella {

    constructor(x,y){
        var options= {
            isStatic:true,
            restitution: 0.1
        }
        this.body=Bodies.circle(x,y,50,options)
World.add(world,this.body)
this.image= loadImage("images/Walking Frame/walking_2.png")
    }
    
    
    display(){
    var pos= this.body.position
imageMode(CENTER)
image(this.image, pos.x,pos.y+70,300,300)


    }
    
    }