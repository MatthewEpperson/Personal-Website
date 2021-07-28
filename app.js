$('#aboutBtn').click(function(e){
    var $target = $('html, #about');
    $target.animate({scrollTop: 975}, 600);
});

$('#portfolioBtn').click(function(e){
    var $target = $('html, #portfolio');
    $target.animate({scrollTop: 1875}, 600);
});
