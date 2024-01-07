/* 퍼블리싱 과제 : 배너매니저 스와이퍼 */
$(document).ready(function() {
    //스와이퍼 생성
    var tabSwiper = new Swiper(".hash_banner", {
        slidesPerView: 3,
        spaceBetween: 10,
        observer: true,
        observeParents: true,
        watchOverflow: false,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        pagination: {
        	el: ".swiper-pagination",
        	type: "fraction",
      	},
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
    
    //탭메뉴 함수
    function actTab(tabId) {
    	//초기화
        $(".hash_item").removeClass("active");
        $(".tab_list").hide();
        
        //탭 실행 & 태그에 따라 슬라이드 필터링
        var target = $(`.hash_item[id=${tabId}]`);
        var tgHash = target.text().substring(1);
        var tgSdCon = $(`.tab_list.${tabId}`);
        var tgSlide = tgSdCon.find(".slide_link").find(".banner_txt");
        
        if (tabId == "tab01") {
			target.addClass("active");
        	tgSdCon.show();
            tabSwiper[0].slideTo(0);
        } else {
            tgSlide.each(function(idx, el) {
                if ($(el).data("hash").match(tgHash) == null) {
                    $(el).parents(".swiper-slide").hide();
                }
            });

            target.addClass("active");
            tgSdCon.show();
            tabSwiper.forEach(function(el) {
            	el.slideTo(0);
            });
        }
    }
    
    //페이지 로드 시 #전체 해시태그 선택
    var firstTab = $(".hash_item:first-of-type").attr("id");
    actTab(firstTab);
    
    //클릭 이벤트
    $(".hash_item").click(function() {
    	var tabId = $(this).attr("id");
        actTab(tabId);
    });
});

/* 퍼블리싱 과제 : 배너매니저 스와이퍼 */
