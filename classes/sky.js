class Sky {
  constructor() {
    //表示是否白天
    this.dayTime = true
    // 日月的旋转角度
    this.angle = 0
  }
  display() {
    push()
    fill(0,map(this.angle,0,180,0,120))
    rect(-width/2,-height/2,width,height)
    this.sun()
    this.moon()
    // 让旋转角度根据在白天和夜晚的情况下去进行不同的变化
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
    // 计算太阳的y坐标
    let sunY = sin(this.angle - 90) * height / 2 * 0.94
    // 当太阳在海平面上的时候
    if (sunY < 0) {
      // 计算太阳的x坐标
      let sunX = cos(this.angle - 90) * width / 2 * 2
      let sunSize = 100
      translate(sunX, sunY)
      ellipse(0, 0, sunSize, sunSize)
      // 改变混合模式
      blendMode(ADD)
      for (let i = 0; i < 20; i++) {
        // 绘制太阳的射线
        let angle = map(i, 0, 20, 0, 360)
        let lineX1 = cos(angle) * 55
        let lineY1 = sin(angle) * 55
        // 射线的长度
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
        // 绘制太阳的光照
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
    // 计算月亮的y坐标
    let moonY = sin(this.angle + 90) * height / 2 * 0.94
    if (moonY < 0) {
      // 计算太阳的x坐标

      let moonX = cos(this.angle + 90) * width / 2 * 2
      let moonSize = 100
      translate(moonX, moonY)
      ellipse(0, 0, moonSize, moonSize)
      // 改变混合模式

      blendMode(ADD)
      // 绘制月亮的光照
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