$(function () {
    $(".small-image").mouseenter(function () {
        var _self = this;
        $(".big-image").fadeOut(500, function () {
            $(this).attr("src", $(_self).attr("src").replace("small", "big"));
            $(this).fadeIn(500);
        });
    });

    $(".brands-left").click(function () {
        var ml = parseInt($(".brands-list").css("margin-left"));
        if (ml % 1152 == 0) {
            $(".brands-list").animate({ marginLeft: ml + 1152 }, 1000, function () {
                var ml = parseInt($(".brands-list").css("margin-left"));
                if (ml == 0)
                    $(".brands-list").css({ marginLeft: -2304 });
                if (ml == -3456)
                    $(".brands-list").css({ marginLeft: -1152 });

            });
        }
    });
    $(".brands-right").click(function () {
        var ml = parseInt($(".brands-list").css("margin-left"));
        if (ml % 1152 == 0) {
            $(".brands-list").animate({ marginLeft: ml - 1152 }, 1000, function () {
                var ml = parseInt($(".brands-list").css("margin-left"));
                if (ml == 0)
                    $(".brands-list").css({ marginLeft: -2304 });
                if (ml == -3456)
                    $(".brands-list").css({ marginLeft: -1152 });
            });
        }
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $(".back-to-top").css({ left: $(".logo").offset().left + 1244 }).fadeIn(100);
        } else {
            $(".back-to-top").fadeOut(100);
        }
    });
    $(".back-to-top").click(function () {
        var timer = setInterval(function () {
            $(window).scrollTop($(window).scrollTop() * 0.85);
            if ($(window).scrollTop() == 0)
                clearInterval(timer);
        }, 30);
    });
});