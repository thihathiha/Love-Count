$(document).ready(function(){
	$("#memory").hide();
	$(".menu").click(function(){
		$("#memory").show();
	});
	$(".close").click(function(){
		$("#memory").hide();
	});
	$(".first").click(function(){
		$(this).toggleClass("skyblue");
		$(".firstphoto").toggleClass("hide");
		$(".cross1").toggleClass("hide");
	});
	$(".second").click(function(){
                $(this).toggleClass("skyblue");
                $(".secondphoto").toggleClass("hide");
                $(".cross2").toggleClass("hide");
        });
        $(".third").click(function(){
                $(this).toggleClass("skyblue");
                $(".thirdphoto").toggleClass("hide");
                $(".cross3").toggleClass("hide");
        });
        $(".fourth").click(function(){
                $(this).toggleClass("skyblue");
                $(".fourthphoto").toggleClass("hide");
                $(".cross4").toggleClass("hide");
        });
        $(".fifth").click(function(){
                $(this).toggleClass("skyblue");
                $(".fifthphoto").toggleClass("hide");
                $(".cross5").toggleClass("hide");
        });
        $(".sixth").click(function(){
                $(this).toggleClass("skyblue");
                $(".sixthphoto").toggleClass("hide");
                $(".cross6").toggleClass("hide");
        });
        $(".seventh").click(function(){
                $(this).toggleClass("skyblue");
                $(".seventhphoto").toggleClass("hide");
                $(".cross7").toggleClass("hide");
        });
});

// Day Count

dateStart = new Date(2022,10,4);
        
        function GetCount(){
        
                dateNow = new Date();
                // console.log(dateNow);
                //grab current date
                amount = dateNow.getTime() - dateStart.getTime() ;                
                //calc milliseconds between dates
                delete dateNow;
        
                // time is already past
                if(amount < 0){
                        document.getElementById('countbox').innerHTML="Now!";
                }
                // date is still good
                else{
                		
                        days=0;hours=0;mins=0;secs=0;out="";
        
                        amount = Math.floor(amount/1000);//kill the "milliseconds" so just secs
        
                        days=Math.floor(amount/86400);//days
                        amount=amount%86400;
        
                        hours=Math.floor(amount/3600);//hours
                        amount=amount%3600;
        
                        mins=Math.floor(amount/60);//minutes
                        amount=amount%60;
        
                        secs=Math.floor(amount);//seconds
        
                        if(days != 0){out += days +" day"+((days!=1)?"s":"");}
                        // if(days != 0 || hours != 0){out += hours +" hour"+((hours!=1)?"s":"")+",<br />";}
                        // if(days != 0 || hours != 0 || mins != 0){out += mins +" minute"+((mins!=1)?"s":"")+",<br />";}
                        // out += secs +" seconds";
                        document.getElementById('countbox').innerHTML=out;
        
                        setTimeout("GetCount()", 1000);
                }
        }
        
        window.onload=function(){GetCount();}//call when everything has loaded
