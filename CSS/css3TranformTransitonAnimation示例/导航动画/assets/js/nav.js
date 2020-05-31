window.onload = function(){
    $('.btn-nav').click(function(){
        // 打开一级列表
        $('.btn-nav').toggleClass('animated')
        $('.nav-content').toggleClass('hideNav showNav')
        $('.nav-content').removeClass("hidden")
        $('.nav-item').toggleClass("nav_i_1")
    })
}