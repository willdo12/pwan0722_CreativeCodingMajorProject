class Rain {
  constructor() {
// Set the initial coordinates and velocity of the raindrops.
    this.x=random(-width/2,width/2)
    this.y=-height*0.5-50
    this.velX=3
    this.velY=random(10,20)
  }
  display() {
    // creates raindrops
    stroke(255,100)
    strokeWeight(2)
    line(this.x,this.y,this.x+this.velX,this.y+this.velY)
  }
  drop(){
    // this let the rain drops
    this.x+=this.velX
    this.y+=this.velY
  }
}