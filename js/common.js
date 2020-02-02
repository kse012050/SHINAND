
    var mainMobileMainAreaH;
    $(document).ready(function(){
        mainImgChange();
        mainVisionClick();
        menuClick();
        scrollEvent();
        brandLogo();

        $(".wrapArea header h1").click(function(){
            $("section").removeClass("scrollClass");
        })


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
        var pageScrollClass = 1;
        var navPageNum = 0;
        $('section').each(function(){
            // section의 갯수 만큼 네비게이션 추가
            // if($(this).hasClass("navPage")){
                // $("header ul").append("<li></li>");
                // $("header ul li").eq(0).addClass("active")
            // }
            
            
                $(this).on("DOMMouseScroll mousewheel", function (event) {
                    scrollClass = $(".scrollClass");
                    mouseWheel = event.originalEvent.wheelDelta;
                    // 스크롤 이벤트 반응형
                    if($(window).width() >= 768){
                        // 마우스 휠을 위로 올렸을 때
                        if(mouseWheel > 0){
                            if($(this).children().hasClass("test")){
                                $(".test").eq($(".test").length - 1 ).removeClass("test");
                                pageScrollClass = 1;
                            }else if(($(this).prev()[0].localName) == "section"){
                                if(parseInt($("section").eq(scrollClass.length -1 ).css("bottom")) == $(window).height() && parseInt($("section").eq(scrollClass.length).css("bottom")) == 0){
                                    $(this).prev().removeClass("scrollClass");
                                    if($(this).prev().hasClass("navPageCheck")){
                                        $(this).prev().removeClass("navPageCheck");
                                        $("header ul li").removeClass("active");
                                        $("header ul li").eq($(".navPageCheck").length).addClass("active");
                                    }
                                    console.log($(this).index());
                                        console.log($("section").length);
                                    if($(this).index() >= $("section").length){
                                        $("header").removeClass("lastSction");
                                    }
                                }
                            }


                            if($(this).hasClass("aboutArea")) {
                                $("header").removeClass("headerBlack");
                            }
                        // 마우스 휠을 아래로 내렸을 때
                        }else if(mouseWheel < 0 ){
                            // console.log($(this).children(".test").length);
                            // console.log($(this).children(".test").eq($(this).children(".test").length -1).css("top"));
                            
                             if($(this).next()[0].localName == "section"){
                                if($(this)[0].className == $('section').eq(0)[0].className || parseInt(scrollClass.eq(scrollClass.length -1).css("bottom")) == $(window).height()){
                                        $(this).addClass("scrollClass");
                                        pageScrollClass = 1;
                                        if($(this).next().hasClass("navPage")){
                                            $(this).addClass("navPageCheck");
                                            $("header ul li").removeClass("active");
                                            $("header ul li").eq($(".navPageCheck").length).addClass("active");
                                        }
                                        
                                        if($(this).index() == $("section").length){
                                            $("header").addClass("lastSction");
                                        }
                                }
                            }

                            if($(this).hasClass("mainArea")) {
                                $("header").addClass("headerBlack");
                            }
                        }


                        scrollClass = $(".scrollClass");
                        // 메인 aboutArea 에 왔을 때, (로고 , 메뉴버튼 , 네비게이션) 색상 변경
                        // if(scrollClass.length > 0 && scrollClass.eq(scrollClass.length -1).next()[0].className =="aboutArea"){
                        //     $("header").addClass("headerBlack");
                        // }else{
                        //     $("header").removeClass("headerBlack");
                        // }

                        // 네비게이션 위치
                        
                        // if($(this).hasClass("navPage") && $(this).hasClass("scrollClass")){
                        //     navPageNum +=1
                        // }
                        // if($(this).next().hasClass("navPage")){
                        //     $("header ul li").eq($("header ul li.active").index() + 1).addClass("active");
                        //     $("header ul li").eq($("header ul li.active").index()).removeClass("active");
                            // $("header ul li").removeClass("active");
                            // navPageNum +=1;
                            // console.log(navPageNum);
                            // $("header ul li").eq(navPageNum).addClass("active");
                        // }
                        // console.log(scrollClass.length);
                        // console.log($(".navPage").length);
                        // console.log($(".navPage.scrollClass").length);
                        // $("header ul li").eq($(".navPage.scrollClass").length - 1).addClass("active");

               
                    }else{
                        
                       if($("section").eq(0).hasClass("mainArea")) {
                            mainMobileMainAreaH = parseInt($(".mainArea").css("height").replace(/[^0-9]/g,""));
                        
                            setTimeout(function(){
                                if(mainMobileMainAreaH < $(window).scrollTop() +30){
                                    $("header").addClass("headerBlack");
                                }else{
                                    $("header").removeClass("headerBlack");
                                }
                            },250);
                        }
                    }

                });

                // 터치한 순간의 위치를 담는 변수
                var touchLocation;
                // 터치한 순간
                $(this).on("touchstart", function (event) {
                    // 터치한 순간의 위치
                    touchLocation = event.originalEvent.touches[0].screenX;
                });

                // 테블릿 터치
                $(this).on("touchmove", function (event) {
                    scrollClass = $(".scrollClass");
                    if(event.originalEvent.touches[0].screenX > touchLocation){
                        // 테블릿 터치 위로
                        if($(this).next()[0].localName == "section"){
                            if($(this)[0].className == $('section').eq(0)[0].className || parseInt(scrollClass.eq(scrollClass.length -1).css("bottom")) == $(window).height()){
                                    $(this).addClass("scrollClass");
                                    pageScrollClass = 1;
                                    if($(this).next().hasClass("navPage")){
                                        $(this).addClass("navPageCheck");
                                        $("header ul li").removeClass("active");
                                        $("header ul li").eq($(".navPageCheck").length).addClass("active");
                                    }
                                    
                                    if($(this).index() == $("section").length){
                                        $("header").addClass("lastSction");
                                    }
                            }
                        }

                        if($(this).hasClass("mainArea")) {
                            $("header").addClass("headerBlack");
                        }
                    }else if(event.originalEvent.touches[0].screenX < touchLocation){
                        // 테블릿 터치 아래로
                        if(($(this).prev()[0].localName) == "section"){
                            if(parseInt($("section").eq(scrollClass.length -1 ).css("bottom")) == $(window).height() && parseInt($("section").eq(scrollClass.length).css("bottom")) == 0){
                                $(this).prev().removeClass("scrollClass");
                                if($(this).prev().hasClass("navPageCheck")){
                                    $(this).prev().removeClass("navPageCheck");
                                    $("header ul li").removeClass("active");
                                    $("header ul li").eq($(".navPageCheck").length).addClass("active");
                                }
                                if($(this).index() >= $("section").length){
                                    $("header").removeClass("lastSction");
                                }
                            }
                        }


                        if($(this).hasClass("aboutArea")) {
                            $("header").removeClass("headerBlack");
                        }
                    }
                }); // 테블릿 터치 fin



            });  // section fin
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
            if($(this).hasClass("Active")){
                $(".visionArea ul li").removeClass("Active");
                $(".visionArea ul li").removeClass("unActive");
            }else{
                $(".visionArea ul li").addClass("unActive");
                $(".visionArea ul li").removeClass("Active");
                $(this).removeClass("unActive");
                $(this).addClass("Active");
                if($(window).width() <= 768){
                    $(".visionArea ul li").children("span").text("+");
                    $(this).children("span").text("-");
                }
            }
        });

      
    };

    function menuClick(){
        var menuColorBoolean = true;
        $("header div").on("click",function(){
           $("nav").toggleClass("active");

           if($("header").hasClass("headerBlack")){
               $("header").removeClass("headerBlack");
               menuColorBoolean = false;
           }else if(!menuColorBoolean){
                $("header").addClass("headerBlack");
                menuColorBoolean = true;
            }
            $("header div").toggleClass("menuBtn");
        });
    }

    function brandLogo(){
        var breandLogoUl = $(".brandLogoArea").html();
        var breandLogoWidth = $(".brandLogoArea ul").width();
        // console.log($(".brandLogoArea").html());
        for(var a = 0; a <=2; a++){
            // $(".brandLogoArea").appendTo($(".brandLogoArea").html($(".brandLogoArea").html()));
        }
        $(".brandLogoArea").append(breandLogoUl);
        $(".brandLogoArea").append(breandLogoUl);

        console.log($(".brandLogoArea ul").length);
        $(".brandLogoArea ul").each(function(){
            $(this).css("left",breandLogoWidth * $(this).index());
            // console.log("left",$(this).position().left);
            console.log($(this).index() * $(this).width());
        });

      
        setInterval(function(){
            $(".brandLogoArea ul").each(function(){
                $(this).css("left",$(this).position().left - 1);
                if($(this).position().left <= -breandLogoWidth){
                    $(this).css("left",breandLogoWidth * ($(".brandLogoArea ul").length - 1));
                }
            });
        },5);
        
    }