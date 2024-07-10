$(document).ready(function () {
    $("#header").append(Header());

    function Header() {
        return `
        <div class="container">
                <a href="#">
                    <img src="img/sumsung-logo-w.png" alt="삼성중공업">
                </a>
                <div class="right">
                <button type="button">
                    <i class="ico i-set"></i>
                </button>
                </div>
            </div>
        `
    };

    // 모달 열기 버튼 클릭 이벤트
    $(".open-modal").click(function () {
        var modalId = $(this).data("modal-id");
        $("#" + modalId).addClass("active");
        $("body").css("overflow", "hidden");
        // window.addEventListener("wheel", removeDefaultEvent, { passive: false });
    });

    // 모달 닫기 버튼 및 모달 바깥 영역 클릭 이벤트
    $(".btn-modal-close, .modal-wrap").click(function () {
        $(".modal-wrap").removeClass("active");
        $("body").css("overflow", "auto");
        // window.removeEventListener("wheel", removeDefaultEvent);
    });

    // 모달 내부 클릭 시 닫기 방지
    $(".modal-content").click(function (e) {
        e.stopPropagation();
    });

    // map 날짜 이벤트
    $('.day-header button').click(function () {
        var $day = $(this).closest('.day');
        $day.find('.day-body').slideToggle(300, function () {
            $day.toggleClass('active', $(this).is(':visible'));
        });
    });

});

