$(window).load(function(){
/*모든 파일이 로드 되었을때 실행됩니다.*/
    
    //모든 파일이 로드 되었을때 spinner는 꺼집니다.
    $(".loading").css({"display":"none"});
    
    scratchMe();
    refreshPage();
});

var $date,
    $type,
    $member,
    $Target;
function scratchMe(){

    // img setting
    random();
    var imgURLs= "./img/profile/"+$date+$member+$type+".jpg";
    console.log(imgURLs);
    
    $("#test").wScratchPad({
        bg: imgURLs,
        fg: './img/scratch.jpg',
        size: 20,
        realtime: true,
        scratchMove: function (e, percent) {
            
            //hide scratch me popup
            $(".scratchme").css({"display":"none"});
            
//            console.log(percent);
        // Show the plain-text promo code and call-to-action when the scratch area is 50% scratched
        if (percent > 88){
            
            if($(".popup").hasClass("check")){
                $(".popup").css({"display":"none"});   
            }else{
                $(".popup").css({"animation":"growPop 0.3s forwards"});
            }
        }
      }
    }); 
}

// random
function random(){
    // set date
    var now = new Date().getDate();
    // 추후 삭제 ----------//
    now = 22;
    //------------------//
    $date = now+"-";
    
    
    // set member
    var mem = ["A", "B"];
    $member = mem[Math.floor(Math.random() * mem.length)];
    
    // set img
    $type = RdInt(1,3);
    
    // set background
    var $Num = RdInt(1,3);
    displayImg($date,$Target,$Num);
    console.log($Num);
    
    // set graphic
    switch($Num){
        case 1: 
            $(".content .inner .graphic li").eq(0).delay(100).show(200);
            break;
        case 2: 
            $(".content .inner .graphic li").eq(1).delay(100).show(200);
            break;
    }
    
    // set dot
    if(now > 19){
        switch($Num){
            case 1: 
                $(".content .inner .dot1").show();
                break;
            case 2: 
                $(".content .inner .dot2").show();
                break;
        }
    }
}

// random number
function RdInt(min, max) {
  var min = Math.ceil(min);
  var max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; 
    //The maximum is exclusive and the minimum is inclusive
};

// display img
function displayImg($date,$Target,$Num){
    $Target = $(".content");
    var bgURLs = "./img/"+$date+$Num+".png";
    
    $Target.css({
      "background-image" : "url("+ bgURLs +")"
    });
};

function refreshPage(){
    $(".popup img").click(function(){
        location.reload();
    });
    
    $(".popup .close_btn").click(function(){
        $(".popup").addClass('check');
        $(".popup").animate({"opacity":"0"},300);
        $(".popup").delay(100).css({"display":"none"});
    });
}