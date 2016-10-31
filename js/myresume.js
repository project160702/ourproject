$(function(){
	$("a").attr("href","javascript:;").attr("rel","noopener noreferrer");
	$("#zhe").css("height",$("body").height());
	$("#box .sjzj .contenter .contenter2 .right .xh a").click(function(){
		$("#zhe,#zhes").addClass('tankuang').addClass('tankuangk');
	})
	$("#zhe").click(function(){
		$(".tankuangk").removeClass('tankuangk')
	})

})