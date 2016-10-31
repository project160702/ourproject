$(function(){
	$(".niu").hover(function(index){
		var index=$(".niu").index($(this));
		$(".qipao").eq(index).addClass("action");
	},function(index){
		var index=$(".niu").index($(this));
		$(".qipao").eq(index).removeClass("action");
	})
})
