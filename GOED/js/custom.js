 //       $( function() {
   //      $( "#draggable" ).draggable();
     //   } );



function showCoords(event) {
    var xscroll = event.pageX;
    var yscroll = event.pageY;
    var rechts = window.innerWidth - event.pageX;
  
$(document).mousedown (function(){ 
    clicking = true
});
    
$(document).mouseup (function(){  
    clicking = false
}); 
     
$(document).mousemove (function(){
        if(clicking == true){
            if (xscroll < window.innerWidth/2) {
                $('#draggable').css({
                    'marginLeft':xscroll-65,
                    'marginTop':yscroll-80,
                    'float': "left"
                });
                $('#draggable').clone().appendTo( '.dif' ).css({
                    'left': 7.5,
                    'top': 40,
                    'float': "left",
                    'position': "absolute"

                });
            }
            else{
                $('#draggable').css({
                    'marginRight':rechts-65+'px',
                    'marginTop':yscroll-80+'px',
                    'float': "right"
                }); 
            }
        }
        else if(clicking == false){
            $('#draggable').css({
                'marginLeft':(-400),
                'marginTop':(-200),
                'float': "right"
            }); 
        }
});

}

  
 


