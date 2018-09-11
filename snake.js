const $ = require("./lib/jquery-3.3.1.min.js")

const width = 300, height = 500;
  
const gridw = 5
const gridh = 15
var grid;

$(document).ready(() => 
{
    const fps = 5
    
    var c = document.getElementById("snake");

    grid = [gridw * gridh]
    function loop()
    {
        let ctx = c.getContext("2d");

        ctx.fillStyle = "rgb(" + ((Math.random() * 255) | 0).toString() + ", " + ((Math.random() * 255) | 0).toString() + ", " + ((Math.random * 255) | 0).toString() + ")"
        ctx.strokeStyle= "rgba(0, 0, 0, 0.0)";

        let nodeConsole = require('console');
        let myConsole = new nodeConsole.Console(process.stdout, process.stderr);
        myConsole.log(ctx.fillStyle);
        grid.forEach((square) => {
            ctx.fillRect(square.x, square.y, square.width, square.height)       
        })
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
            for(var y = 0; y < gridh; y++)
            {
                let nodeConsole = require('console');
                let myConsole = new nodeConsole.Console(process.stdout, process.stderr);
                myConsole.log("X: " + x + " Y: " + y)
                grid.push({
                    x: x * gridwidth,
                    y: y * gridheight,
                    width: gridwidth,
                    height: gridheight
                })
            }
        }
    }
    setupGrid();

    setInterval(loop, 1000 / fps)

})

