class Sky {
  constructor() {
    //Indicate whether it is daytime.
    this.dayTime = true
    // The rotation angle of the sun and moon.
    this.angle = 0
  }
  display() {
    push()
    fill(0,map(this.angle,0,180,0,120))
    rect(-width/2,-height/2,width,height)
    this.sun()
    this.moon()
    // Make the rotation angle change differently depending on whether it is daytime or nighttime.
    if (this.dayTime) {
      this.angle = lerp(this.angle, 0, 0.1)
    } else {
      this.angle = lerp(this.angle, 180, 0.1)
    }
    
    pop()
  }

  sun() {
    push()
    fill(250, 140, 60)
    // y-coordinate of the sun.
    let sunY = sin(this.angle - 90) * height / 2 * 0.94
    // When the sun is on the horizon.
    if (sunY < 0) {
      // the x-coordinate of the sun.
      let sunX = cos(this.angle - 90) * width / 2 * 2
      let sunSize = 100
      translate(sunX, sunY)
      ellipse(0, 0, sunSize, sunSize)
      // Change the blend mode.
      blendMode(ADD)
      for (let i = 0; i < 20; i++) {
        // Draw the rays of the sun.
        let angle = map(i, 0, 20, 0, 360)
        let lineX1 = cos(angle) * 55
        let lineY1 = sin(angle) * 55
        // The length of the rays.
        let leng = 120 + sin(angle * 10 + frameCount * 5) * 10
        let lineX2 = cos(angle) * leng
        let lineY2 = sin(angle) * leng
        strokeWeight(5)
        stroke(255, 100)
        line(lineX1, lineY1, lineX2, lineY2)
      }
      for (let i = 0; i < 20; i++) {
        fill(255, 90, 50, 8)
        noStroke()
        // Draw the sunlight.
        let maxRadius = map(mouseY, 0, height, 3, 18)
        let radius = map(i, 0, 20, sunSize, sunSize * random(maxRadius, maxRadius + 0.5))
        ellipse(0, 0, radius, radius)
      }
    }
    pop()

  }
  moon() {
    push()
    fill(255, 230, 160)
    // Calculate the y-coordinate of the moon.
    let moonY = sin(this.angle + 90) * height / 2 * 0.94
    if (moonY < 0) {
      // Calculate the x-coordinate of the sun.

      let moonX = cos(this.angle + 90) * width / 2 * 2
      let moonSize = 100
      translate(moonX, moonY)
      ellipse(0, 0, moonSize, moonSize)
      // Change the blend mode.

      blendMode(ADD)
      // Draw the moonlight.
      for (let i = 0; i < 10; i++) {
        fill(255, 230, 160, 8)
        noStroke()
        let maxRadius = map(mouseY, 0, height, 1, 3)
        let radius = map(i, 0, 10, moonSize, moonSize * maxRadius)
        ellipse(0, 0, radius, radius)
      }
    }
    pop()

  }
}