$('#aboutBtn').click(function(e){
    var $target = $('html,#about');
    $target.animate({scrollTop: $target.height()}, 500);
});