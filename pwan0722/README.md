# pwan0722_CreativeCodingMajorProject


## **Part 1：Instructions on how to interact with the work**

### Input consists of three parts: 
1. Click the mouse to switch between day and night: After pressing the mouse, the day and night will be switched, the building windows will change, and the sun will become the moon and vice versa.
2. Press the keyboard to make it rain,
3. Move the mouse up and down to change the lighting range


## **Part 2：Details of your individual approach to animating the group code.**

1. I selected User Input. our group were worked on the Claude Monet, Saint Georges Majeur au Crépuscule,

2. First, I distinguished between day and night in the building class and controlled the windows in different states. Then, to create the effect of falling raindrops, I created a rain class and used the [constructor](https://www.w3schools.com/java/java_constructors.asp) to define the initial position and speed of the raindrops. Then I drew the raindrops to create the effect of rain after pressing the space bar. To further refine the effect of day and night, I added a sky class, defined it using the constructor, and used [blendMode (ADD)](https://p5js.org/reference/#/p5/blendMode). The colors of overlapping pixels are added. This creates brighter, more intense colors because the color values ​​of the source and destination are added together. And the range of light changes with the mouse up and down.

3. my [inspiration](https://www.reddit.com/r/gamemaker/comments/f9bxbz/tip_you_can_use_the_add_blend_mode_for_some_quick/) comes from a reddit,This reddit post helped me figure out how to create lighting effects to achieve the effects of sunlight and moonlight.
![An image of my inspiration](pwan0722/assets/Inspiration.png)
