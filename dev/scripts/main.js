var app = {};

app.events = function () {

    /*

    FLICKITY

    */

    // Flickity Init
    $('.mainCarousel').flickity({
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        arrowShape: "M5,50l8.2-7.2l8.2-7.2v12H95v4.7H21.4v12l-8.2-7.2L5,50z",
        wrapAround: true,
    });
    
    // Flickity Position Indicator
    let flickityPosition = 1;
    
    $('#activeCell').text(`0${flickityPosition}`);
    
    $('.flickity-prev-next-button.next').on('touchstart click', function(){
        if (flickityPosition < 5) {
            flickityPosition++;
            $('#activeCell').text(`0${flickityPosition}`);
        }
        else {
            flickityPosition = 1;
            $('#activeCell').text(`0${flickityPosition}`);
        }
    });
    
    $('.flickity-prev-next-button.previous').on('touchstart click', function () {
        if (flickityPosition != 1) {
            flickityPosition--;
            $('#activeCell').text(`0${flickityPosition}`);
        }
        else {
            flickityPosition = 5;
            $('#activeCell').text(`0${flickityPosition}`);
        }
    });
};

app.init = function () {
    app.events();
}

$(function (){
    app.init();
});

