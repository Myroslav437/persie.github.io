var h_hght = 150; // высота шапки
var h_mrg = 0;    // отступ когда шапка уже не видна
                 
$(function(){
    var elem = $('.header');
    var top = $(this).scrollTop();
     
    if(top > h_hght){
        elem.css('height', h_mrg);
    }           
     
    $(window).scroll(function(){
        top = $(this).scrollTop();
         
        if (top+h_mrg < h_hght) {
            elem.css('height', (h_hght-top));
        } else {
            elem.css('height', h_mrg);
        }
    });
 
});