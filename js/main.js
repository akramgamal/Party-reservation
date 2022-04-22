let home = document.querySelectorAll(".home-content");
let side = document.querySelectorAll(".side");
let btn = document.getElementById("open");
let closee = document.getElementById("close");

// $(window).scroll(function(){
//     console.log($(window).scrollTop());
// })
let sideWidth = $(side).outerWidth();
$(side).css({ left: -sideWidth });
$(btn).css({ left: 0 });
$(btn).click(function () {
    if ($(btn).css('left') == '0px') {
        $(btn).animate({ left: sideWidth }, 500);
        $(side).animate({ left: 0 }, 500);
    }
})
$(closee).click(function () {
    $(btn).animate({ left: 0 }, 500);
    $(side).animate({ left: -sideWidth }, 500);
})
$('.num').click(function (e) {
    if (e.target.innerHTML == 'Singer One') {
        if ($('.info').eq(0).css('display') == 'none') {
            $('#one').siblings().slideDown(500);
        } else {
            $('#one').siblings().slideUp(500);
        }
    } else if (e.target.innerHTML == 'Singer Two') {
        if ($('.info').eq(1).css('display') == 'none') {
            $('#two').siblings().slideDown(500);
        } else {
            $('#two').siblings().slideUp(500);
        }
    } else if (e.target.innerHTML == 'Singer Three') {
        if ($('.info').eq(2).css('display') == 'none') {
            $('#three').siblings().slideDown(500);
        } else {
            $('#three').siblings().slideUp(500);
        }
    } else if (e.target.innerHTML == 'Singer Four') {
        if ($('.info').eq(3).css('display') == 'none') {
            $('#four').siblings().slideDown(500);
        } else {
            $('#four').siblings().slideUp(500);
        }
    }


})
var countDownDate = new Date("Jan 5, 2022 15:37:25").getTime();
var x = setInterval(function () {

    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer1").innerHTML = days + ' D';
    document.getElementById("timer2").innerHTML = hours + ' H';
    document.getElementById("timer3").innerHTML = minutes + ' M';
    document.getElementById("timer4").innerHTML = seconds + ' S';

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("timer1").innerHTML = "EXPIRED";
    }
}, 1000);
$('#count').prev().text(100);
$('#count').text(' characters remaining');
$('#msg').keyup(function () {
    let size = 100 - $('#msg').val().length;
    if (size < 0) {
        $('#count').prev().text(0);
    } else {
        $('#count').prev().text(size);
    }
    $('#count').text(' characters remaining');

});

$('.side h3').eq(0).click(function(){
    $('body,html').animate({scrollTop:0},700);
})
$('.side h3').eq(1).click(function(){
    $('body,html').animate({scrollTop:$('.countdown').offset().top},700);
})
$('.side h3').eq(2).click(function(){
    $('body,html').animate({scrollTop:$('.singers').offset().top},700);
})
$('.side h3').eq(3).click(function(){
    $('body,html').animate({scrollTop:$('#contacts').offset().top},700);

})