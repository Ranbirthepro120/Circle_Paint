var mouseEvent = "";

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

color = "";
radius = "";
width = "";

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("color").value;
    width = document.getElementById("width").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mousedown";
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseEvent = "mouseup";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}
canvas.addEventListener("mousemove", my_mousemove)
function my_mousemove(e)
{
    mouseEvent = "mousemove";
    position_of_x = e.clientX - canvas.offsetLeft;
    position_of_y = e.clientY - canvas.offsetTop;

    if(mouseEvent == "mousedown") 
    {
        console.log("Current Position of X & Y Coordinates = ");
        console.log("X = " + position_of_x + " Y = " + position_of_y);
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(position_of_x, position_of_y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

}