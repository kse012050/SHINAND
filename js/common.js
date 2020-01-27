
    var mainMobileMainAreaH;
    $(document).ready(function(){
        mainImgChange();
        mainVisionClick();
        menuClick();
        scrollEvent();

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
        $('section').each(function(){
            // section의 갯수 만큼 네비게이션 추가
            $("header ul").append("<li></li>");
            $("header ul li").eq(0).addClass("active")
            
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
                                }
                            }
                        // 마우스 휠을 아래로 내렸을 때
                        }else if(mouseWheel < 0 ){
                            // console.log($(this).children(".test").length);
                            // console.log($(this).children(".test").eq($(this).children(".test").length -1).css("top"));
                            
                            if($(this).children().hasClass("pageArea") && $(this).children(".pageArea").length > pageScrollClass ){
                                // console.log('$(this).children().hasClass("pageArea") : ' + $(this).children().hasClass("pageArea"));
                                // console.log(' $(this).children(".pageArea").length : ' + $(this).children(".pageArea").length);
                                // console.log('pageScrollClass : ' + pageScrollClass);
                                // console.log('$(this).children(".test").eq(0).height() : ' + $(this).children(".test").eq(0).height());
                                if($(this).children(".test").eq(0).height() == undefined || $(this).children(".test").eq(pageScrollClass -2).css("top") == "0px"){
                                    $(this).children().eq(pageScrollClass).addClass("test");
                                    pageScrollClass = $(this).children(".test").length + 1;
                                }
                            }
                            else if($(this).children(".test").eq($(this).children(".test").length -1).css("top") != "0px" && $(this).children(".test").eq($(this).children(".test").length -1).css("top") != undefined){
                                // alert();
                            }else if($(this).next()[0].localName == "section"){
                                if($(this)[0].className == $('section').eq(0)[0].className || parseInt(scrollClass.eq(scrollClass.length -1).css("bottom")) == $(window).height()){
                                        $(this).addClass("scrollClass");
                                        pageScrollClass = 1;
                                }
                            }
                        }


                        scrollClass = $(".scrollClass");
                        // 메인 aboutArea 에 왔을 때, (로고 , 메뉴버튼 , 네비게이션) 색상 변경
                        if(scrollClass.length > 0 && scrollClass.eq(scrollClass.length -1).next()[0].className =="aboutArea"){
                            $("header").addClass("headerBlack");
                        }else{
                            $("header").removeClass("headerBlack");
                        }

                        // 네비게이션 위치
                        $("header ul li").removeClass("active");
                        $("header ul li").eq(scrollClass.length).addClass("active");

               
                    }else{
                        
                        
                        mainMobileMainAreaH = parseInt($(".mainArea").css("height").replace(/[^0-9]/g,""));
                       
                        setTimeout(function(){
                            if(mainMobileMainAreaH < $(window).scrollTop() +30){
                                $("header").addClass("headerBlack");
                            }else{
                                $("header").removeClass("headerBlack");
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
        });
    }