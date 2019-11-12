
$(document).ready(function(){
    function scrollSticked(){
        if ($(window).scrollTop() > $('#nav').outerHeight()) {
            $('#nav').addClass('select')
          }else{
            $('#nav').removeClass('select')
        }
    }
    $(window).scroll(scrollSticked)
    scrollSticked()
})