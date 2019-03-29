$("ul").on("click", "li" ,function(){
	$(this).toggleClass("completed"); 
});

$("ul").on("click", "span" , function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
   if(event.which === 13){
   	 var todoText = $(this).val();
   	 $("ul").append("<li>" + todoText + " <span ><i class='fas fa-trash'></i></span>" + "</li>" );
   	 $(this).val("");
   	}
});

$(".fa-paper-plane").click(function(){
	$("input[type='text'").fadeToggle();
});









