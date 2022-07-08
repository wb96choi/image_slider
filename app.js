$(function(){

    const width = 1200; // slider 크기
    img_num = 0; // 이미지 재생 변수

    function playSlider(num) {
        // 위치 조정 공식: width X 이미지 번호(0,1,2...)
        let x = -(width * num); 

        $(".sliders").css({
            transform: `translateX(${x}px)`
        });
    };

    // 자동재생
    setInterval(function(){
        img_num++; // 다음 이미지 번호
        if (img_num > 2) {
            img_num = 0;
        }
        console.log(img_num)
        playSlider(img_num);
    }, 4000);

});
