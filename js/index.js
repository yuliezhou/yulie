/**
 * Created by ffw on 2017/5/19.
 */
$(function(){
    //加 AC
    $('.works ul').children('li').click(function(){
        $(this).addClass('ac').siblings().removeClass('ac');
    })
    //切换选项卡
    $('.top-icon').click(function(){
        $('body,html').animate({'scrollTop':$('.works').offset().top},1000)
    })
    //打字机
    var str="很高兴你能访问我的网站，www.ducck.top  .....";
    var n=0;
    var oStr="";
    setInterval(
        function run (){
            n++;
            if(n<=str.length) {
                oStr = str.slice(0, n);
                $('.top p').html(oStr)
            }
        }
        ,200);
    //特效
    var workimg=$(".work-img2");
    for(var i=0;i<36;i++){
        var x = i%6;
        var y=parseInt(i/6);
        $("<div class='item'></div>")
            .css({
                "background-position":x*(-50)+"px "+y*(-50)+"px",
                "left":x*52+"px",
                "top":y*52+"px"
            })
            .appendTo(workimg);
    }
    var items=$(".item");
    function hide(){
        items.each(function(index, element) {
            var x=Math.random()*1000-500; // [-3000,3000)
            var y=Math.random()*1000-500;
            $(this).css({
                left:x+"px",
                top:y+"px",
                opacity:0
            })
        });
    }
    function show(){
        items.each(function(index, element) {
            var x=index%6;
            var y=parseInt(index/6);
            $(this).css({
                left:x*51+"px",
                top:y*51+"px",
                opacity:1
            });
        });
    }

    $('.work-img2').hover(function(){
    hide();
},
    function(){
        show();
    })
//animate
$(".work-img").hover(
    function(){
    $(this).children("img").animate({opacity: '0.5'}, 1000);
    },function(){
    $(this).children("img").animate({opacity: '1'}, 1000);
    }
);
//video
    var h=$(window).height()
    console.log(h)
    $(".top").css({"height":h})
    $(".video-bg").css({"height":h})
});
//进度条
/*var m=$('.skill').offset().top
console.log(m)
$('body,html').scrollTop(function(){
    var n1=$('body,html').scrollTop()
    if(n1>=m){
        $("#skillbox").show()
    }*/

