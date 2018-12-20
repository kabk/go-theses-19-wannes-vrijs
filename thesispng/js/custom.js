 //       $( function() {
   //      $( "#draggable" ).draggable();
     //   } );



function showCoords(event) {
    var x = window.innerWidth;
    var y = window.innerHeight;
    var xscroll = event.pageX;
    var yscroll = event.pageY;
    var lol = x-xscroll
    if (xscroll < window.innerWidth/2) {
    $('#draggable').css({
        'marginLeft':xscroll-65,
        'marginTop':yscroll-80,
        'float': "left"
    });
    
    $('#draggable').clone().appendTo( document.body ).css(
    {
        'position':"absolute",
        'left':7.5,
        'top':40,
    });
}
else{
    $('#draggable').css({
        'marginRight':lol-65+'px',
        'marginTop':yscroll-80+'px',
        'float': "right"
    });    
    $('#draggable').clone().appendTo( document.body ).css(
    {
        'marginLeft':xscroll-50+'px',
        'position':"absolute",
        'left':7.5,
        'top':40,
    });
    }

}
