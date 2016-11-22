This is a browser version of something between a sketchpad and an Etch-A-Sketch using Jquery and Javascript  from The Odin Project's [curriculum](http://www.theodinproject.com/web-development-101/html-css)


1. Create a web page with a 16x16 grid of square divs, the divs were created using Jquery, and they are inside a container div, set with display property of table, inside the container there are a square-line divs, which are set to table-row, and square divs which are set to table-cell to make the grid.

2. Set up a hover effect so it changes the color of the square when your mouse passes over it, leaving a (pixelated) trail through your grid like a pen would, there is a select box with 5 different options of colors to choose, in the file sketchpad.js there is a change() event handler which inside has a switch statement, this statement select the color chose from user and using the method css() from Jquery add the selectec background color to the grid.

3.Add a button to the top of the screen which will clear the current grid and another button for the new grid size that send the user a popup asking for how many squares per side to make the new grid. Once entered, the new grid should be generated in the same total space as before (in this case 600px wide) and now you've got a new sketch pad.

