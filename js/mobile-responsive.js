$(document).ready(function() {

function imageresize() {
var contentwidth = $('#content').width();
if ((contentwidth) < '960'){
$('.imageclass').attr('src','images/page3_bg.jpg');
} else {
$('.imageclass').attr('src','images/page4_bg.jpg');
}
}

imageresize();//Activates when document first loads

$(window).bind("resize", function(){
imageresize();
});

});
