$(window).load(function(){
    getWidth();
});

function getWidth(){
    $(window).resize(function(){
            
            if ($(window).width() < 415) {
                
                var mobileKeyWords = new Array('iPhone','SAMSUNG','BlackBerry','Android','Windows CE','Windows CE;','LG','MOT','SonyEricsson','Symbian','Opera Mobi','Opera Mini','IEmobile');
                for(var word in mobileKeyWords){
                    if(navigator.userAgent.match(mobileKeyWords[word])==null){
                        location.href="index.html";
                        break;
                    }
                }
            }
            else {                           
               location.href="index.html";
                break;
            }
        });

        //console.log('window'+$(window).width());
    
        if ($(window).width() < 415) {       // if width is less than 600px
           var mobileKeyWords = new Array('iPhone','SAMSUNG','BlackBerry','Android','Windows CE','Windows CE;','LG','MOT','SonyEricsson','Symbian','Opera Mobi','Opera Mini','IEmobile');
            for(var word in mobileKeyWords){
                if(navigator.userAgent.match(mobileKeyWords[word])==null){
                    location.href="index.html";
                    break;
                }
            } 
        }
        else {          
           location.href="index.html"; 
            break;
        } 
}










