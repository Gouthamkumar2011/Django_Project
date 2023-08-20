$('h1').on("click",function(){
    $(this).text("i was changed")
    console.log('There was a click!')
})

$('li').click(function(){
    console.log("any li was clicked")
})

$('input').eq(0).keypress(function(event){
    if (event.which === 13){
        $('h3').toggleClass('turnBlue')
    }
})

$('input').eq(1).on('click',function(){
    $('.container').fadeOut(3000)
})