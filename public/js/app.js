$(function(){
	$("#toggler").click(function(){
		$("p#lorem").slideToggle(); //using slide toggle because I think it looks nice, but could easily just hide, fade, etc. 
		if($(this).text() == 'Hide Text')
    {
        $(this).text('Show Text');
    }
    else
    {
        $(this).text('Hide Text');   
    }
	})
})