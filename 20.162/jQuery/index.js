// $("button").click(function(){
//     $("h1").toggleClass("green-text");
//     $("h1").toggleClass("big-title");
// });


// $(document).keypress(function (e) {
//     $('h1').text(e.key)
    
// });

$('button').on("click",function () {
    $('h1').animate({opacity:0.5});
})