$(document).ready(function(){
    getWidth();
    
    $(document).bind("contextmenu",function(e){
      return false;
    });

    $("img").on("contextmenu",function(){
       return false;
    }); 
});

function getWidth(){
    
    var winTT = $(window).width();
    console.log('window width='+winTT);

}










