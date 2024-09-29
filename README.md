# odin-etch-a-sketch

## A webpage with a canvas that behaves like an Etch-A-Sketch

The webpage contains a square grid "canvas" split into user-specified dimensions. Each square in the grid starts out translucent and gets progressively more opaque each time the mouse re-enters a square. It takes 5 interactions to make a square of the grid fully opaque. The default color is black but it can be change, see below.<br><br>The idea for this project was a provided by "The Odin Project" curriculum.

There are two buttons:
1. Resize grid - Prompts the user to input a grid size and creates a new grid inside the canvas. Also erases the colors from the previous grid.
2. Reset grid - Erases the current canvas colors without resizing.

And two checkboxes:
1. Randomize colors - When the mouse enters a square, it fills with a randomly generated color, even if the square has already been colored.

2. Borders - Toggles borders of the the grid squares on/off. Helps the user visualize the grid.


# How to install/run
- Fork and clone this repository
- Open index.html file

# Future features
- Allow users to import a color palette from websites like coolors.co by pasting a URL.

# Bugs
The mouse cursor doesn't change when hovering over the buttons and checkboxes