$(function(){
	$("#toggler").click(function(){
		$("p#lorem").slideToggle();
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