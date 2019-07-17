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
    $(window).resize(function(){
            
            if ($(window).width() < 1336){
                
                var mobileKeyWords = new Array('iPhone','SAMSUNG','BlackBerry','Android','Windows CE','Windows CE;','LG','MOT','SonyEricsson','Symbian','Opera Mobi','Opera Mini','IEmobile');
                for(var word in mobileKeyWords){
                    if(navigator.userAgent.match(mobileKeyWords[word])!=null){
                        return;
                    }else{
                       location.href="index.html";
                        break; 
                    }
                }
            }
        
        if($(window).width() > 1336){                           
               location.href="index.html";
            }
        });

        //console.log('window'+$(window).width());
    
        if ($(window).width() < 1336) {       // if width is less than 600px
           var mobileKeyWords = new Array('iPhone','SAMSUNG','BlackBerry','Android','Windows CE','Windows CE;','LG','MOT','SonyEricsson','Symbian','Opera Mobi','Opera Mini','IEmobile');
            for(var word in mobileKeyWords){
                if(navigator.userAgent.match(mobileKeyWords[word])!=null){
                    return;
                }
//                else{
//                   location.href="index.html";
//                    break; 
//                }
            } 
        }
         if($(window).width() > 1336){                           
               location.href="index.html";
            }
}










