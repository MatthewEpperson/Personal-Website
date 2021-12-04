$('#aboutBtn').click(function(e){
    var $target = $('html, #about');
    $target.animate({scrollTop: 975}, 600);
});

$('#experienceBtn').click(function(e){
    var $target = $('html, #experience');
    $target.animate({scrollTop: 1600}, 600);
});

$('#educationBtn').click(function(e){
    var $target = $('html, #education');
    $target.animate({scrollTop: 2270}, 600);
});

$('#portfolioBtn').click(function(e){
    var $target = $('html, #portfolio');
    $target.animate({scrollTop: 3270}, 600);
});

$('#contactBtn').click(function(e){
    var $target = $('html, #contact');
    $target.animate({scrollTop: 5000}, 600);
});

const navUL = document.querySelector(".navbar ul");
const navMobileMenuIcon = document.querySelector(".navbar .mobile-menu-icon");
const mainContent = document.getElementById("main-content");

navMobileMenuIcon.addEventListener("click", function() {
	navUL.classList.toggle("active");
	navMobileMenuIcon.classList.toggle("active");
    mainContent.classList.toggle("active");
});