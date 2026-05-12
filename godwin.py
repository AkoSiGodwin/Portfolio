import turtle
import random

def draw_unique_spiral():
    """Draws a unique, colorful inward spiral with dynamic turtle shapes and RGB colors."""
    screen = turtle.Screen()
    screen.bgcolor("black")
    screen.title("Unique RGB Spiral")
    screen.colormode(255) 
    t = turtle.Turtle()
    t.speed(0)
    t.pensize(2)
    shapes = ["turtle", "arrow", "circle", "square", "triangle"]
    t.shape(random.choice(shapes))
    length = 300
    angle = 89  
    brightness = 255
    for i in range(360):
        r = (i * 5) % 256
        g = (255 - i * 3) % 256
        b = (i * 7) % 256
        t.pencolor((r, g, b))
        t.forward(length)
        t.left(angle)
        length -= 0.75
        if length < 5:
            break
        if i % 60 == 0:
            t.shape(random.choice(shapes))
    t.hideturtle()
    screen.exitonclick()
if __name__ == "__main__":
    draw_unique_spiral()