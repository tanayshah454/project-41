class Drops{
    constructor(x,y){
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
    this.body=ellipse(x,y,options)
}
display(){
    push()
    elllipseMode(CENTER)
    ellipse(this.body.position.x,this.body.position.y)
    pop()
}
}