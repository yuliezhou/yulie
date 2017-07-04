
//自动轮播
var n=0;
function run(){
    n++;
    n=(n==6)?0:n;
    $('.tabCont img').eq(n).show().siblings().hide();
    $('.tabList li').eq(n).addAc();
}
var timer=setInterval(run,1000);
//鼠标悬停
$('.tabList li').mouseenter(function(){
    clearInterval(timer);
    n=$(this).index();
    $('.tabCont img').eq(n).show().siblings().hide();
    $(this).addAc();
});
$('.tabList li').mouseleave(function(){
    timer=setInterval(run,1500);
});
//鼠标移入盒子
$('.tabCont').mouseenter(function(){
    clearInterval(timer);
});
$('.tabCont').mouseleave(function(){
    timer=setInterval(run,1500);
});
//top-tab
$('.myjd-tab').mouseenter(
    function(){
        $('.myjd-box').show()
    });
$('.myjd-box').mouseleave(
    function(){
        $('.myjd-box').hide()
    });
$('.myjd-tab1').mouseenter(
    function(){
        $('.customer').show()
    });
$('.customer').mouseleave(
    function(){
        $('.customer').hide()
    });
$('.bj-name').mouseenter(
    function(){
        $('.bj-ol').show()
    });
$('.bj-ol').mouseleave(
    function(){
        $('.bj-ol').hide()
    });
$('.taobao_menu ul').children('a').mouseenter(function(){
    var index=$(this).index();
    $('.menu').show()
    $('.menu_cont').eq(index).show().siblings('.menu_cont').hide()
});
$('.menu').mouseleave(function(){
    $('.menu').hide()
});
$('.taobao_menu').mouseleave(function(){
    $('.menu').hide()
});
//1F
$('.page-box1 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
$('.page-tab').eq(index).show().siblings('.page-tab').hide()
});
//2F
$('.page-box2 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-taba').eq(index).show().siblings('.page-taba').hide()
});
//3F
$('.page-box3 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabc').eq(index).show().siblings('.page-tabc').hide()
});
//4F
$('.page-box4 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabd').eq(index).show().siblings('.page-tabd').hide()
});
//5F
$('.page-box5 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabe').eq(index).show().siblings('.page-tabe').hide()
});
//6F
$('.page-box6 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabf').eq(index).show().siblings('.page-tabf').hide()
});
//7F
$('.page-box7 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabg').eq(index).show().siblings('.page-tabg').hide()
});
//8F
$('.page-box8 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabh').eq(index).show().siblings('.page-tabh').hide()
});
//9F
$('.page-box9 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabi').eq(index).show().siblings('.page-tabi').hide()
});
//10F
$('.page-box10 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabj').eq(index).show().siblings('.page-tabj').hide()
});
//11F
$('.page-box11 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabk').eq(index).show().siblings('.page-tabk').hide()
});
//12F
$('.page-box12 li').mouseenter(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.page-tabl').eq(index).show().siblings('.page-tabl').hide()
});
//floor
$(window).scroll( function() {
    var scrollTop=$(window).scrollTop();
    scrollTop>1500?$('.locationFloorList').show():$('.locationFloorList').hide();
        var st=$(window).scrollTop()-1500;
        var h=$('.page1').height();
        var n=parseInt(st/h);
        $('.locationFloorList li').eq(n).addAc()
});
$('.locationFloorList li').each(function(i){
    var _this=this;
    $(this).click(function(){
        $('.locationFloorList li').removeClass('ac');
        $(_this).addClass('ac');
        $('body,html').animate({'scrollTop':$('.page1').eq(i).offset().top},1000);
    } );
});
