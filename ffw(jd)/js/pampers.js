/**
 * Created by hxsd on 2017/5/6.
 */
var arr=[199,169,149,129,109,99,89,79,69];
//尺码
$('.pampersxxl li').click(function(){
    var index=$(this).index();
     $(this).addAc();
    $('.price p').children('span').html(arr[index]+'.00')
});
//选框
$('#imgList li').mouseenter(function(){
    $(this).addAc();
});
//加入购物车成功
$('.shop-red').click(function(){
    $('.success1').fadeIn(1000);
    $('.success1').fadeOut(1000);
});
//购物车加减
$('.add').click(function(){
    var num= $(this).prev().attr('value')*1;
    num++;
    $(this).prev().attr('value',num)
});
$('.reduce').click(function(){
    var num= $(this).prev().prev().attr('value')*1;
    if(num>1)
    num--;
    $(this).prev().prev().attr('value',num)
});
//TAB
$('.imgList li').mouseenter(function(){
    $('.mess-l-pic img').attr('src','images/0'+($(this).index()+1)+'big.jpg');
    var _this=$(this);
    //放大镜
    $('.mess-l-pic').mousemove(function(ev){
        var l=ev.pageX-$(this).offset().left-$('#zoom').width()/2;
        var t=ev.pageY-$(this).offset().top-$('#zoom').height()/2;
        if(l<0){
            l=0;
        };
        if(t<0){
            t=0;
        }
        var max_l=$(this).width()-$('#zoom').width();
        var max_t=$(this).height()-$('#zoom').height();
        if(l>max_l){
            l=max_l;
        }
        if(t>max_t){
            t=max_t;
        }
        $('#zoom').show().css({"left":l,"top":t});
        var pic= $('.mess-l-pic img').attr('src');
        $('.big-img img').attr('src','images/0'+($(_this).index()+1)+'bigbig.jpg').show().css({"left":-l*2,"top":-t*2});
        $('.big-img').show();
    });
    $('.mess-l-pic').mouseleave(function(){
        $('#zoom').hide();
        $('.big-img').hide()
    });
});
//放大镜
$('.mess-l-pic').mousemove(function(ev){
    var l=ev.pageX-$(this).offset().left-$('#zoom').width()/2;
    var t=ev.pageY-$(this).offset().top-$('#zoom').height()/2;
    if(l<0){
        l=0;
    };
    if(t<0){
        t=0;
    }
    var max_l=$(this).width()-$('#zoom').width();
    var max_t=$(this).height()-$('#zoom').height();
    if(l>max_l){
        l=max_l;
    }
    if(t>max_t){
        t=max_t;
    }
    $('#zoom').show().css({"left":l,"top":t});
    $('.big-img img').show().css({"left":-l*2,"top":-t*2});
    $('.big-img').show();
});
$('.mess-l-pic').mouseleave(function(){
    $('#zoom').hide();
    $('.big-img').hide()
});
//recommend-tab
$('.top-tab').children('li').click(function(){
    $(this).addAc();
    var index=$(this).index();
    $('.bot-tab ').children('ol').eq(index).show().siblings().hide();
});
//address
$('.address a').hover(function(){
    $(this).children('i').eq(0).hide().siblings('i').show();
    $('.address-post').show();
},function(){
    $(this).children('i').eq(0).show().siblings('i').hide()
});
$('.address-post').mouseleave(function() {
    $('.address-post').hide();
});
$('.price').mouseenter(function() {
    $('.address-post').hide();
});
$('.add-ul li').click(function(){
   var index=$(this).index();
    $('.address-box ol').eq(index).show().siblings('ol').hide();
    $(this).addAc();
});
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
