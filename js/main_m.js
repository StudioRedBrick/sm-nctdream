$(document).ready(function(){
    test();
    centerEle();
});

function test(){
    $("#test").wScratchPad({
        bg: './img/aladdin.jpg',
        fg: '#aeaeae',
        size: 10,
        realtime: true
    })
}


function centerEle(){
    var win = $(window).height()/2;
    var val = $(".content .inner").height()/2;
    var fin = win-val;
    
    $(".content .inner").css({"padding-top":fin});
    console.log('fin='+fin);
    
    $(window).resize(function(){
        var win = $(window).height()/2;
        var val = $(".content .inner").height()/2;
        var fin = win-val;

        $(".content .inner").css({"padding-top":fin});
    });
}