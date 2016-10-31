$(document).ready(function(){
	//header 下小圆点
	$("#header .li-c").css("display","none").eq(0).css("display","block")
	$("#header a").click(function(){
		var index=$("#header a").index($(this));
		$("#header .li-c").css("display","none").eq(index).css("display","block");
	})
	$("#ms #text").click(function(){
		$(".xala").toggle();
	})
})
