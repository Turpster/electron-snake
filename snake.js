const $ = require("./lib/jquery-3.3.1.min.js")

const width = 300, height = 500;
  
const gridw = 15
const gridh = 25
var grid;

$(document).ready(() => 
{
    const fps = 60
    
    var c = document.getElementById("snake");

    grid = [25]
    function loop()
    {
        let ctx = c.getContext("2d");

        ctx.fillColor = 'red'

        grid.array.forEach(element => {
            ctx.fillRect(element.x, element.y, element.width, element.height)
        });

    }
    
    c.addEventListener('click', (event) => {
        let nodeConsole = require('console');
        let myConsole = new nodeConsole.Console(process.stdout, process.stderr);
        myConsole.log("You clicked on the canvas here: " + event.x + "-" + event.y + ".")
    })

    function setupGrid()
    {
        let gridwidth = (width / gridw);
        let gridheight = (height / gridh);
        
        for (var x = 0; x < gridw; x++)
        {
            grid[x] = []
            for(var y = 0; y < gridh; y++)
            {
                let nodeConsole = require('console');
                let myConsole = new nodeConsole.Console(process.stdout, process.stderr);
                myConsole.log("X: " + x + " Y: " + y)
                gird[x][y] = {
                    x: x * gridwidth,
                    y: y * gridheight,
                    width: gridwidth,
                    height: gridheight
                }
            }
        }
    }
    setupGrid();

    setInterval(loop, 1000 / fps)


})

