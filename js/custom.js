var x = document.body;
var offsetX = x.offsetLeft;
var offsetY = x.offsetTop;
x.addEventListener('mousemove', handleMove, false);
document.body.style.cursor = 'none';
var coords = [];
var hoogte = document.body.clientHeight;
var breedte = document.body.clientWidth;

/* scroll naar top bij herladen */
window.onbeforeunload = function () {
        window.scrollTo(0,0);
}

/* maak een polygoon met mousemovement die de text pusht */
function handleMove(e) {
    mouseX = parseInt(e.pageX);
    mouseY = parseInt(e.pageY);  
    coords.push(mouseX + "px" + " " + mouseY + "px" );
    
        $(".shape-playground-1").css({ 
            "float": "left",
            "shape-outside": 'polygon'+'(-1000000px 0,'+coords+',-1000000px 8000px)',
            "height": hoogte*2,
            "width": breedte
        });

        $('#draggable').clone().appendTo( '.dif' ).css({
            'left': mouseX-5,
            'top': mouseY-5,
            'float': "left",
            'position': "absolute"

        });
   
}
/* scroll naar onderdeel */
$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top-25
        }, 1000);
    }
});

