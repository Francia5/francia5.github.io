$(function () {
    var text = $(".text");
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        if (scroll >= 200) {
            text.removeClass("hidden");
        } else {
            text.addClass("hidden");
        }
    });
});


let spans = document.querySelectorAll('.word span');
spans.forEach((span, idx) => {
    span.addEventListener('click', (e) => {
        e.target.classList.add('active');
    });
    span.addEventListener('animationend', (e) => {
        e.target.classList.remove('active');
    });

    // Initial animation
    setTimeout(() => {
        span.classList.add('active');
    }, 750 * (idx + 1))
});


$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600 && window.scrollY < 1100) {
            $(".navscroll").addClass("change");
        } else if (window.scrollY >= 1100 && window.scrollY <= 1200) {
            $(".navscroll").removeClass("change");
        }  else {
            $(".navscroll").removeClass("change");
           
        }
    });
});

$(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 450) {
            $(".name").addClass("hd");
        } else {
            $(".name").removeClass("hd");
            $(".name").addClass("show");
        }
    });
});

