(function($){
    $.fn.extend({
        //加 ac类名
        addAc:function(){
            $(this).addClass('ac').siblings().removeClass('ac');
            return this;
        }
    })
})($);