var x = document.body;
var offsetX = x.offsetLeft;
var offsetY = x.offsetTop;
x.addEventListener('mousemove', handleMove, false);
document.body.style.cursor = 'none';
var coords = [];

function handleMove(e) {
    mouseX = parseInt(e.pageX);
    mouseY = parseInt(e.pageY);  
    coords.push(mouseX + "px" + " " + mouseY + "px" );
    if (mouseX < window.innerWidth/2) {
        $(".shape-playground-1").css({ 
            "float": "left",
            "shape-outside": 'polygon'+'('+coords+')',
            "height": 1000 + mouseY + "px",
        });

        $('#draggable').clone().appendTo( '.dif' ).css({
            'left': mouseX-5,
            'top': mouseY-5,
            'float': "left",
            'position': "absolute"

        });
    }
    else{
        $(".shape-playground-1").css({ 
            "float": "right",
            "shape-outside": 'polygon'+'('+coords+')',
            "height": e.pageY + "px",
        });

        $('#draggable').clone().appendTo( '.dif' ).css({
            'left': mouseX-5,
            'top': mouseY-5,
            'float': "right",
            'position': "absolute"

        }); 
    }
}
