function counter(){
    let count = setInterval(function(){
        let c = parseInt($('.counter').text());
        $('.counter').text((++c).toString());
        if(c == 100){
            clearInterval(count);
            $('.counter').addClass('hide')
            $('.counter').addClass('active')
        }
        else if(c < 50){   
            $(".counter").css("color", "white")

        }
        else if(c <= 50){
            $('.counter').css("color", "yellow")
        }
        else if(c >= 80){
            $('.counter').css("color", "red")
        }
    }, 90)
}

counter();

