$(document).ready(function(){

  //헤더 스크롤
  $(function(){
    var lastScrollTop = 0, data = 5;
    $(window).scroll(function(e){
       var st = $(this).scrollTop();
       
       if(Math.abs(lastScrollTop - st) <= data){
          return;
        }
        if ((st > lastScrollTop) && (lastScrollTop>0)){
      $("header").css("top","-84px");
  
   } else {
      $("header").css("top","0px");
   }
       lastScrollTop = st;
    });
  });

  //스크롤시 헤더 변경
  $(window).scroll(function(){
    var scroll = $(window).scrollTop();
    if(scroll > 100){
      $("header").addClass("active");
    }else{
      $("header").removeClass("active");
    }
  });

  //슬라이드 갯수
  $('.slick_slide').on('afterChange', function(event, slick, current){
      $(".current-num").text(current + 1);
      $(".total-num").text("/ " + $(".slick-dots li").length);
  });

  //알림판 슬라이드
  $(".section02 .slick_slide").slick({
      infinite : true,
      autoplay: true,
      autoplaySpeed : 800,
      speed : 200,
      slidesToScroll : 1,
      arrows : true,
      dots:true,
      customPaging: function(slider, i) {
          return '<button class="tab">' + $(slider.$slides[i]).find('.item').attr('data-dot-title') + '</button>';
      },
      prevArrow : $(".section02 .btn_left"),
      nextArrow : $(".section02 .btn_right"),
  });
  $(".slide_remocon li").click(function(){
        var index = $(this).index();
        console.log(index-1);
        $(".section02 .slick-dots li").removeClass("slick-active");
        $(".section02 .slick-dots li").eq(index).addClass("slick-active");
  });

  //정지-진행
  $(".btn_pause").click(function(){
      $(".section02 .slick_slide").slick('slickPause');
      $(".section02_btn_pause").toggleClass('active');
      $(".section02_btn_play").toggleClass('active');
  });
  $(".btn_play").click(function(){
      $(".section02 .slick_slide").slick('slickPlay');
      $(".section02_btn_play").toggleClass('active');
      $(".section02_btn_pause").toggleClass('active');
  });


  // 캘린더
  const today = new Date();

  const setCalendarData = (year, month) => {
      let calHtml = "";
      const setDate = new Date(year, month - 1, 1);
      const firstDay = setDate.getDate();
      const firstDayName = setDate.getDay();
      const lastDay = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      ).getDate();
      const prevLastDay = new Date(
        today.getFullYear(),
        today.getMonth(),
        0
      ).getDate();
      let startDayCount = 1;
      let lastDayCount = 1;
      for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
           if (i == 0 && j == firstDayName) {
            if (j == 0) {
              calHtml +=
                `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else if (j == 6) {
              calHtml +=
                `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else {
              calHtml +=
                `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            }
          }
          else if (i > 0 && startDayCount <= lastDay) {
            if (j == 0) {
              calHtml +=
                `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else if (j == 6) {
              calHtml +=
                `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            } else {
              calHtml +=
                `<div><span>${startDayCount}</span><span id='${year}${month}${setFixDayCount(startDayCount++)}'></span></div>`;
            }
          }
        }
      }
      document
        .querySelector("#calendar")
        .insertAdjacentHTML("beforeend", calHtml);
  };
  const setFixDayCount = number => {
      let fixNum = "";
      if (number < 10) {
        fixNum = "0" + number;
      } else {
        fixNum = number;
      }
      return fixNum;
  };
  if (today.getMonth() + 1 < 10) {
      setCalendarData(today.getFullYear(), "0" + (today.getMonth() + 1));
  } else {
      setCalendarData(today.getFullYear(), "" + (today.getMonth() + 1));
  }
  var day = today.getDate();
  var dayNum = $(".calendar div span:nth-child(1)").text();
  var thisDay = $(".calendar div span:nth-child(1)").eq(day).text()-1;

  $(".section03 .con #calendar div").click(function(){
      $(".section03 .con #calendar div").removeClass("active");
      $(this).addClass("active");
      $(".section03 .detail_work").addClass("active");
      $(".section03").addClass("active");
  });
  console.log($(".calendar div span:nth-child(1)").eq(day).text()-1);
  $(".calendar div span:nth-child(1)").eq(day-1).addClass("active");
    
  // section04_슬라이드
  $(".right_item_wrap").slick({
    infinite: true,
    autoplay : true,
    autoplaySpeed : 800,
    speed : 200,
    slidesToShow: 1,
    variableWidth: true,
    arrows : true,
    dots: false,
    prevArrow : $(".section04 .btn_left"),
    nextArrow : $(".section04 .btn_right"),
    responsive: [ // 반응형 웹 구현 옵션
					{  
						breakpoint: 1280,
						settings: {
							slidesToShow:2, 
						} 
					},
				]
  });
  //section04_탭
  $(".section04 .con .left_item .tap li").click(function(){
    $(".section04 .con .left_item .tap li").removeClass("active");
    $(this).addClass("active");
  });

  // 배너_슬라이드
  $(".banner").slick({
    infinite: true,
    autoplay : true,
    autoplaySpeed : 800,
    speed : 200,
    slidesToShow: 1,
    variableWidth: true,
    arrows : true,
    dots: false,
    prevArrow : $(".section06_btn_left"),
    nextArrow : $(".section06_btn_right"),
  });
    
  //배너영역 정지
  $(".btn_pause").click(function(){
    $(".banner").slick('slickPause');
    $(".section06 .btn_pause").toggleClass('active');
    $(".section06 .btn_play").toggleClass('active');
  });
  $(".btn_play").click(function(){
    $(".banner").slick('slickPlay');
    $(".section06 .btn_play").toggleClass('active');
    $(".section06 .btn_pause").toggleClass('active');
  });

  //상단이동
  $(".go_top").click(function(){
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
  });
    

  //모바일 햄버거 오픈
  $(".mobile_header .mobile_menu").click(function(){
    $(".mobile_menu_bg").toggleClass("active");
    $(".mobile_header .mobile_nav_wrap").toggleClass("active");
  });
  //모바일 2뎁스 오픈
  $(".mobile_header .mobile_nav_wrap .mobile_nav_bottom .nav_1_depth_wrap .nav_1_depth > li").click(function(){
    var depth01 = $(this).index();
    $(".mobile_header .mobile_nav_wrap .mobile_nav_bottom .nav_2_depth_wrap .nav_2_depth").removeClass("active");
    $(".mobile_header .mobile_nav_wrap .mobile_nav_bottom .nav_2_depth_wrap .nav_2_depth").eq(depth01).addClass("active");
  });
}); 