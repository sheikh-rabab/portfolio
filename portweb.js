$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll>500){
            $('.scrl-up').addClass("show");
        }
        else{
            $('.scrl-up').removeClass("show");
        }
    });
    //slide up script
    /*$('.scrl-up').click(function(){
        $('html').animate({scrollTop: 0});
    });*/
    $('.scrl-up').click(function(){
                $('html, body').animate({scrollTop: 0}, 600);
                return false;
            });
    //typing animation script
    var typed=new Typed(".typing",{
        strings:["Full Stack Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    var typed=new Typed(".typing2",{
        strings:["Full Stack Developer"],
        typeSpeed:100,
        backSpeed:60,
        loop:true
    });
    //toggle menu function
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    $('.menu li a').click(function(){
            $('.navbar .menu').removeClass("active");
            $('.menu-btn i').removeClass("active");
        });
});