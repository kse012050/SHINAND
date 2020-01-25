var menuColorboolean = true;
    var mainMobileMainAreaH;
    $(document).ready(function(){
        mainImgChange();
        mainVisionClick();
        menuClick();
        scrollEvent();


        $(window).resize(function(){
            if($(window).width() < 768){
                mainMobileMainAreaH = parseInt($(".mainArea").css("height").replace(/[^0-9]/g,""));
                if($("header h1").hasClass("logoBlack") && $(window).scrollTop() < mainMobileMainAreaH ){
                    $("header h1").removeClass("logoBlack");
                }

                // section 의 css bottom 값이 0이 아니면 0으로 만듭니다.
                $('section').each(function(){
                    var mainSectionResize = parseInt($(this).css("bottom").replace(/[^0-9]/g,""));
                    if(mainSectionResize > 0){
                        $(this).css("bottom","0");
                    }
                    // console.log(typeof(parseInt($('section').css("bottom").replace(/[^0-9]/g,""))));
                });
            }
        });

     
    });

    

    function scrollEvent(){
        var scrollClass;
        $('section').each(function(){
            // section의 갯수 만큼 네비게이션 추가
            $("header ul").append("<li></li>");
            $("header ul li").eq(0).addClass("active")
            
                $(this).on("DOMMouseScroll mousewheel", function (event) {
                    scrollClass = $(".scrollClass");
                    mouseWheel = event.originalEvent.wheelDelta;
                    if($(window).width() >= 768){
                        if(mouseWheel > 0){
                            if(($(this).prev()[0].localName) == "section"){
                                if(parseInt($("section").eq(scrollClass.length -1 ).css("bottom")) == $(window).height() && parseInt($("section").eq(scrollClass.length).css("bottom")) == 0){
                                    $(this).prev().removeClass("scrollClass");
                                }
                            }
                        }else if(mouseWheel < 0 ){
                            if($(this).next()[0].localName == "section"){
                                if($(this)[0].className == $('section').eq(0)[0].className || parseInt(scrollClass.eq(scrollClass.length -1).css("bottom")) == $(window).height()){
                                        $(this).addClass("scrollClass");
                                }
                            }
                        }
                            
                            if(scrollClass.length > 0 && scrollClass.eq(scrollClass.length -1).next()[0].className =="aboutArea"){
                                $("header").addClass("headerBlack");
                            }else{
                                $("header").removeClass("headerBlack");
                            }

               

                        if($("header h1").hasClass("logoBlack")){
                            menuColorboolean = false;
                        }else{
                            menuColorboolean = true;
                        }
                    }else{
                        
                        // console.log(scrollPercent);
                        // var mainMobileH1Top = $("h1").offset().top;
                        // console.log(mainMobileH1Top);
                        // var mainMobileMainAreaH = parseInt($(".mainArea").css("height").replace(/[^0-9]/g,""));
                        // console.log("메인" + (mainMobileMainAreaH -35));
                        // if(mainMobileH1Top >= mainMobileMainAreaH -50){
                        //     $("header h1").addClass("logoBlack");
                        // }else{
                        //     $("header h1").removeClass("logoBlack");
                        // }
                        // if(scrollPercent > 35){
                        //     $("header h1").addClass("logoBlack");
                        // }else{
                        //     $("header h1").removeClass("logoBlack");
                        // }
                        mainMobileMainAreaH = parseInt($(".mainArea").css("height").replace(/[^0-9]/g,""));
                        // // console.log($(window).scrollTop());
                        // console.log(scrollPercent);
                        // if(mouseWheel > 0){
                          
                        // }else if(mouseWheel < 0 && $(window).scrollTop() > (mainMobileMainAreaH - 100)){
                        //     $("header h1").addClass("logoBlack");
                        // }
                        setTimeout(function(){
                            // console.log("0 : " + $(window).scrollTop());
                            // console.log("1 : " + mainMobileMainAreaH);
                            if(mainMobileMainAreaH < $(window).scrollTop() +30){
                                $("header h1").addClass("logoBlack");
                            }else{
                                $("header h1").removeClass("logoBlack");
                            }
                        },250);
                    }

                });

            });
    }



    function mainImgChange(){
        var mainImgArr = $(".mainArea .mainImgChangeArea li");
        var mainImgArrNum = 1;
        $(".mainArea div span:last-of-type").text("0"+ (mainImgArr.length));

    

         setInterval(function(){
             mainImgArr.removeClass("showOpacity")
             mainImgArr.eq(mainImgArrNum).addClass("showOpacity");
            $(".mainArea div span:first-of-type").text("0"+ (mainImgArrNum + 1));
            if(mainImgArrNum >= mainImgArr.length - 1){
                mainImgArrNum = 0;
            }else{
                mainImgArrNum += 1;
            }
        },2500);
    };

    function mainVisionClick(){
        $(".visionArea ul li").on('click',function(){
            $(".visionArea ul li").addClass("unActive");
            $(".visionArea ul li").removeClass("Active");
            $(this).removeClass("unActive");
            $(this).addClass("Active");
            if($(window).width() <= 768){
                $(".visionArea ul li").children("span").text("+");
                $(this).children("span").text("-");
            }
        });
    };

    function menuClick(){
        $("header div").on("click",function(){
           $("nav").toggleClass("active");

            if(!menuColorboolean){
                $("header h1").toggleClass("logoBlack");
                $("header div span").toggleClass("menuBottonBlack");
            }
        });
    }