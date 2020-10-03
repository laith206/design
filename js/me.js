

/*---- hiden-show function  ----*/
$("#all").click(function () {
    $(".one").first().show("fast", function showNext() {
        $(this).next(".one,.two,.thre,.four").show("fast", showNext);
    });
});


$("#one").click(function () {
    $(".one").show(function showNext() {
        $(".two,.thre,.four").hide(1000);
    });
});

$("#hidr").click(function () {
    $(".one,.two,.thre,.four").hide(1000);
});


$("#two").click(function () {
    $(".two,.thre").show(function showNext() {
        $(".one,.four").hide(1000);
    });
});

$("#thre").click(function () {
    $(".thre,.four").show(function showNext() {
        $(".one,.two").hide(1000);
    });
});

$("#four").click(function () {
    $(".one,.four").show(function showNext() {
        $(".thre,.two").hide(1000);
    });
});


const nav = document.querySelector('.navbar');

window.onscroll = function () {
    var top = window.scrollY;

    if (top >= 900) {
        nav.classList.add('activ-aa')
    } else {
        nav.classList.remove('activ-aa')
    }
}





