$(function(){
    var showGotoTop = 100;
    $(window).scroll(function () {
        if ($(this).scrollTop() >= showGotoTop) {
            $('#khung').fadeIn();
        } else { $('#khung').fadeOut(); }
    });
    TweenMax.from($('.logo'),1,{y:100,scale:1.5,opacity:0,ease:Circ.easeOut})
    TweenMax.from($('.small'),1,{y:-100,opacity:0,ease:Power4.easeOut,delay:1.5})
    TweenMax.from($('.we'),1,{y:100,scale:0.5,opacity:0,ease:Circ.easeOut,delay:1})

    // viet hieu ung cho cac khoi

    TweenMax.staggerFrom($('._1hinh'),1, {x:100,opacity:0,ease:Power4.easeOut,delay:1},0.4)
})