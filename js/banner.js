$(document).ready(function(){
	//ban图轮播
	var banner=$(".bimgs img");
	var fys=$(".blis li");
	var dqys=$(".dqys");
	var banz=$(".bzf");  
  var bany=$(".byf");
	var a=setInterval(move,2000);
	var now=0;
  var next=0;
  var ye=0;
	fys.eq(0).css("backgroundColor","#f0c310");
	banner.eq(0).css("opacity",1);
	//鼠标移入轮播停止，移除继续
		$("#banner").mouseover(function(){
			clearInterval(a);
		})
		$("#banner").mouseout(function(){
			a=setInterval(move,2000);
		})
		//点击轮播图  跳页
      fys.on("mouseover",function(){
        var cc=$(this).index();
          banner.animate({opacity:0});
          fys.css("backgroundColor","#fff");    
          banner.eq(cc).animate({opacity:1});
          fys.eq(cc).css("backgroundColor","#f0c310");
          next=cc;
          ye=next+1;
          dqys.html("0"+ye);
      })  	
   function move(){
    next++;
   	if(next==banner.length)next=0;
   		banner.animate({opacity:0});
   		fys.css("backgroundColor","#fff");
      banner.eq(next).animate({opacity:1});
   	  fys.eq(next).css("backgroundColor","#f0c310");
   	  ye=next+1;
          dqys.html("0"+ye);
   }
    function moveL(){
    next--;
   	if(next<0)next=banner.length-1;
   		banner.animate({opacity:0});
   		fys.css("backgroundColor","#fff")
      banner.eq(next).animate({opacity:1});
   	  fys.eq(next).css("backgroundColor","#f0c310");
   	  ye=next+1;
          dqys.html("0"+ye);
   }
//左右翻页   
   		bany.click(function(){		   	
    		    move();    		   
    	})	
   		banz.click(function(){		   	
    		    moveL();    		   
    	})
})  