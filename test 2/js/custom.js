var x = document.body;
var offsetX = x.offsetLeft;
var offsetY = x.offsetTop;
x.addEventListener('mousemove', handleMove, false);
document.body.style.cursor = 'none';
var coords = [];
var hoogte = document.body.clientHeight;


function handleMove(e) {
    mouseX = parseInt(e.pageX);
    mouseY = parseInt(e.pageY);  
    coords.push(mouseX + "px" + " " + mouseY + "px" );
    
        $(".shape-playground-1").css({ 
            "float": "left",
            "shape-outside": 'polygon'+'(-10000px 0,'+coords+',-10000px 1000px)',
            "height": hoogte
        });

        $('#draggable').clone().appendTo( '.dif' ).css({
            'left': mouseX-5,
            'top': mouseY-5,
            'float': "left",
            'position': "absolute"

        });
   
}
