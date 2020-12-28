class Paper {


    constructor () {

        var options = {

            isStatic : false,
            restitution : 0.3,
            friction : 0.5,
            density : 1.2
            
        }


        this.body = Bodies.circle(100,0,50,options);
        
        
        World.add(world,this.body);
    }

    display() {

        var pos = this.body.position;


        push ();
        ellipseMode(CENTER);
        fill("yellow");
        stroke("orange");
        strokeWeight (4);
        ellipse(pos.x,pos.y,50,50);
        pop ();
        
    }
}